import "../style/global.css"

import { configureLogger } from "@navikt/next-logger"
import dayjs from "dayjs"
import nb from "dayjs/locale/nb"
import type { AppProps as NextAppProps } from "next/app"
import Head from "next/head"
import React, { PropsWithChildren, useState } from "react"
import {
    DehydratedState,
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from "react-query"

import { isMockBackend } from "../utils/environment"

interface AppProps extends Omit<NextAppProps, "pageProps"> {
    pageProps: PropsWithChildren<unknown> & {
        dehydratedState: DehydratedState
    }
}

dayjs.locale({
    ...nb,
    weekStart: 1,
})

if (process.browser && isMockBackend()) {
    require("../data/mock")
}

configureLogger({
    basePath: "/syk/info",
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        /* Setting this to true causes the request to be immediately executed after initial
                           mount Even if the query had data hydrated from the server side render */
                        refetchOnMount: false,
                        refetchOnWindowFocus: false,
                    },
                },
            })
    )

    return (
        <>
            <Head>
                <title>Ditt sykefravær</title>
                <meta name="robots" content="noindex" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <main
                        className="pagewrapper"
                        tabIndex={-1}
                        id="maincontent"
                    >
                        <div id="root">
                            <Component {...pageProps} />
                        </div>
                    </main>
                </Hydrate>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
