import { NextApiRequest } from "next"

import getIdportenToken from "../idporten/idportenToken"
import { getEsyfovarselTokenX } from "./tokenX"

export const getEsyfovarselTokenFromRequest = async (
    req: NextApiRequest
): Promise<string> => {
    const idPortenToken = await getIdportenToken(req)
    return await getEsyfovarselTokenX(idPortenToken)
}
