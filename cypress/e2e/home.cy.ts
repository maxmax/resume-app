describe('Home spec', () => {
  it('should load the home page', () => {
    cy.visit('/');
    cy.contains('MY GITHUB RESUME').should('be.visible');
  });

  it('should submit the form and navigate to resume page', () => {
    const username = 'maxmax';
    cy.visit('/');
    cy.wait(2000);
    cy.get('.MuiFormControl-root input').type(username);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', `/resume/${username}`);
  });
})