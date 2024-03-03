describe('Resume spec', () => {
  it('should load the resume page', () => {
    cy.visit('/resume/maxmax');
    cy.contains('maxmax').should('be.visible');
		cy.contains('Languages Usage for maxmax').should('be.visible');
		cy.contains('Repositories:').should('be.visible');
  });

  it('should submit show more and navigate to repo detail', () => {
		cy.visit('/resume/maxmax');
    cy.contains('Show more').click();
    cy.url().should('include', '/resume/maxmax/resume-app');
  });
})