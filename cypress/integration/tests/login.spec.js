beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/login')
})

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        cy.findByRole('textbox', {
            name: /username/i
        }).type('tomsmith');
        cy.findByLabelText(/password/i).type('SuperSecretPassword!.');
        cy.findByRole('button', {
            name: /login/i
          }).click();
          cy.findByText(/you logged into a secure area!/i).should('be.visible');
    });
});
