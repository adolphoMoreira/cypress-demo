/** Hooks from Mocha */

/**
 *  Hooks Order:
 *  1 - before
 *  2 - beforeEach
 *  3 - testExecution
 *  4 - afterEach
 *  5 - after
 *
 */

describe('Cypress Test hooks', function() {
  before(function() {
    cy.log('Before');
  });

  after(function() {
    cy.log('After All')
  })

  beforeEach(function() {
    cy.log('Before Each');
  });

  afterEach(function() {
    cy.log('After Each');
  });

  it('First Cypress TestCase', function() {
    console.log('First TestCase');
  });

  it('Second Cypress TestCase', function() {
    console.log('Second TestCase');
  });

  it('Third Cypress Test Case', function () {
    cy.log("I am in skip third test case");
  });

});