import React from "react"
import { BodyLong, Heading } from "@navikt/ds-react"

export const AktivitetskravInfoUtenArbeidsgiver = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Heading size="large" level="2">
                    Aktivitetsplikt
                </Heading>

                <BodyLong>
                    Som sykmeldt har du en plikt til å være i aktivitet hvis det
                    er mulig. Hensikten er å unngå at sykefraværet ditt blir
                    unødvendig langt. Aktivitet vil si å jobbe noe i kombinasjon
                    med å være sykmeldt. Et eksempel er å jobbe 50 prosent og
                    være 50 prosent sykmeldt.
                </BodyLong>

                <BodyLong>
                    Er du selvstendig næringsdrivende eller frilanser, er det
                    kanskje noen av arbeidsoppgavene dine du fortsatt kan
                    utføre? Er du arbeidsledig og sykmeldt, er det viktig å
                    planlegge hvilke aktiviteter eller tiltak du har behov for
                    slik at du kan komme i jobb igjen.
                </BodyLong>

                <BodyLong>
                    Du kan selv ta kontakt med NAV-kontoret der du bor hvis du
                    ikke har fått innkalling og ønsker en samtale med en
                    veileder. Husk at du kan registrere din CV på nav.no. Her
                    får du også tilgang til alle offentlig utlyste stillinger.
                    Opplysningene du legger inn, kan brukes i dialogen med NAV.
                </BodyLong>

                <BodyLong>
                    Hvis du er for syk til å være i aktivitet, må den som har
                    sykmeldt deg begrunne dette i sykmeldingen. Ved alvorlig
                    sykdom er det unntak fra aktivitetsplikten.
                </BodyLong>
            </div>

            <div>
                <Heading size="medium" level="3">
                    NAV vurderer aktivitetsplikten
                </Heading>

                <BodyLong>
                    NAV har som oppgave å vurdere aktivitetsplikten basert på
                    opplysninger fra den som har sykmeldt deg. Utfallet av
                    vurderingen kan være:
                </BodyLong>
            </div>

            <ol className="list-decimal list-inside">
                <li>
                    Aktivitetsplikten er oppfylt fordi du er delvis tilbake i
                    arbeid. Utbetalingen av sykepenger fortsetter.
                </li>

                <li>
                    Du får unntak fra aktivitetsplikten på grunn av
                    helsesituasjonen. Utbetalingen av sykepenger fortsetter.
                </li>

                <li>
                    Aktivitetsplikten er ikke oppfylt. Du kan miste retten til
                    sykepenger, og utbetalingen stanses.
                </li>
            </ol>
        </div>
    )
}
