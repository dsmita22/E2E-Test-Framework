import PAGES from "../../support/pages";
import {
  depositButton,
  accountDropdown,
  currentBalance,
  depositAmount,
} from "../../selectors/depositeForm";

describe("Deposit Funds", () => {
  beforeEach(() => {
    cy.login(PAGES.signIn);
  });
  it("Deposit Funds ui validation", () => {
    cy.get(depositButton).click();
    cy.get(accountDropdown).select("New External Account");
  });
  it("Balance check after Deposit Funds", () => {
    cy.get(currentBalance).invoke("text");
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
  });
});
