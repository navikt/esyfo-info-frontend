import '../style/global.css'
import '../components/basic.less'
import '../components/app.less'
import '../components/aktivitetskrav/aktivitetskrav.less'
import '../components/banner/banner.less'
import '../components/bjorn/bjorn.less'
import '../components/brodsmuler/brodsmuler.less'
import '../components/velgArbeidssituasjon/velgArbeidssituasjon.less'
import '../components/snart-slutt/snartslutt.less'
import '../pages/snart-slutt.less'

import dayjs from 'dayjs'
import nb from 'dayjs/locale/nb'
import type { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import React, { PropsWithChildren, useState } from 'react'
import {
    DehydratedState,
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import { isMockBackend } from '../utils/environment'

interface AppProps extends Omit<NextAppProps, 'pageProps'> {
    pageProps: PropsWithChildren<unknown> & {
        dehydratedState: DehydratedState
    }
}

dayjs.locale({
    ...nb,
    weekStart: 1,
})

if (process.browser && isMockBackend()) {
    require('../data/mock')
}

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
                    <div className="pagewrapper">
                        <div id="root">
                            <Component {...pageProps} />
                        </div>
                    </div>
                </Hydrate>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
