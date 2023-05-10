import { logger } from '@navikt/next-logger'

import { AktivitetskravTekster } from '../components/aktivitetskrav/aktivitetskravTekster'
import { BannerTekster } from '../components/banner/bannerTekster'
import { SnartsluttTekster } from '../components/snart-slutt/snartsluttTekster'
import { StringMap } from '../types/stringMap'

const tekster = {
    ...BannerTekster,
    ...SnartsluttTekster,
    ...AktivitetskravTekster,
}

type TekstKeys =
    | keyof typeof BannerTekster
    | keyof typeof SnartsluttTekster
    | keyof typeof AktivitetskravTekster

export const byttTekstInnhold = (text: string, data: StringMap): string => {
    if (text === undefined || data === undefined) {
        return ''
    }
    let newtext = text
    Object.keys(data).forEach((key) => {
        const regex = new RegExp(key, 'g')
        newtext = newtext.replace(regex, data[key])
    })
    return newtext
}

export const tekst = (tekst: TekstKeys, data?: StringMap): string => {
    const verdi = tekster[tekst]
    // Generiskfeilmelding har ingen tekst
    if (!verdi === undefined && !tekst.includes('soknad.feilmelding')) {
        // eslint-disable-next-line no-console
        console.log(`Mangler teksten [ ${tekst} ]`)
        logger.error(`Mangler teksten [ ${tekst} ]`)
        return tekst
    }
    if (verdi === undefined) {
        return tekst
    }
    if (data) {
        return byttTekstInnhold(verdi, data)
    }
    return verdi
}
