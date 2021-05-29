import "@testing-library/cypress/add-commands";
import { BASE_URL } from "../config/config";

Cypress.Commands.add("login", (url) => {
  cy.visit(`${BASE_URL}${url}`);

  cy.findByRole("button", { name: /sign in/i }).click();
});
