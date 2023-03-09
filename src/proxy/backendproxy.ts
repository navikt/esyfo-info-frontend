import * as http from 'http'
import { RequestOptions } from 'http'
import * as https from 'https'
import { NextApiRequest, NextApiResponse } from 'next'
import { Readable } from 'stream'

import { logger } from '../utils/logger'
import { getVeilarboppfolgingTokenFromRequest } from '../utils/tokenX/getTokenXFromRequest'
import { stream2buffer } from './stream2buffer'

interface Opts {
    req: NextApiRequest
    res: NextApiResponse
    tillatteApier: String[]
    backend: string
    backendHostname: string
    https: boolean
}

export async function proxyLoginserviceKallTilBackend(opts: Opts) {
    const rewritedPath = opts.req.url!.replace(`/api/${opts.backend}`, '')
    const api = `${opts.req.method} ${rewritedPath}`
    if (!opts.tillatteApier.includes(<String>cleanPathForMetric(api))) {
        logger.warn('404 Ukjent api: ' + api)
        opts.res.status(404)
        opts.res.send(null)
        return
    }

    const options: RequestOptions = {
        hostname: opts.backendHostname,
        port: opts.https ? 443 : 80,
        path: rewritedPath,
        method: opts.req.method,
        headers: {},
    }

    const headersToSkip = ['host', 'cookie', 'authorization']
    for (const headersKey in opts.req.headers) {
        if (!headersToSkip.includes(headersKey.toLowerCase())) {
            options.headers![headersKey] = opts.req.headers[headersKey]
        }
    }
    const tokenx = await getVeilarboppfolgingTokenFromRequest(opts.req)

    if (tokenx) {
        options.headers!['Authorization'] = `Bearer ${tokenx}`
    }

    const stream = Readable.from(opts.req)
    const bodyin = await stream2buffer(stream)

    const module = opts.https ? https : http
    const backendReq = module.request(options, (backendResponse) => {
        if (backendResponse.statusCode != null) {
            opts.res.status(backendResponse.statusCode)
        }
        for (const headersKey in backendResponse.headers) {
            opts.res.setHeader(headersKey, backendResponse.headers[headersKey]!)
        }

        backendResponse.on('data', (d: any) => {
            opts.res.write(d)
        })
        backendResponse.on('end', (d: any) => {
            opts.res.end()
        })
    })

    backendReq.write(bodyin)
    backendReq.end()
}

const UUID =
    /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g
const ORGNR = /\b[0-9a-f]{9}\b/g

function cleanPathForMetric(value: string | undefined): string | undefined {
    return value?.replace(UUID, '[uuid]').replace(ORGNR, '[orgnr]')
}
