import { ToggleGroup } from '@navikt/ds-react'
import React from 'react'
import { MedUtenAGVisning } from '../../pages/aktivitetsplikt'
import { Buldings3Icon, PersonIcon } from '@navikt/aksel-icons'

interface Props {
    setVisning(val: MedUtenAGVisning): void
}

export const MedUtenArbeidsgiverToggleGroup = ({ setVisning }: Props) => {
    return (
        <div className="flex w-full justify-center">
            <ToggleGroup
                defaultValue="MED_ARBEIDSGIVER"
                onChange={(visning) => setVisning(visning as MedUtenAGVisning)}
            >
                <ToggleGroup.Item value="MED_ARBEIDSGIVER">
                    <Buldings3Icon aria-hidden />
                    Jeg har arbeidsgiver
                </ToggleGroup.Item>
                <ToggleGroup.Item value="UTEN_ARBEIDSGIVER">
                    <PersonIcon aria-hidden />
                    Jeg har ikke arbeidsgiver
                </ToggleGroup.Item>
            </ToggleGroup>
        </div>
    )
}
