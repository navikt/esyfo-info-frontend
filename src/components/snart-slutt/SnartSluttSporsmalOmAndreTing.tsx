import { BodyLong, Heading, Link } from '@navikt/ds-react'
import React from 'react'

export const SnartSluttSporsmalOmAndreTing = () => {
    return (
        <div>
            <Heading size="large" level="2" spacing>
                Er du usikker?
            </Heading>
            <BodyLong size="medium">
                Har du spørsmål du ikke finner svar på her, for eksempel om
                sykepenger,{' '}
                <Link
                    href="https://www.nav.no/person/kontakt-oss/nb/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ta kontakt med NAV
                </Link>
                .
            </BodyLong>
        </div>
    )
}
