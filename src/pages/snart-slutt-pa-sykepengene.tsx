import { Back, Bag, Bandage, Office1 } from '@navikt/ds-icons'
import {
    BodyLong,
    BodyShort,
    Button,
    GuidePanel,
    Heading,
    Panel,
} from '@navikt/ds-react'
import parser from 'html-react-parser'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { logEvent } from '../components/amplitude/amplitude'
import Brodsmuler, { Brodsmule } from '../components/brodsmuler/Brodsmuler'
import Vis from '../components/Vis'
import useArbeidsrettetOppfolging from '../query-hooks/useArbeidsrettetOppfolging'
import UseMaxDate from '../query-hooks/useMaxDate'
import { ArbeidsrettetOppfolging } from '../types/arbeidsrettetOppfolging'
import {
    arbeidssokerregistreringUrl,
    dittSykefravaerUrl,
} from '../utils/environment'
import { setBodyClass } from '../utils/setBodyClass'
import { tekst } from '../utils/tekster'

const brodsmuler: Brodsmule[] = [
    {
        tittel: 'Snart slutt på sykepengene',
        sti: '/snart-slutt-pa-sykepengene',
        erKlikkbar: false,
    },
]

const SnartSluttPaSykepengene = () => {
    const [hasMaxDate, setHasMaxDate] = useState<boolean>()
    const { data: sykepengerMaxDate } = UseMaxDate()

    const [arbeidsrettetOppfolging, setArbeidsrettetOppfolging] =
        useState<ArbeidsrettetOppfolging>()
    const { data: oppfolging } = useArbeidsrettetOppfolging()

    useEffect(() => {
        setBodyClass('snartslutt')
        setHasMaxDate(
            sykepengerMaxDate !== undefined && sykepengerMaxDate.maxDate != null
        )
        setArbeidsrettetOppfolging(oppfolging)
    }, [sykepengerMaxDate, oppfolging])

    const logSvar = (svar: 'JA' | 'NEI') => {
        // Old event name: Spørsmål besvart
        logEvent('Skjema spørsmål besvart', {
            sporsmal: tekst('snartslutt.mer_veiledning.tittel'),
            svar,
        })
    }

    const handleJaBtnClicked = () => {
        logSvar('JA')
        // Må sikre at amplitude får logget ferdig
        window.setTimeout(() => {
            window.location.href = arbeidssokerregistreringUrl()
        }, 400)
    }

    return (
        <>
            <Heading
                size="xlarge"
                level="1"
                className="sidebanner__tittel sidebanner"
            >
                {tekst('sidetittel.snartslutt')}
            </Heading>

            <Brodsmuler brodsmuler={brodsmuler} />

            <div className="limit limit--snartslutt">
                <BodyLong size="medium" spacing>
                    <Vis
                        hvis={hasMaxDate}
                        render={() => (
                            <>
                                {tekst('snartslutt.general_info.avsnitt1')}
                                {sykepengerMaxDate !== undefined
                                    ? sykepengerMaxDate.maxDate
                                    : ''}
                                {tekst('snartslutt.general_info.avsnitt2')}
                            </>
                        )}
                    />
                    {tekst('snartslutt.general_info.avsnitt3')}
                </BodyLong>

                <BodyLong size="medium" spacing>
                    {tekst('snartslutt.general_info.avsnitt4')}
                </BodyLong>

                <Heading
                    size="large"
                    level="2"
                    className="subtittel--large-margin"
                >
                    {tekst('snartslutt.hva_na.tittel')}
                </Heading>
                <BodyLong size="medium" spacing>
                    {tekst('snartslutt.hva_na.tekst')}
                </BodyLong>

                <div className="content-wrapper">
                    <div className="icon-wrapper, icon-circle">
                        <Office1 />
                    </div>
                    <div className="text-wrapper">
                        <div>
                            <Heading
                                size="medium"
                                level="2"
                                className="paragraph__tittel"
                            >
                                {tekst('snartslutt.tilbake.tittel')}
                            </Heading>
                            <BodyLong size="medium" spacing>
                                {tekst('snartslutt.tilbake.tekst')}
                            </BodyLong>
                            <BodyLong size="medium" spacing>
                                {parser(tekst('snartslutt.tilbake.list'))}
                            </BodyLong>
                        </div>
                    </div>
                </div>

                <div className="content-wrapper">
                    <div className="icon-column, icon-circle">
                        <Bag />
                    </div>
                    <div className="text-wrapper">
                        <div>
                            <Heading
                                size="medium"
                                level="2"
                                className="paragraph__tittel"
                            >
                                {tekst('snartslutt.bytte.tittel')}
                            </Heading>
                            <BodyLong size="medium" spacing>
                                {tekst('snartslutt.bytte.tekst')}
                            </BodyLong>
                            <BodyLong size="medium" spacing>
                                {parser(tekst('snartslutt.bytte.list'))}
                            </BodyLong>
                        </div>
                    </div>
                </div>

                <div className="content-wrapper">
                    <div className="icon-column, icon-circle">
                        <Bandage />
                    </div>
                    <div className="text-wrapper">
                        <div>
                            <Heading
                                size="medium"
                                level="2"
                                className="paragraph__tittel"
                            >
                                {tekst('snartslutt.fortsatt_syk.tittel')}
                            </Heading>
                            <BodyLong size="medium" spacing>
                                {tekst('snartslutt.fortsatt_syk.tekst')}
                            </BodyLong>
                            <BodyLong size="medium">
                                {parser(tekst('snartslutt.fortsatt_syk.list'))}
                            </BodyLong>
                        </div>
                    </div>
                </div>

                <Vis
                    hvis={arbeidsrettetOppfolging?.erUnderOppfolging === false}
                    render={() => (
                        <>
                            <Panel border={true} className="info-panel--blue">
                                <Heading size="large" level="2">
                                    {tekst('snartslutt.mer_veiledning.tittel')}
                                </Heading>
                                <BodyLong size="medium" spacing>
                                    {tekst('snartslutt.mer_veiledning.tekst')}
                                </BodyLong>
                                <BodyLong size="medium" spacing>
                                    {parser(
                                        tekst('snartslutt.mer_veiledning.list')
                                    )}
                                </BodyLong>
                                <div className="knapperad">
                                    <Button
                                        variant="primary"
                                        onClick={handleJaBtnClicked}
                                    >
                                        {tekst(
                                            'snartslutt.mer_veiledning.knapp'
                                        )}
                                    </Button>
                                </div>
                            </Panel>
                        </>
                    )}
                />
                <GuidePanel>
                    <Heading size="small" level="2">
                        {tekst('snartslutt.lese_mer.tittel')}
                    </Heading>
                    <BodyLong size="small">
                        {parser(tekst('snartslutt.lese_mer.tekst'))}
                    </BodyLong>
                </GuidePanel>

                <Heading size="large" level="2" className="subtittel">
                    {tekst('snartslutt.sporsmal.tittel')}
                </Heading>
                <BodyLong size="medium" spacing>
                    {parser(tekst('snartslutt.sporsmal.tekst'))}
                </BodyLong>

                <Link href={dittSykefravaerUrl()}>
                    <a className="navds-link back-link">
                        <Back className="tilbake-pil" />
                        <BodyShort as="span">Ditt sykefravaer</BodyShort>
                    </a>
                </Link>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Disable static rendring
    return {
        props: {},
    }
}

export default SnartSluttPaSykepengene
