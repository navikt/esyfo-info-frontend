import { requestOboToken } from "@navikt/oasis"

export async function getTokenX(
    subjectToken: string,
    audience: string
): Promise<string> {
    const tokenX = await requestOboToken(subjectToken, audience)
    if (!tokenX.ok) {
        throw new Error(
            `Failed grant for client id: ${audience}. Error message: ${tokenX.error.message}`,
            { cause: tokenX.error }
        )
    }

    return tokenX.token
}
