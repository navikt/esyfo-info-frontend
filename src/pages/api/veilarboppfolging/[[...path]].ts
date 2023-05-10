import { NextApiRequest, NextApiResponse } from 'next'

import { proxyKallTilBackend } from '../../../proxy/backendproxy'
import { veilarboppfolgingHost } from '../../../utils/environment'

const tillatteApier = ['GET /veilarboppfolging/api/v2/oppfolging']

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await proxyKallTilBackend({
        req,
        res,
        tillatteApier,
        backend: 'veilarboppfolging',
        backendHostname: veilarboppfolgingHost(),
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
