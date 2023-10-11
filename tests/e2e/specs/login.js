describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should made login", () => {
    cy.login();
  });
});
