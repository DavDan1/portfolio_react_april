describe("User can see My Cv", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#cv-tab").click();
  });

  it("displays My Cv header", () => {
    cy.get("#cv-header").should("contain", "My Cv");
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

  it("displays headers for cv sections", () => {
    cy.get("#info-header").should("contain.text", "Personal Info");
    cy.get("#education-header").should("contain.text", "Education");
  });

  it("displays personal info", () => {
    cy.get("#address").should("contain.text", "Mässvägen 15");
    cy.get("#country").should("contain.text", "Sweden");
    cy.get("#city").should("contain.text", "Stockholm");
    cy.get("#phone").should("contain.text", "+46729420089");
    cy.get("#email").should("contain.text", "david-danielyan@hotmail.com");
  });

  it("displays education", () => {
    cy.get("#bachelors").should("contain.text", "Bachelor`s degree");
    cy.get("#frontend-developer").should("contain.text", "Frontend Developer");
    cy.get("#fullstack-developer").should("contain.text","Fullstack Developer");
  });
});
