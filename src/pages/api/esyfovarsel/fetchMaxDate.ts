import { RequestOptions } from 'http'
import * as https from 'https'
import { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'
import { Readable } from 'stream'

import { stream2buffer } from '../../../proxy/stream2buffer'
import { esyfovarselHost } from '../../../utils/environment'
import { logger } from '../../../utils/logger'

const { publicRuntimeConfig } = getConfig()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await fetchMaxDate({
        req,
        res,
        backendHostname: publicRuntimeConfig.esyfovarselHost,
    })
    return res.status(200)
}

interface Opts {
    req: NextApiRequest
    res: NextApiResponse
    backendHostname: string
}

async function fetchMaxDate(opts: Opts) {
    const options: RequestOptions = {
        port: 443,
        method: 'GET',
        headers: { 'Nav-Consumer-Id': 'esyfo-info-frontend' },
    }

    const loginservicetoken = opts.req.cookies['selvbetjening-idtoken']

    if (loginservicetoken) {
        options.headers!['Authorization'] = `Bearer ${loginservicetoken}`
    }

    const stream = Readable.from(opts.req)
    const bodyin = await stream2buffer(stream)

    const backendRequest = https.request(
        `${esyfovarselHost()}/api/v1/sykepenger/maxdate`,
        options,
        (backendResponse) => {
            if (backendResponse.statusCode != null) {
                opts.res.status(backendResponse.statusCode)
            }
            for (const headersKey in backendResponse.headers) {
                opts.res.setHeader(
                    headersKey,
                    backendResponse.headers[headersKey]!
                )
            }
            backendResponse.on('data', (d: any) => {
                opts.res.write(d)
            })
            backendResponse.on('end', (d: any) => {
                opts.res.end()
            })
            logger.info('123opts', opts.res)
        }
    )

    backendRequest.write(bodyin)
    backendRequest.end()
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
}

export default handler
