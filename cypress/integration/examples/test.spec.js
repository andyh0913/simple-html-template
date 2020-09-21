/// <reference types="cypress" />

describe("DOM test", () => {
    it('succesfully loads', () => {
        cy.visit('cypress/app/index.html')
        cy.contains('0')  
    })
    it('click test', () => {
        cy.contains('+').click()
        cy.get('#number-div').should('have.text', '1')
    })
})