import { BodyLong, Heading } from '@navikt/ds-react'
import { BaggageIcon, BandageIcon, Buldings3Icon } from '@navikt/aksel-icons'
import React from 'react'
import { IconRow } from '../wrappers/IconRow'

export const SnartSluttHvaKanDuGjore = () => {
    return (
        <div className="flex flex-col">
            <Heading size="large" level="2" spacing>
                Hva kan du gjøre?
            </Heading>

            <BodyLong size="medium" spacing>
                Hvis du blir frisk og er tilbake i arbeid før sykepengene tar
                slutt, kan du se bort fra denne informasjonen.
            </BodyLong>

            <div className="flex flex-col gap-8">
                <IconRow icon={<Buldings3Icon />}>
                    <div>
                        <Heading size="medium" level="2">
                            Kan du gå tilbake til jobben din?
                        </Heading>
                        <BodyLong size="medium" spacing>
                            Arbeidsgiveren din skal, så langt det er mulig,
                            tilpasse arbeidsplassen og oppgavene dine slik at du
                            kan jobbe.
                        </BodyLong>
                        <ul className="list-disc list-inside">
                            <li>Snakk med lederen din.</li>
                            <li>
                                Det er arbeidsgiverens ansvar å legge til rette
                                for at du kan jobbe.
                            </li>
                            <li>
                                Det er ditt ansvar å være med å finne løsninger
                                slik at du kan komme tilbake til jobb.
                            </li>
                        </ul>
                    </div>
                </IconRow>

                <IconRow icon={<BaggageIcon />}>
                    <div>
                        <Heading size="medium" level="2">
                            Bør du bytte jobb?
                        </Heading>
                        <BodyLong size="medium" spacing>
                            Av og til er det mulig å fungere bedre i en annen
                            jobb enn den man ble sykmeldt fra.
                        </BodyLong>
                        <ul className="list-disc list-inside">
                            <li>
                                Er det vanskelig for deg å utføre oppgavene du
                                hadde før du ble syk?
                            </li>
                            <li>
                                Er det andre forhold hos arbeidsgiveren din som
                                gjør det vanskelig for deg å fungere i jobben?.
                            </li>
                            <li>
                                Snakk gjerne med en av våre veiledere om en ny
                                jobb kan være bedre for deg.
                            </li>
                            <li>
                                Du kan finne alle utlyste stillinger i landet på
                                arbeidsplassen.no.
                            </li>
                        </ul>
                    </div>
                </IconRow>

                <IconRow icon={<BandageIcon />}>
                    <div>
                        <Heading size="medium" level="2">
                            Er du fortsatt syk?
                        </Heading>
                        <BodyLong size="medium" spacing>
                            Hvis du ikke er frisk nok til å gå tilbake til jobb
                            slik som før, kan det være riktig å søke om
                            arbeidsavklaringspenger (AAP), eller en annen
                            økonomisk støtte. Du må være forberedt på å gå ned i
                            inntekt når sykepengene tar slutt, fordi andre
                            støtter fra NAV gir mindre enn sykepenger.
                        </BodyLong>
                        <ul className="list-disc list-inside">
                            <li>
                                Husk at du selv må søke om AAP eller annen
                                økonomisk støtte. Dette skjer ikke automatisk.
                            </li>
                            <li>
                                Husk å søke støtte i god tid før sykepengene tar
                                slutt, behandlingstiden kan være lang.
                            </li>
                            <li>
                                Husk at du også kan ha rettigheter hos
                                forsikringsselskapet eller pensjonskassen din.
                            </li>
                            <li>
                                Ikke alle har rett til AAP. Les mer om AAP og om
                                hvordan du kan søke.
                            </li>
                            <li>
                                Snakk gjerne med en av våre veiledere om hva du
                                kan gjøre hvis du fortsatt er syk.
                            </li>
                        </ul>
                    </div>
                </IconRow>
            </div>
        </div>
    )
}
