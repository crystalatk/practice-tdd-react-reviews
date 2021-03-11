describe("Creating a review", () => {
  it("Displays the review in a list", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="reviewText"]').type("New review");

    cy.pause();

    cy.get('[data-testid="submitButton"]').click();

    cy.get('[data-testid="reviewText"]').should("have.value", "");

    cy.contains("New review");
  });
});
