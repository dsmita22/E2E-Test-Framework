/// <reference types="Cypress" />
import "@testing-library/cypress/add-commands";
import 'cypress-audit/commands';
import {
  BASE_URL,
  USERNAME,
  PASSWORD,
  EXPENSE_WEB_LOCALHOST_URL,
  EXPENSE_WEB_USERNAME,
  EXPENSE_WEB_PASSWORD,
} from "../config/config";

Cypress.Commands.add("login", (url) => {
  cy.visit(`${BASE_URL}${url}`);
  cy.findByRole("heading", { name: /sign in/i }).should("be.visible");
  cy.get("#login-username").clear();
  cy.get("#login-username").type(`${USERNAME}`);
  cy.get("#login-password").clear();
  cy.get("#login-password").type(`${PASSWORD}`);
  cy.findByRole("button", { name: /sign in/i }).click();
});

Cypress.Commands.add("expenseWebLogin", () => {
  cy.visit(`${EXPENSE_WEB_LOCALHOST_URL}`);
  cy.get("#email").type(EXPENSE_WEB_USERNAME);
  cy.get("#password").type(EXPENSE_WEB_PASSWORD);
  cy.findByRole("button", { name: /login/i }).click();
});
