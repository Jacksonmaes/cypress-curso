describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('Login to your account');
    cy.get('[data-qa="login-email"]').type('teste@email.com');
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').click();
})
})