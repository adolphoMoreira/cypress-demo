describe('Cypress Commands', function() {

  describe('CY Visit command', function() {
    it('CY visit to Google page', function() {
      cy.visit('https://www.google.com/');
      cy.url().should('match', /google.com/);
    });

    it('CY visit locally and more Options', function() {
      cy.visit('localhost:4200/auth');
      cy.url().should('match', /auth/);
      cy.title().should('eq', 'Ericsson Common Login');
    });

    it('CY visit with GET url', function() {
      cy.visit({
        url:'localhost:4200/auth',
        method: 'GET'
      });
    });
  })

  describe('CY GET command', function() {
    it('CY get using click and type to make a google search', function() {
      cy.visit('https://www.google.com');
      cy.get('input.gLFyf').as('myInput');
      cy.get('@myInput').click({force: true});
      cy.get('@myInput').type('Cypress{enter}');
    });
  });
});
