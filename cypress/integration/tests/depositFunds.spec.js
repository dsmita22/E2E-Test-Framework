import PAGES from "../../support/pages";
import {
  depositButton,
  accountDropdown,
  currentBalance,
  depositAmount,
  external_account_num,
  external_routing_num,
  external_label,
} from "../../selectors/depositeForm";

describe("Deposit Funds", () => {
  beforeEach(() => {
    cy.login(PAGES.signIn);
  });
  it("Deposit Funds ui validation", () => {
    cy.get(depositButton).click();
    cy.get(accountDropdown).select("New External Account");
    cy.get(external_account_num).type("123456").tab();
    cy.get(external_routing_num).type("123456").tab();
    cy.findByRole("button", { name: /deposit/i }).click();
    cy.findAllByText(/please enter a valid 10 digit account number\./i).should(
      "be.visible"
    );
    cy.findAllByText(/please enter a valid 9 digit routing number\./i).should(
      "be.visible"
    );
    cy.findAllByText(/please enter a valid amount\./i).should("be.visible");
  });
  it("Balance check after Deposit Funds", () => {
    // prettier-ignore
    const amount = 10.40;
    let oldValue = 0;
    let newValue = 0;
    cy.get(currentBalance).then(($span) => {
      const num01 = $span.text().trim();
      var nameArr = num01.split("$");
      oldValue = parseFloat(nameArr[1].replace(/,/g, ""), 2);
      console.log(`old Value ${oldValue}`);
      cy.get(depositButton).click();
      cy.get(accountDropdown).select("test - 1234567890 - 123456789");
      cy.get(depositAmount).type(amount);
      cy.findByRole("button", { name: /deposit/i }).click();
    });
    cy.reload();
    cy.get(currentBalance).then(($span) => {
      const num02 = $span.text().trim();
      var nameArr1 = num02.split("$");
      newValue = parseFloat(nameArr1[1].replace(/,/g, ""), 2);
      console.log(`new Value ${newValue}`);
      const num = oldValue + amount;
      expect(newValue).to.eq(num);
    });
    cy.get("table")
      .find("tbody")
      .within(() => {
        // all searches are automatically rooted to the found tr element
        cy.get("td").eq(1).contains("My first project");
      });
  });
  it("Balance deposite using New External Account and checking details added to the table", () => {
    const d = new Date().getTime();
    const accountNum = parseInt(Math.random().toFixed(10).replace("0.", ""));
    cy.get(depositButton).click();
    cy.get(accountDropdown).select("New External Account");
    cy.get(external_account_num).type(accountNum).tab();
    console.log(accountNum);
    cy.get(external_routing_num).type("987654321").tab();
    cy.get(external_label).type(d).tab();
    cy.get(depositAmount).type("10.00");
    cy.findByRole("button", { name: /deposit/i }).click();
    cy.get("table")
      .find("tbody")
      .find("tr")
      .eq(0)
      .within(() => {
        cy.get("td").eq(2).contains(accountNum);
        cy.get("td").eq(3).contains(d);
      });
  });
});
