describe('user can see the CV', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#cv-tab").click();
      });
});
