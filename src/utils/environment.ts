import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export function flexGatewayRoot() {
    return publicRuntimeConfig.flexGatewayRoot
}

export function isMockBackend() {
    return publicRuntimeConfig.mockBackend === 'true'
}

export function isOpplaering() {
    return publicRuntimeConfig.opplaering === 'true'
}

export function loginServiceUrl() {
    return publicRuntimeConfig.loginserviceUrl
}

export function loginServiceRedirectUrl() {
    return publicRuntimeConfig.loginServiceRedirectUrl
}

export function dittNavUrl() {
    return publicRuntimeConfig.dittNavUrl
}

export function amplitudeKey() {
    return publicRuntimeConfig.amplitudeKey
}

export function amplitudeEnabled() {
    return publicRuntimeConfig.amplitudeEnabled === 'true'
}

export function sykmeldingerBackendProxyRoot() {
    return publicRuntimeConfig.sykmeldingerBackendProxyRoot
}

export function narmestelederUrl() {
    return publicRuntimeConfig.narmestelederUrl
}

export function arbeidssokerregistreringUrl() {
    return publicRuntimeConfig.arbeidssokerregistreringUrl
}
