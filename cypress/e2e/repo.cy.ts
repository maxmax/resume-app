describe('Repo spec', () => {
  it('should load the repo page', () => {
    cy.visit('/resume/maxmax/resume-app');
    cy.contains('resume-app').should('be.visible');
		cy.contains('Language Line Chart').should('be.visible');
		cy.contains('Back').should('be.visible');
  });

  it('should submit Back button and navigate to resume page', () => {
		cy.visit('/resume/maxmax/resume-app');
    cy.contains('Back').click();
    cy.url().should('include', '/resume/maxmax');
  });
})