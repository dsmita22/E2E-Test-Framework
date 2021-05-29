/// <reference types="cypress" />
//Required for future use
declare namespace Cypress {
    interface Chainable {
        /**
         * login to https://react-redux.realworld.io/
         * @example cy.login()
         */
         login(): Chainable<any>;
    }
}