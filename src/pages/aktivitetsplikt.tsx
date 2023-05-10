import { Heading } from "@navikt/ds-react";
import { GetServerSideProps } from "next";
import React from "react";

import Artikkel from "../components/aktivitetskrav/Artikkel";
import Brodsmuler, { Brodsmule } from "../components/brodsmuler/Brodsmuler";
import { tekst } from "../utils/tekster";

const brodsmuler: Brodsmule[] = [
    {
        tittel: "Påminnelse om aktivitet",
        sti: "/aktivitetsplikt",
        erKlikkbar: false,
    },
];

const Aktivitetsplikt = () => {
    return (
        <>
            <Heading
                size="xlarge"
                level="1"
                className="sidebanner__tittel sidebanner"
            >
                {tekst("sidetittel.liste")}
            </Heading>

            <Brodsmuler brodsmuler={brodsmuler} />

            <div className="limit aktivitetskrav">
                <>
                    <Artikkel />
                </>
            </div>
        </>
    );
};
export const getServerSideProps: GetServerSideProps = async () => {
    // Disable static rendring
    return {
        props: {},
    };
};
export default Aktivitetsplikt;
