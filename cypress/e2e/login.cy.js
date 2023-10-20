describe('Account Test', () => {
    context('Login', ()=> {
        beforeEach(()=>{
            cy.visit('/account')
            if(cy.url('/login')) {
                cy.get("input[name='username']").type('admin@admin.com')
                cy.get("input[name='password']").type('admin12!')
                cy.get("button[name='submit']").click()
            }
        })
    })
    it('Visits the app account', () => {
        cy.url('/account')
        cy.wait(3000)
        cy.get("p").contains('admin@admin.com');
        cy.get("p").contains('Prenom : david');
        cy.get("p").contains('Nom : plop');
        cy.get("p").contains('Pseudo : Epic');
    })
})