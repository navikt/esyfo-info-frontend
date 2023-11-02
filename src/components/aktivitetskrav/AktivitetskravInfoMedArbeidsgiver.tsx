import React from "react"
import { BodyLong, Heading } from "@navikt/ds-react"
import { Chat2Icon, DocPencilIcon } from "@navikt/aksel-icons"
import { IconRow } from "../wrappers/IconRow"

export const AktivitetskravInfoMedArbeidsgiver = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <Heading size="large" level="2" spacing>
                    Aktivitetsplikt
                </Heading>

                <BodyLong>
                    Som sykmeldt har du en plikt til å være i aktivitet hvis det
                    er mulig. Hensikten er å unngå at sykefraværet ditt blir
                    unødvendig langt. Aktivitet vil si å jobbe noe i kombinasjon
                    med å være sykmeldt. Et eksempel er å jobbe 50 prosent og
                    være 50 prosent sykmeldt. Er det noen arbeidsoppgaver du kan
                    delta i selv om du er syk?
                </BodyLong>
            </div>

            <IconRow icon={<Chat2Icon />}>
                <div>
                    <Heading size="medium" level="3" spacing>
                        Hva må du gjøre nå?
                    </Heading>

                    <BodyLong>
                        Det er viktig at du har god dialog med arbeidsgiveren
                        din om hva som skal til for at du kan være noe i arbeid.
                        Hvis dere ikke har hatt dialog, ta kontakt og be om en
                        samtale.
                    </BodyLong>
                </div>
            </IconRow>

            <IconRow icon={<DocPencilIcon />}>
                <div>
                    <Heading size="medium" level="3" spacing>
                        Hva skjer hvis aktivitet ikke er mulig?
                    </Heading>

                    <BodyLong>
                        Hvis det ikke er mulig å legge til rette for at du kan
                        jobbe noe, må arbeidsgiveren din gi skriftlig beskjed
                        til NAV. Hvis du er for syk til å være i aktivitet, må
                        den som har sykmeldt deg begrunne dette i sykmeldingen.
                    </BodyLong>
                </div>
            </IconRow>

            <div>
                <Heading size="medium" level="3" spacing>
                    NAV vurderer aktivitetsplikten
                </Heading>

                <BodyLong>
                    NAV har som oppgave å vurdere aktivitetsplikten basert på
                    opplysninger fra arbeidsgiveren din og fra den som har
                    sykmeldt deg. Utfallet av vurderingen kan være:
                </BodyLong>
            </div>

            <ol className="list-decimal list-inside">
                <li>
                    Aktivitetsplikten er oppfylt fordi du er delvis tilbake i
                    arbeid. Utbetalingen av sykepenger fortsetter.
                </li>
                <li>
                    Du får unntak fra aktivitetsplikten på grunn av
                    helsesituasjonen, eller fordi det ikke er mulig å
                    tilrettelegge på arbeidsplassen. Utbetalingen av sykepenger
                    fortsetter.
                </li>
                <li>
                    Aktivitetsplikten er ikke oppfylt. Du kan miste retten til
                    sykepenger, og utbetalingen stanses.
                </li>
            </ol>
        </div>
    )
}
