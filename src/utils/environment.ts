import getConfig from "next/config"

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export function isMockBackend() {
    return publicRuntimeConfig.mockBackend === "true"
}

export function isOpplaering() {
    return publicRuntimeConfig.opplaering === "true"
}

export function minSideURL() {
    return publicRuntimeConfig.minSideUrl
}

export function dittSykefravaerUrl() {
    return publicRuntimeConfig.dittSykefravaerUrl
}

export function amplitudeEnabled() {
    return publicRuntimeConfig.amplitudeEnabled === "true"
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
