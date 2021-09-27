describe('Cypress Asserts', function () {

  it('Assert testcase', function () {
    cy.visit('localhost:4200/auth');
    // Assert the URL - IMPLICIT ASSERT
    cy.url().should('match', /auth/);
    // Assert the title - IMPLICIT ASSERT
    cy.title().should('eq', 'Ericsson Common Login');
    // Assert the copyright - IMPLICIT ASSERT
    cy.get('div.copy-right').should('contain', '© Ericsson AB 2013-2021 - All rights reserved.')
    // Click button - DEFAULT ASSERT
    cy.get('#user').click().type('upadmin');
    cy.get('#password').click().type('upadmin');
    cy.get('.mat-button-wrapper > div').click();
    // Assert location - EXPLICIT ASSERT
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:4200/auth/#/disclaimer-screen');
    });
  });
});
