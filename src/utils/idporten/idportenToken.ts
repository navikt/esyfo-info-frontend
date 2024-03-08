import { NextApiRequest } from "next"
import { getToken, validateToken } from "@navikt/oasis"

import { isMockBackend } from "../environment"

async function getIdportenToken(req: NextApiRequest) {
    if (isMockBackend()) {
        return "sometoken"
    }

    const token = getToken(req)
    if (!token) {
        throw new Error("loginRequiredError")
    }

    const validationResult = await validateToken(token)
    if (!validationResult.ok) {
        throw new Error("Failed to validate bearer token, redirecting to login")
    }

    return token
}

export default getIdportenToken
