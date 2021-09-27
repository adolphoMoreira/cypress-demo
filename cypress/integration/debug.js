describe('Debug in Auth Page', () => {

  beforeEach(function () {
    cy.visit('localhost:4200/auth');
  });

  it('1 - Debug Cypress tests using the stack trace', () => {
    cy.get('.logo').should('be.visible');
    cy.get('#menu').click();
  })

  it('2 - Debug Cypress Tests using the Debugger', () => {
    cy.get('.mat-form-field-wrapper').then(($selectedElement) => {
      debugger;
      $selectedElement.get(0).click();
      cy.get($selectedElement).first().type('fill the first element');
    })
  });

  it('3 - Debug Cypress Tests using cy.log()', () => {
    cy.get('.logo').should('be.visible');
    cy.log('Navigated to Auth');
  })

  it('4 - Debug Cypress Tests with .debug() option', () => {
    cy.get('.mat-button-wrapper > div').first().debug().click();
  })

  it('5 - Debug Cypress tests with .pause() option', () => {
    cy.visit('localhost:4200/auth').pause();
  })

})