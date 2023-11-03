import { GetServerSideProps } from "next"
import React, { useState } from "react"
import { Page } from "../components/page/Page"
import { MedUtenArbeidsgiverToggleGroup } from "../components/aktivitetskrav/MedUtenArbeidsgiverToggleGroup"
import { AktivitetskravInfo } from "../components/aktivitetskrav/AktivitetskravInfo"
import { minSideURL } from "../utils/environment"
import { Link } from "@navikt/ds-react"

export type MedUtenAGVisning = "MED_ARBEIDSGIVER" | "UTEN_ARBEIDSGIVER"

const Aktivitetsplikt = () => {
    const [visning, setVisning] = useState<MedUtenAGVisning>("MED_ARBEIDSGIVER")

    return (
        <Page headerText="Informasjon om aktivitetsplikt" image={visning}>
            <MedUtenArbeidsgiverToggleGroup setVisning={setVisning} />

            <AktivitetskravInfo
                harArbeidsgiver={visning === "MED_ARBEIDSGIVER"}
            />

            <Link className="flex self-center" href={minSideURL()}>
                Naviger til Min side
            </Link>
        </Page>
    )
}
export const getServerSideProps: GetServerSideProps = async () => {
    // Disable static rendring
    return {
        props: {},
    }
}
export default Aktivitetsplikt
