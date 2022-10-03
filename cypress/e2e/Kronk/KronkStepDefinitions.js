import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am at {word}', (word) => {
    if (word === 'THELAB') {
        cy.visit('')
    }
})

When('I bring Kronk', () => {
    cy.get('[data-cy=companion]')
    .select('Kronk')
})

And('he pulls the wrong lever', () => {
    cy.get('[type="radio"]')
    .check('wrong')
})

Then('I fall into the alligator pit', () => {
    cy.get('[data-cy=alligatorPit]').invoke('text')
    .should('equal', 'Yzma')
})

// second scenario

When('I bring the llama', () => {
    cy.get('[data-cy=companion')
    .select('Llama')
})

And('he pulls the right lever', () => {
    cy.get('[type="radio"]')
    .check('right')
})

Then('No one falls into the pit', () => {
    cy.get('[data-cy=alligatorPit]').invoke('text')
    .should('equal', '')
})