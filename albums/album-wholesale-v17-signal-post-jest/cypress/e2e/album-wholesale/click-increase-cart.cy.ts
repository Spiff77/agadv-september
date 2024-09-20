describe('template spec', () => {
  it('should increase cart label when clicking on the + button of the cart', () => {
    cy.visit('localhost:4200')
    cy.get('a').click({})
    cy.get('h4')
      .should('have.text', 'You have 2 item in your cart')
    cy.get('.actions > :nth-child(2)').click({})
    cy.get('h4')
      .should('have.text', 'You have 3 item in your cart')
  })
})
