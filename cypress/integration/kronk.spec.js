describe('Testing out the secret entrance to the secret lab', () => {

    it('drops me into the Alligator pit when Kronk throws the wrong lever', () => {
        cy.visit('')

        cy.get('[data-cy=companion]')
        .select('Kronk')

        cy.get('[type="radio"]')
        .check('wrong')
        
        cy.get('[data-cy=alligatorPit]').invoke('text')
        .should('equal', 'Yzma')
    })
})