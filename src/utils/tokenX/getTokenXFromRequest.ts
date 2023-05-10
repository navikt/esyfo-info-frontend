import { NextApiRequest } from 'next'

import getIdportenToken from '../idporten/idportenToken'
import { getEsyfovarselTokenX, getVeilarboppfolgingTokenX } from './tokenX'

export const getEsyfovarselTokenFromRequest = async (
    req: NextApiRequest
): Promise<string> => {
    const idPortenToken = await getIdportenToken(req)
    return await getEsyfovarselTokenX(idPortenToken)
}

export const getVeilarboppfolgingTokenFromRequest = async (
    req: NextApiRequest
): Promise<string> => {
    const idPortenToken = await getIdportenToken(req)
    return await getVeilarboppfolgingTokenX(idPortenToken)
}
