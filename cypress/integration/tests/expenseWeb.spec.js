
describe('Test Expense Web',() =>{

    it('Login to expnese web',()=>{
        cy.visit("http://localhost:3000/");
        cy.get("input[id='email']").type("testauto@gmail.com");
        cy.get("input[id='password']").type("Password1");
    })
})