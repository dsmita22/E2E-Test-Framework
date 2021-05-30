/// <reference types="Cypress" />
import "@testing-library/cypress/add-commands";
import { BASE_URL, USERNAME, PASSWORD } from "../config/config";

Cypress.Commands.add("login", (url) => {
  cy.visit(`${BASE_URL}${url}`);
  cy.findByRole("heading", { name: /sign in/i }).should("be.visible");
  cy.get("#login-username").clear();
  cy.get("#login-username").type(`${USERNAME}`);
  cy.get("#login-password").clear();
  cy.get("#login-password").type(`${PASSWORD}`);
  cy.findByRole("button", { name: /sign in/i }).click();
});

