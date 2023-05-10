import { NextApiRequest, NextApiResponse } from 'next'

import { beskyttetApi } from '../../../auth/beskyttetApi'
import { get } from '../../../utils/axios'
import { esyfovarselHost, isMockBackend } from '../../../utils/environment'
import { getEsyfovarselTokenFromRequest } from '../../../utils/tokenX/getTokenXFromRequest'

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    if (isMockBackend()) {
        res.status(200).end()
    } else {
        const tokenX = await getEsyfovarselTokenFromRequest(req)
        try {
            const snartSluttPaaSykepengene = await get(
                `${esyfovarselHost()}/api/v1/sykepenger/maxdate`,
                {
                    accessToken: tokenX,
                }
            )
            res.status(200).json(snartSluttPaaSykepengene)
        } catch (e) {
            res.status(500).end()
        }
    }
}

export default beskyttetApi(handler)
