describe('user can see the CV details', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#cv-tab").click();
      });
});
