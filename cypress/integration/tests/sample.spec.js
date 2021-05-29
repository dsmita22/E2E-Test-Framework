import PAGES from "../../support/pages";

describe("My Login application", () => {
  it("should login with valid credentials", () => {
    cy.login(PAGES.signIn);
  });
});
