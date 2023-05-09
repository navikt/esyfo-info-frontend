import { RequestOptions } from 'https'
import { NextApiRequest, NextApiResponse } from 'next'
import { Readable } from 'stream'

import { beskyttetApi } from '../../../auth/beskyttetApi'
import { stream2buffer } from '../../../proxy/stream2buffer'
import { esyfovarselHost, isMockBackend } from '../../../utils/environment'
import { logger } from '../../../utils/logger'
import { getEsyfovarselTokenFromRequest } from '../../../utils/tokenX/getTokenXFromRequest'
import * as http from 'http'

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    if (isMockBackend()) {
        res.status(200).end()
    } else {
        const tokenX = await getEsyfovarselTokenFromRequest(req)
        try {
            await getMaxDate(tokenX, req, res)
        } catch (e) {
            logger.error(`getMaxDate: caught error: ${e}`)
        }

        res.status(200)
    }
}

export default beskyttetApi(handler)

export async function getMaxDate(
    accessToken: string,
    req: NextApiRequest,
    res: NextApiResponse
) {
    const stream = Readable.from(req)
    const bodyin = await stream2buffer(stream)
    const options: RequestOptions = {
        port: 443,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Nav-Consumer-Id': 'esyfo-info-frontend',
            port: 443,
            Authorization: `Bearer ${accessToken}`,
        },
    }

    const backendRequest = http.request(
        `${esyfovarselHost()}/api/v1/sykepenger/maxdate`,
        options,
        (backendResponse) => {
            if (backendResponse.statusCode != null) {
                res.status(backendResponse.statusCode)
            }
            for (const headersKey in backendResponse.headers) {
                res.setHeader(headersKey, backendResponse.headers[headersKey]!)
            }
            backendResponse.on('data', (d: any) => {
                res.write(d)
            })
            backendResponse.on('end', (d: any) => {
                res.end()
            })
        }
    )
    backendRequest.write(bodyin)
    backendRequest.end()
}
