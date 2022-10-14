describe('Tester snart-slutt', () => {
    it('Har ikke arbeidsrettet oppfolging', () => {
        cy.visit('http://localhost:8080/syk/info/snart-slutt-pa-sykepengene')

        cy.contains('Hva kan du gjøre?')
        cy.get('.snartslutt').should('contain', 'Ønsker du mer veiledning?')
    })

    it('Har avsnitt med maksdato hvis den ikke er null', () => {
        cy.visit('http://localhost:8080/syk/info/snart-slutt-pa-sykepengene')

        cy.get('.snartslutt').should(
            'contain',
            'Datoen kan forskyves, for eksempel hvis du tar ferie mens du er sykmeldt.'
        )
    })

    it('Har arbeidsrettet oppfolging', () => {
        cy.visit(
            'http://localhost:8080/syk/info/snart-slutt-pa-sykepengene?testperson=under-oppfolging'
        )

        cy.contains('Hva kan du gjøre?')
        cy.get('.snartslutt').should('not.contain', 'Ønsker du mer veiledning?')
    })

    it('Har ikke avsnitt med maksdato hvis den er null', () => {
        cy.visit(
            'http://localhost:8080/syk/info/snart-slutt-pa-sykepengene?testperson=under-oppfolging'
        )

        cy.get('.snartslutt').should(
            'not.contain',
            'Datoen kan forskyves, for eksempel hvis du tar ferie mens du er sykmeldt.'
        )
    })
})

export {}
