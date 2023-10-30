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

export function narmestelederUrl() {
    return publicRuntimeConfig.narmestelederUrl
}

export function meroppfolgingRegistreringUrl() {
    return publicRuntimeConfig.meroppfolgingRegistreringUrl
}

export function esyfovarselHost() {
    return serverRuntimeConfig.esyfovarselHost
}

export function esyfovarselClientId() {
    return serverRuntimeConfig.esyfovarselClientId
}

export function idportenWellKnownUrl() {
    return serverRuntimeConfig.idportenWellKnownUrl
}

export function idportenClientId() {
    return serverRuntimeConfig.idportenClientId
}

export function tokenXClientId(): string {
    return serverRuntimeConfig.tokenXClientId
}

export function tokenXPrivateJwk(): string {
    return serverRuntimeConfig.tokenXPrivateJwk
}

export function tokenXWellKnownUrl(): string {
    return serverRuntimeConfig.tokenXWellKnownUrl
}
