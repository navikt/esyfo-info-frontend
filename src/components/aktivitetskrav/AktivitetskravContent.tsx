import React, { useState } from 'react'
import { Page } from '../page/Page'
import { MedUtenArbeidsgiverToggleGroup } from './MedUtenArbeidsgiverToggleGroup'
import { BodyLong } from '@navikt/ds-react'
import { AktivitetskravInfoMedArbeidsgiver } from './AktivitetskravInfoMedArbeidsgiver'
import { AktivitetskravInfoUtenArbeidsgiver } from './AktivitetskravInfoUtenArbeidsgiver'

export type MedUtenAGVisning = 'MED_ARBEIDSGIVER' | 'UTEN_ARBEIDSGIVER'

export const AktivitetskravContent = () => {
    const [visning, setVisning] = useState<MedUtenAGVisning>('MED_ARBEIDSGIVER')

    return (
        <Page headerText="Påminnelse om aktivitet">
            <MedUtenArbeidsgiverToggleGroup setVisning={setVisning} />

            <BodyLong>
                Du har snart vært sykmeldt i åtte uker. NAV skal vurdere om du
                oppfyller aktivitetsplikten og om du fortsatt har rett til
                sykepenger.
            </BodyLong>

            <div className="flex justify-center">
                {visning === 'MED_ARBEIDSGIVER' ? (
                    <img
                        src="/syk/info/static/med_arbeidsgiver.svg"
                        alt="Sykmeldt og arbeidsgiver"
                    />
                ) : (
                    <img
                        src="/syk/info/static/uten_arbeidsgiver.svg"
                        alt="Sykmeldt og NAV-veileder"
                    />
                )}
            </div>

            <BodyLong>
                Er du allerede tilbake i jobb helt eller delvis? Da bruker du
                søknaden om sykepenger til å oppgi når du startet og hvor mye du
                jobber. Slik vet vi at du allerede oppfyller aktivitetsplikten.
            </BodyLong>

            {visning === 'MED_ARBEIDSGIVER' ? (
                <AktivitetskravInfoMedArbeidsgiver />
            ) : (
                <AktivitetskravInfoUtenArbeidsgiver />
            )}
        </Page>
    )
}
