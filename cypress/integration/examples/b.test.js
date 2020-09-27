/// <reference types="cypress" />

describe("Test B", () => {
    it('succesfully loads', () => {
        cy.visit('index.html')
        cy.get('#number-div').should('have.css', 'background-color', 'rgb(0, 255, 255)')
    })
})