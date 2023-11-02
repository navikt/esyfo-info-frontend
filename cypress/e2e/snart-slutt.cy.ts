describe("Tester snart-slutt", () => {

    it("Har avsnitt med maksdato hvis den ikke er null", () => {
        cy.visit("http://localhost:8080/syk/info/snart-slutt-pa-sykepengene")

        cy.contains("Per")
    })

    it("Har ikke avsnitt med maksdato hvis den er null", () => {
        cy.visit(
            "http://localhost:8080/syk/info/snart-slutt-pa-sykepengene"
        )

        cy.contains("Etter ").should("not.exist")
    })
})

export {}
