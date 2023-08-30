import { Button, Link } from '@navikt/ds-react'
import React from 'react'
import { dittSykefravaerUrl } from '../utils/environment'
import { ChevronLeftIcon } from '@navikt/aksel-icons'
import { beskyttetSideUtenProps } from '../auth/beskyttetSide'
import { SnartSluttLenkePanel } from '../components/snart-slutt/SnartSluttLenkePanel'
import { SnartSluttIngress } from '../components/snart-slutt/SnartSluttIngress'
import { SnartSluttHvaKanDuGjore } from '../components/snart-slutt/SnartSluttHvaKanDuGjore'
import { SnartSluttOnskerDuMerVeiledning } from '../components/snart-slutt/SnartSluttOnskerDuMerVeiledning'
import { SnartSluttSporsmalOmAndreTing } from '../components/snart-slutt/SnartSluttSporsmalOmAndreTing'
import { Page } from '../components/page/Page'

const SnartSluttPaSykepengene = () => {
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

export const getServerSideProps = beskyttetSideUtenProps

export default SnartSluttPaSykepengene
