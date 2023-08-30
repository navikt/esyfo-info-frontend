import { BodyLong, Button, Heading, Panel } from '@navikt/ds-react'
import React from 'react'
import { useArbeidsrettetOppfolging } from '../../query-hooks/useArbeidsrettetOppfolging'
import { logEvent } from '../amplitude/amplitude'
import { arbeidssokerregistreringUrl } from '../../utils/environment'

export const SnartSluttOnskerDuMerVeiledning = () => {
    const arbeidsrettetOppfolgingQuery = useArbeidsrettetOppfolging()

    const handleJaBtnClicked = () => {
        logEvent('Skjema spørsmål besvart', {
            sporsmal: 'Ønsker du mer veiledning?',
            svar: 'JA',
        })
        // Må sikre at amplitude får logget ferdig
        window.setTimeout(() => {
            window.location.href = arbeidssokerregistreringUrl()
        }, 400)
    }

    return (
        <>
            {arbeidsrettetOppfolgingQuery.isSuccess &&
                arbeidsrettetOppfolgingQuery.data.erUnderOppfolging ===
                    false && (
                    <Panel border={true} className="info-panel--blue">
                        <Heading size="large" level="2" spacing>
                            Ønsker du mer veiledning?
                        </Heading>

                        <BodyLong size="medium" spacing>
                            Hvis du tror at du fortsatt vil være syk etter at
                            sykepengene tar slutt, må du registrere deg for mer
                            veiledning.
                        </BodyLong>

                        <ul className="list-disc list-inside mb-8">
                            <li>
                                Du kan snakke med veilederen din om mulighetene
                                dine fremover
                            </li>
                            <li>
                                Du får informasjon om du har krav på annen
                                økonomisk støtte
                            </li>
                        </ul>

                        <div className="knapperad">
                            <Button
                                variant="primary"
                                onClick={handleJaBtnClicked}
                            >
                                Jeg trenger mer veiledning
                            </Button>
                        </div>
                    </Panel>
                )}
        </>
    )
}
