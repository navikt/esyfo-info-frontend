import { esyfovarselClientId } from '../environment'
import { getTokenX } from './index'

export const getEsyfovarselTokenX = async (
    idportenToken: string | null
): Promise<string> => {
    if (!idportenToken) {
        throw new Error('Invalid idporten token.')
    }

    return await getTokenX(idportenToken, esyfovarselClientId())
}
