/// <reference types="cypress" />
//Required for future use
declare namespace Cypress {
    interface Chainable {
        /**
         * login to http://bank-of-anthos.xyz
         * @example cy.login()
         */
         login(): Chainable<any>;

                 /**
         * login to http://localhost:3000/
         * @example cy.expenseWebLogin()
         */
         expenseWebLogin(): Chainable<any>;
    }
}