import PAGES from "../../support/pages";

describe("Home page validation", () => {
  it("UI validation", () => {
    cy.login(PAGES.signIn);
    cy.get(".account-number").invoke("text").should("eq", "2524594729");
  });
});
