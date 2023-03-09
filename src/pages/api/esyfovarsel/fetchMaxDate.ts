import { get } from 'https'
import { NextApiRequest, NextApiResponse } from 'next'

import { beskyttetApi } from '../../../auth/beskyttetApi'
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

        await getMaxDate(tokenX)
        res.status(200).end()
    }
}

export default beskyttetApi(handler)

export async function getMaxDate(accessToken: string) {
    return get(`${esyfovarselHost()}/api/v1/sykepenger/maxdate`, {
        headers: {
            'Content-Type': 'application/json',
            'Nav-Consumer-Id': 'esyfo-info-frontend',
            port: 443,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}
