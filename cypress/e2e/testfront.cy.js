describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    // tester si le formulaire existe avec les champs username et password
    cy.get("form").should("exist");

    // tester si les inputs du formulaire exist
    cy.get("form input").should("exist")
    cy.get("input[name='username']").should("exist")
    // cy.get("input[name='password']").should("exist")
    cy.get("form").find("input[type='submit']").should("exist");

    // // remplissage du formulaire

    // cy.get("form #username").type("admin")

    // cy.get("form #password").type("admin")

    // // validation du formulaire --> changer submit
    // cy.get('form.action-form').submit();
  })
})