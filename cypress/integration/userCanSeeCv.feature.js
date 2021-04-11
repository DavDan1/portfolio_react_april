describe("User can see My Cv", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#cv-tab").click();
  });
  describe("to My Cv tab and it", () => {
    beforeEach(() => {
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
  });

  it("user can see My Cv info", () => {
    cy.get("#cv-1").within(() => {
      cy.get("#name").should("contain", "Davit Danielyan");

      cy.get("#address").should(
        "contain",
        "Mässvägen 15, 19161 Sollentuna Stockholm, Sweden"
      );
      cy.get("#occupation").should("contain", "Fullstack Developer");
      cy.get("#experience").should("contain", "Frontend Developer");
      cy.get("#current").should("contain", "Student At Craft Academy");
    });
  });
});
