describe('My First Test Suite', () => {

    it('My first test !', () => {

      cy.visit('https://example.cypress.io')
      cy.contains('Commands')
      expect(true).to.equal(true)
      cy.get('h1').should('exist')
                  .and('have.text', 'Kitchen Sink')
    })

    it('My second test !', () => {

      cy.visit('https://demoblaze.com/')
      cy.get("#nava").should('be.visible')
    })


  })
  