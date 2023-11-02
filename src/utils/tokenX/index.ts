import { grant } from "./tokenx.grant"

export async function getTokenX(
    subjectToken: string,
    audience: string
): Promise<string> {
    let tokenX

    try {
        tokenX = await grant(subjectToken, audience)
    } catch (e) {
        throw new Error(
            `Failed grant for client id: ${audience}. Error message: ${e}`
        )
    }

    if (!tokenX.access_token) {
        throw new Error(
            `Token X missing access token for client id: ${audience}`
        )
    }

    return tokenX.access_token
}
