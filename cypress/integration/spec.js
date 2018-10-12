/// <reference types="cypress" />
beforeEach(() => {
  cy.visit('index.html')
})
it('works', () => {
  cy.contains('h1', 'My page')
})
it('waits', () => {
  cy.wait(1000)
})
