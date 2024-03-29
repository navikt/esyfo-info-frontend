/* eslint-disable @typescript-eslint/no-var-requires */
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

module.exports = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: cspHeader,
            },
        ]
    },
    basePath: '/syk/info',
    generateEtags: false, //Disabler etag i pages
    serverRuntimeConfig: {
        // Will only be available on the server side
        decoratorEnv: process.env.DECORATOR_ENV,
        decoratorUrl: process.env.DECORATOR_URL,
        noDecorator: process.env.NO_DECORATOR,
        idportenWellKnownUrl: process.env.IDPORTEN_WELL_KNOWN_URL,
        idportenClientId: process.env.IDPORTEN_CLIENT_ID,
        tokenXClientId: process.env.TOKEN_X_CLIENT_ID,
        tokenXPrivateJwk: process.env.TOKEN_X_PRIVATE_JWK,
        tokenXWellKnownUrl: process.env.TOKEN_X_WELL_KNOWN_URL,
        esyfovarselClientId: process.env.ESYFOVARSEL_CLIENT_ID,
        esyfovarselHost: process.env.ESYFOVARSEL_HOST,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        mockBackend: process.env.MOCK_BACKEND,
        opplaering: process.env.OPPLAERING,
        sykefravaerUrl: process.env.SYKEFRAVAER_URL,
        minSideUrl: process.env.MIN_SIDE_URL,
        dittSykefravaerUrl: process.env.DITT_SYKEFRAVAER_URL,
        amplitudeEnabled: process.env.AMPLITUDE_ENABLED,
        environment: process.env.ENVIRONMENT,
        narmestelederUrl: process.env.NARMESTELEDER_URL,
        meroppfolgingRegistreringUrl: process.env.MEROPPFOLGING_REGISTRERING_URL,
    },
}
