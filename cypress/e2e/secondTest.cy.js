describe('My second test suite', () => {

    it('demo test using fixtures', () => {

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
  