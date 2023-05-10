describe("Tester aktivitetskrav", () => {
    it("Aktivitetskrav info side", () => {
        cy.visit("http://localhost:8080/syk/info/aktivitetsplikt");

        cy.get(".artikkel")
            .should(
                "contain",
                "Du har snart vært sykmeldt i åtte uker. NAV skal vurdere om du oppfyller aktivitetsplikten og om du fortsatt har rett til sykepenger."
            )
            .should(
                "contain",
                "Det er viktig at du har god dialog med arbeidsgiveren din om hva som skal til for at du kan være noe i arbeid. Hvis dere ikke har hatt dialog, ta kontakt og be om en samtale."
            )
            .should(
                "not.contain",
                "Er du selvstendig næringsdrivende eller frilanser, er det kanskje noen av arbeidsoppgavene dine du fortsatt kan utføre? Er du arbeidsledig og sykmeldt, er det viktig å planlegge hvilke aktiviteter eller tiltak du har behov for slik at du kan komme i jobb igjen."
            );

        cy.contains("Jeg har ikke arbeidsgiver").click();

        cy.get(".artikkel")

            .should(
                "not.contain",
                "Det er viktig at du har god dialog med arbeidsgiveren din om hva som skal til for at du kan være noe i arbeid. Hvis dere ikke har hatt dialog, ta kontakt og be om en samtale."
            )
            .should(
                "contain",
                "Er du selvstendig næringsdrivende eller frilanser, er det kanskje noen av arbeidsoppgavene dine du fortsatt kan utføre? Er du arbeidsledig og sykmeldt, er det viktig å planlegge hvilke aktiviteter eller tiltak du har behov for slik at du kan komme i jobb igjen."
            );

        cy.contains("Jeg har arbeidsgiver").click();

        cy.get(".artikkel")
            .should(
                "contain",
                "Du har snart vært sykmeldt i åtte uker. NAV skal vurdere om du oppfyller aktivitetsplikten og om du fortsatt har rett til sykepenger."
            )
            .should(
                "contain",
                "Det er viktig at du har god dialog med arbeidsgiveren din om hva som skal til for at du kan være noe i arbeid. Hvis dere ikke har hatt dialog, ta kontakt og be om en samtale."
            )
            .should(
                "not.contain",
                "Er du selvstendig næringsdrivende eller frilanser, er det kanskje noen av arbeidsoppgavene dine du fortsatt kan utføre? Er du arbeidsledig og sykmeldt, er det viktig å planlegge hvilke aktiviteter eller tiltak du har behov for slik at du kan komme i jobb igjen."
            );
    });
});

export {};
