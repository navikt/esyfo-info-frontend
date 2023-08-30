import { BodyLong, Heading, Radio, RadioGroup } from '@navikt/ds-react'
import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import { Page } from '../components/page/Page'
import { AktivitetskravInfoUtenArbeidsgiver } from '../components/aktivitetskrav/AktivitetskravInfoUtenArbeidsgiver'
import { AktivitetskravInfoMedArbeidsgiver } from '../components/aktivitetskrav/AktivitetskravInfoMedArbeidsgiver'

type Visning = 'MED_ARBEIDSGIVER' | 'UTEN_ARBEIDSGIVER' | 'VALGFRI'

const Aktivitetsplikt = () => {
    const [visning, setVisning] = useState<Visning>('MED_ARBEIDSGIVER')

    return (
        <Page headerText="Ditt sykefravær">
            <div>
                <Heading size="medium" level="2" spacing>
                    Påminnelse om aktivitet
                </Heading>

                <RadioGroup
                    legend=""
                    defaultValue="MED_ARBEIDSGIVER"
                    hideLegend={true}
                    onChange={(val: Visning) => setVisning(val)}
                >
                    <Radio value="MED_ARBEIDSGIVER">Jeg har arbeidsgiver</Radio>
                    <Radio value="UTEN_ARBEIDSGIVER">
                        Jeg har ikke arbeidsgiver
                    </Radio>
                </RadioGroup>
            </div>

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
export const getServerSideProps: GetServerSideProps = async () => {
    // Disable static rendring
    return {
        props: {},
    }
}
export default Aktivitetsplikt
