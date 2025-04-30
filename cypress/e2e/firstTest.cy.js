describe('My First Test Suite', () => {

    it('My first test !', () => {

      cy.visit('https://example.cypress.io')
      cy.contains('type')
      expect(true).to.equal(true)
    })

    it('My second test !', () => {

      cy.visit('https://demoblaze.com/')
      cy.get("#nava").should('be.visible')
    })


  })
  