describe("User can see My Cv", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#cv-tab").click();
  });

  it("displays My Cv header", () => {
    cy.get("#cv-header").should("contain", "Personal Information");
  });
  it("dispalys component name in url", () => {
    cy.url().should("contain", "cv");
  });
  it("does not display About Me header", () => {
    cy.get("#about-header").should("not.exist");
  });
  it("does not display Hello World", () => {
    cy.get("#hello").should("not.exist");
  });
  it("does not display My CV header", () => {
    cy.get("#projects-header").should("not.exist");
  });

 
});

