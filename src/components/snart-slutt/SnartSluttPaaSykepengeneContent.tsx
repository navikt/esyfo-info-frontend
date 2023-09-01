import { SnartSluttIngress } from './SnartSluttIngress'
import { SnartSluttHvaKanDuGjore } from './SnartSluttHvaKanDuGjore'
import { SnartSluttOnskerDuMerVeiledning } from './SnartSluttOnskerDuMerVeiledning'
import { SnartSluttLenkePanel } from './SnartSluttLenkePanel'
import { SnartSluttSporsmalOmAndreTing } from './SnartSluttSporsmalOmAndreTing'
import { Button, Link } from '@navikt/ds-react'
import { dittSykefravaerUrl } from '../../utils/environment'
import { ChevronLeftIcon } from '@navikt/aksel-icons'
import React from 'react'
import { Page } from '../page/Page'

export const SnartSluttPaaSykepengeneContent = () => {
    return (
        <Page headerText="Snart slutt på sykepengene - hva skjer nå?">
            <SnartSluttIngress />

            <SnartSluttHvaKanDuGjore />

            <SnartSluttOnskerDuMerVeiledning />

            <SnartSluttLenkePanel />

            <SnartSluttSporsmalOmAndreTing />

            <Link href={dittSykefravaerUrl()}>
                <Button
                    variant="tertiary"
                    icon={<ChevronLeftIcon aria-hidden />}
                >
                    Ditt sykefravaer
                </Button>
            </Link>
        </Page>
    )
}
