import { BodyLong, BodyShort, Heading } from '@navikt/ds-react'
import parser from 'html-react-parser'
import React, { useState } from 'react'

import { tekst } from '../../utils/tekster'
import VelgArbeidssituasjon from '../velgArbeidssituasjon/VelgArbeidssituasjon'
import { Visning } from '../velgArbeidssituasjon/visning'
import Vis from '../Vis'

const Artikkel = () => {
    const [visning, setVisning] = useState<Visning>('MED_ARBEIDSGIVER')

    return (
        <article className="artikkel">
            <div className="artikkel__header">
                <Heading size="small" className="artikkel__tittel">
                    {tekst('aktivitetskrav-varsel.tittel')}
                </Heading>
                <VelgArbeidssituasjon
                    kanVelge={true}
                    setVisning={setVisning}
                    medHjelpetekst={false}
                />
            </div>
            <BodyShort className="artikkel__ingress">
                {tekst('aktivitetskrav-varsel.ingress')}
            </BodyShort>
            <div className="artikkel__bilde">
                <Vis
                    hvis={visning === 'MED_ARBEIDSGIVER'}
                    render={() => (
                        <img
                            src="/syk/info/static/med_arbeidsgiver.svg"
                            alt={tekst(
                                'aktivitetskrav-varsel.alt.MED_ARBEIDSGIVER'
                            )}
                        />
                    )}
                />
                <Vis
                    hvis={visning === 'UTEN_ARBEIDSGIVER'}
                    render={() => (
                        <img
                            src="/syk/info/static/uten_arbeidsgiver.svg"
                            alt={tekst(
                                'aktivitetskrav-varsel.alt.UTEN_ARBEIDSGIVER'
                            )}
                        />
                    )}
                />
            </div>
            <BodyLong className="artikkel__innhold">
                {parser(
                    // eslint-disable-next-line
                    tekst(`aktivitetskrav-varsel.innhold.${visning}` as any)
                )}
            </BodyLong>
        </article>
    )
}

export default Artikkel
