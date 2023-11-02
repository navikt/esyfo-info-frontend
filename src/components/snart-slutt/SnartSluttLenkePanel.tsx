import { Heading, Link } from "@navikt/ds-react"
import React from "react"

export const SnartSluttLenkePanel = () => {
    return (
        <div>
            <Heading size="large" level="2" spacing>
                Her kan du lese mer
            </Heading>

            <ul className="md:list-disc md:list-inside">
                <li>
                    <Link
                        href="https://www.nav.no/syk-lenge"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mulighetene dine fremover
                    </Link>
                </li>

                <li>
                    <Link
                        href="http://arbeidsplassen.no/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Utlyste ledige stillinger på arbeidsplassen.no
                    </Link>
                </li>

                <li>
                    <Link
                        href="https://www.nav.no/no/person/arbeid/sykmeldt-arbeidsavklaringspenger-og-yrkesskade/sykmelding-ulike-former/friskmelding-til-arbeidsformidling"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sykepenger mens du søker ny jobb
                    </Link>
                </li>

                <li>
                    <Link
                        href="https://www.nav.no/aap"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Om AAP og om hvordan du kan søke
                    </Link>
                </li>
            </ul>
        </div>
    )
}
