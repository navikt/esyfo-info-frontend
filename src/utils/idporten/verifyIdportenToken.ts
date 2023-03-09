import { createRemoteJWKSet, jwtVerify } from 'jose'
import { Client, Issuer } from 'openid-client'

import { idportenClientId, idportenWellKnownUrl } from '../environment'
import { logger } from '../logger'

let _issuer: Issuer<Client>
let _remoteJWKSet: ReturnType<typeof createRemoteJWKSet>

async function issuer(): Promise<Issuer<Client>> {
    if (typeof _issuer === 'undefined') {
        _issuer = await Issuer.discover(idportenWellKnownUrl())
    }
    return _issuer
}

async function jwkSet(): Promise<ReturnType<typeof createRemoteJWKSet>> {
    if (typeof _remoteJWKSet === 'undefined') {
        const iss = await issuer()
        _remoteJWKSet = createRemoteJWKSet(
            new URL(<string>iss.metadata.jwks_uri)
        )
    }

    return _remoteJWKSet
}

export async function validateToken(bearerToken: string): Promise<boolean> {
    const token = bearerToken.replace('Bearer ', '')
    const verified = await jwtVerify(token, await jwkSet(), {
        issuer: (await issuer()).metadata.issuer,
    })

    if (verified.payload.exp && verified.payload.exp * 1000 <= Date.now()) {
        logger.warn('Token is expired')
        return false
    }

    if (verified.payload.client_id !== idportenClientId()) {
        return false
    }

    if (verified.payload.acr !== 'Level4') {
        logger.warn('Token does not have acr Level4')
        return false
    }

    return true
}
