import { Issuer } from "openid-client"

import { tokenXWellKnownUrl } from "../environment"

let _issuer: Issuer

export async function getIssuer(): Promise<Issuer> {
    if (_issuer) return _issuer
    _issuer = await Issuer.discover(tokenXWellKnownUrl())
    return _issuer
}
