import useMaxDate from '../../query-hooks/useMaxDate'
import { BodyLong, Skeleton } from '@navikt/ds-react'
import React from 'react'

export const SnartSluttIngress = () => {
    const maxDateQuery = useMaxDate()

    if (maxDateQuery.isLoading) {
        return (
            <div>
                <Skeleton variant="text" height="8rem" />
                <Skeleton variant="text" height="4rem" />
            </div>
        )
    }

    if (maxDateQuery.isSuccess) {
        return (
            <div>
                {maxDateQuery.data.maxDate && maxDateQuery.data.utbetaltTom && (
                    <BodyLong size="medium" spacing>
                        Per {maxDateQuery.data.utbetaltTom} er det beregnet at
                        din siste dag med sykepenger er{' '}
                        {maxDateQuery.data.maxDate}. Datoen gjelder hvis du er
                        sykmeldt uten opphold. Den vil flytte seg hvis du for
                        eksempel jobber noen perioder, eller hvis du tar ferie.
                        Du kan få sykepenger i maksimalt 52 uker, og for deg vil
                        det si at denne datoen nå nærmer seg.
                    </BodyLong>
                )}

                <BodyLong size="medium">
                    Hvis du er usikker på om du er tilbake i arbeid innen
                    sykepengene tar slutt, er det viktig at du planlegger
                    framover slik at du ikke risikerer å stå uten inntekt.
                </BodyLong>
            </div>
        )
    }
    return null
}
