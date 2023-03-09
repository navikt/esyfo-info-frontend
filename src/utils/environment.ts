import getConfig from 'next/config'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export function isMockBackend() {
    return publicRuntimeConfig.mockBackend === 'true'
}

export function isOpplaering() {
    return publicRuntimeConfig.opplaering === 'true'
}

export function dittNavUrl() {
    return publicRuntimeConfig.dittNavUrl
}

export function dittSykefravaerUrl() {
    return publicRuntimeConfig.dittSykefravaerUrl
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

export function veilarboppfolgingHost() {
    return serverRuntimeConfig.veilarboppfolgingHost
}

export function veilarboppfolgingClientId() {
    return serverRuntimeConfig.veilarboppfolgingClientId
}

export function esyfovarselHost() {
    return publicRuntimeConfig.esyfovarselHost
}

export function esyfovarselClientId() {
    return publicRuntimeConfig.esyfovarselClientId
}

export function idportenWellKnownUrl() {
    return publicRuntimeConfig.idportenWellKnownUrl
}

export function idportenClientId() {
    return publicRuntimeConfig.idportenClientId
}

export function tokenXClientId(): string {
    return publicRuntimeConfig.tokenXClientId
}

export function tokenXPrivateJwk(): string {
    return publicRuntimeConfig.tokenXPrivateJwk
}

export function tokenXWellKnownUrl(): string {
    return publicRuntimeConfig.tokenXWellKnownUrl
}
