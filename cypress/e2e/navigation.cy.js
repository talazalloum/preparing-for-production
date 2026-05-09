describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:50523");
  });

  it("Navigates to Card Sets page", () => {
    cy.contains("CARD SETS").click();
    cy.contains("Card Sets").should("exist");
  });

  it("Navigates to About page", () => {
    cy.contains("ABOUT").click();
    cy.contains("About").should("exist");
  });

  it("Navigates to Home page", () => {
    cy.contains("HOME").click();
    cy.contains("Study Night").should("exist");
  });
});