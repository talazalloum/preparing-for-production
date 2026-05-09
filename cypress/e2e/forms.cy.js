describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:50523");
  });

  it("Shows error on empty form submission", () => {
    cy.contains("CARD SETS").click();

    cy.get("button").click();

    cy.contains("Please fill out this field");
  });
});