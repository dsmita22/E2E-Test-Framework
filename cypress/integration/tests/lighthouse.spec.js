describe("Audits", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("lighthouse audits", () => {
    const customThresholds = {
      performance: 70,
      accessibility: 70,
      seo: 70,
      "best-practices": 70,
      pwa: 0,
    };

    const desktopConfig = {
      extends: "lighthouse:default",
      formFactor: "desktop",
      screenEmulation: { disabled: true },
    };
    cy.lighthouse(customThresholds, desktopConfig);
  });
});
