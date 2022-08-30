import { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

import { proxyLoginserviceKallTilBackend } from '../../../proxy/backendproxy'

const { serverRuntimeConfig } = getConfig()

const tillatteApier = ['GET /veilarboppfolging/api/v2/oppfolging']

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await proxyLoginserviceKallTilBackend({
        req,
        res,
        tillatteApier,
        backend: 'veilarboppfolging',
        backendHostname: serverRuntimeConfig.veilarboppfolgingHost,
        https: true,
    })
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
}

export default handler
