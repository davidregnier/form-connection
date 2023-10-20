describe('Register test', ()=>{
    context('Register', ()=>{
      beforeEach(()=>{
        cy.visit('http://localhost:3000/signup');
      })
  
      it('should have link to go /signin inside the form', ()=>{
        cy.get('div.card').find('h1').contains('Inscription');
        cy.get('form').find('a[href="/signin"]').contains('Déjà un compte ?').click();
        cy.url().should('eq', 'http://localhost:3000/signin')
        
      })
  
      it('should input userName is correctly filled', ()=>{
        cy.get('input[name="userName"]').type('123admin')
        cy.get('div')
          .contains('Entre 4 et 24 caractères.')
          .contains('Doit commencer par une lettre.')
          .contains('Doit comporter au moins une lettre et aucun caractère spécial.')
          .should('exist')
        cy.get('input[name="email"]').type('admin@admin.com')
        cy.get('input[name="tel"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="confirmPassword"]').type('Admin12!')
        cy.get('input[name="userName"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should input email is correctly filled', ()=>{
        cy.get('input[name="userName"]').type('admin')
        cy.get('input[name="email"]').type('adminadmin.com')
        cy.get('div')
          .contains('L\'adresse mail doit avoir le bon format.')
          .should('exist')
        cy.get('input[name="tel"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="confirmPassword"]').type('Admin12!')
        cy.get('input[name="email"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should input tel is correctly filled', ()=>{
        cy.get('input[name="userName"]').type('admin')
        cy.get('input[name="email"]').type('admin@admin.com')
        cy.get('input[name="tel"]').type('040')
        cy.get('div')
          .contains('Le numéro de téléphone doit avoir le bon format.')
          .should('exist')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="confirmPassword"]').type('Admin12!')
        cy.get('input[name="tel"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should input password is correctly filled', ()=>{
        cy.get('input[name="userName"]').type('admin')
        cy.get('input[name="email"]').type('admin@admin.com')
        cy.get('input[name="tel"]').type('0401020304')
        cy.get('input[name="password"]').type('dmin12!')
        cy.get('div')
          .contains('Doit contenir au moins 8 caractères.')
          .contains('Doit comporter au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.')
          .should('exist')
        cy.get('input[name="confirmPassword"]').type('Admin12!')
        cy.get('input[name="password"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should input confirmPassword is correctly filled', ()=>{
        cy.get('input[name="userName"]').type('admin')
        cy.get('input[name="email"]').type('admin@admin.com')
        cy.get('input[name="tel"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="confirmPassword"]').type('Admn12!')
        cy.get('div')
          .contains('Les mots de passe doivent correspondre.')
          .should('exist')
        cy.get('input[name="confirmPassword"].is-invalid').should('exist')
        cy.get('button[type="submit"]').should('have.attr', 'disabled')
      })
  
      it('should successfully register', ()=>{
        cy.get('input[name="userName"]').type('admin')
        cy.get('input[name="email"]').type('admin@admin.com')
        cy.get('input[name="tel"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="confirmPassword"]').type('Admin12!')
        cy.get('button[type="submit"]').eq(0).click({ force: true })
        cy.url().should('eq', 'http://localhost:3000/account')
      })
  
    })
  })