describe('Tester snart-slutt', () => {
    it('Har ikke arbeidsrettet oppfolging', () => {
        cy.visit('http://localhost:8080/syk/info/snart-slutt-pa-sykepengene')

        cy.contains('Hva kan du gjøre?')
        cy.contains('Ønsker du mer veiledning?')
    })

    it('Har avsnitt med maksdato hvis den ikke er null', () => {
        cy.visit('http://localhost:8080/syk/info/snart-slutt-pa-sykepengene')

        cy.contains('Per')
    })

    it('Har arbeidsrettet oppfolging', () => {
        cy.visit(
            'http://localhost:8080/syk/info/snart-slutt-pa-sykepengene?testperson=under-oppfolging'
        )

        cy.contains('Hva kan du gjøre?')
        cy.contains('Ønsker du mer veiledning?').should('not.exist')
    })

    it('Har ikke avsnitt med maksdato hvis den er null', () => {
        cy.visit(
            'http://localhost:8080/syk/info/snart-slutt-pa-sykepengene?testperson=under-oppfolging'
        )

        cy.contains('Etter ').should('not.exist')
    })
})

export {}
