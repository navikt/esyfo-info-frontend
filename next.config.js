/* eslint-disable @typescript-eslint/no-var-requires */
const withLess = require('next-with-less')

const csp = {
    'default-src': ["'none'"],
    'connect-src': [
        "'self'",
        'https://*.nav.no',
        'https://www.google-analytics.com',
        'https://nav.psplugin.com',
        'https://ta-survey-v2.herokuapp.com',
    ],
    'img-src': [
        "'self'",
        'data:',
        'https://*.nav.no',
        'https://www.google-analytics.com',
    ],
    'font-src': ["'self'", 'data:', 'https://*.psplugin.com'],
    'frame-src': ["'self'", 'data:', 'https://vars.hotjar.com'],
    'worker-src': ['blob:', '*.nais.io'],
    'style-src': ["'self'", "'unsafe-inline'", 'https://*.nav.no'],
    'script-src': [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https://*.nav.no',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
        'https://static.hotjar.com',
        'https://script.hotjar.com',
        'https://in2.taskanalytics.com',
        'https://account.psplugin.com',
    ],
}

const cspString = Object.entries(csp)
    .map((entry) => `${entry[0]} ${entry[1].join(' ')}`)
    .join('; ')

const cspHeader = [
    {
        key: 'Content-Security-Policy-Report-Only',
        value: cspString,
    },
]

module.exports = withLess({
    async headers() {
        return [
            {
                source: '/:path*',
                headers: cspHeader,
            },
        ]
    },
    basePath: '/syk/info',
    lessLoaderOptions: {},
    generateEtags: false, //Disabler etag i pages
    serverRuntimeConfig: {
        // Will only be available on the server side
        decoratorEnv: process.env.DECORATOR_ENV,
        decoratorUrl: process.env.DECORATOR_URL,
        noDecorator: process.env.NO_DECORATOR,
        veilarboppfolgingHost: process.env.VEILARBOPPFOLGING_HOST,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        loginserviceUrl: process.env.LOGINSERVICE_URL,
        loginServiceRedirectUrl: process.env.LOGINSERVICE_REDIRECT_URL,
        mockBackend: process.env.MOCK_BACKEND,
        opplaering: process.env.OPPLAERING,
        sykefravaerUrl: process.env.SYKEFRAVAER_URL,
        dittNavUrl: process.env.DITTNAV_URL,
        dittSykefravaerUrl: process.env.DITT_SYKEFRAVAER_URL,
        amplitudeEnabled: process.env.AMPLITUDE_ENABLED,
        environment: process.env.ENVIRONMENT,
        narmestelederUrl: process.env.NARMESTELEDER_URL,
        arbeidssokerregistreringUrl: process.env.ARBEIDSSOKERREGISTRERING_URL,
        esyfovarselHost: process.env.ESYFOVARSEL_HOST,
    },
})
