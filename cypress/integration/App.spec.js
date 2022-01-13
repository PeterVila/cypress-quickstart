//We want to check form submission
describe("this file does a form submission", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    }) //Runs before each of these test

    it("Should submit form", () => {
        cy.get('#text').type("test") //chain
        cy.get('#submitted').should('not.exist') //should = should pass
        cy.get('form').submit() //Submit the form then #submitted should exist
        cy.get("#submitted").should('exist')
    }) //first test
})