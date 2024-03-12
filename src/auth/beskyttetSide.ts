import { logger } from "@navikt/next-logger"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { getToken, validateToken } from "@navikt/oasis"

import { isMockBackend } from "../utils/environment"

export type PageHandler = (
    context: GetServerSidePropsContext
) => Promise<GetServerSidePropsResult<Record<string, unknown>>>

const beskyttetSide = (handler: PageHandler) => {
    return async function withBearerTokenHandler(
        context: GetServerSidePropsContext
    ): Promise<ReturnType<NonNullable<typeof handler>>> {
        if (isMockBackend()) {
            return handler(context)
        }

        const request = context.req

        if (request == null) {
            throw new Error(
                "Context is missing request. This should not happen"
            )
        }
        const wonderwallRedirect = {
            redirect: {
                destination: `/oauth2/login?redirect=/syk/info/${context.resolvedUrl}`,
                permanent: false,
            },
        }

        const token = getToken(request)
        if (!token) {
            return wonderwallRedirect
        }

        const validationResult = await validateToken(token)
        if (!validationResult.ok) {
            logger.error("Kunne ikke validere idportentoken i beskyttetSide")
            return wonderwallRedirect
        }

        return handler(context)
    }
}

export const beskyttetSideUtenProps = beskyttetSide(
    async (): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
        return {
            props: {},
        }
    }
)
