// Assertions : 
// Types : a) Implicit b) Explicit 
// a) Implicit : Supported by cypress(Buid in assertions ) : should() ,and()
// b) Explicit : explicitly  written  . expect() : used in BDD approach , assert() : uswd in TDD approach

// Assertions are derived from chai library.


describe('Assertions Testing', () => {
    it('Test one : Implicit Assertions ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


        // captures URL of the page 
        cy.url();

        // check if the URL contains the text opr not 

        //   include is the keyword used in should assertions
        cy.url().should("include", "orangehrmlive");

        // check if the cpatured url is equal to the URL we have provide din visit. 
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // contain and include  works the same 
        cy.url().should("contain", "orangehrmlive");


        // since we are working on the url and asserting it in three different lines. we can chain it 

        cy.url().should("include", "orangehrmlive")
            .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            .should("contain", "orangehrmlive");


        // should is repeated three ties , so instead of writing multiple should , we can use and ()

        cy.url().should("include", "orangehrmlive")
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            .and("contain", "orangehrmlive");

        // --Negative assertions 

        cy.url().should("not.contain", "qwerty");
        cy.url().should("not.eq", "qwerty");


        // verify the titel of the page 

        cy.title().should('eq', 'OrangeHRM')


        // putting assertions on the elements 
        // chexk if the logo is present or not 

        cy.get(".orangehrm-login-branding > img").should("be.visible")

        // check if the element exsit on the page or not
        cy.get(".orangehrm-login-branding > img").should("exist")


        // we can also chain it Nd avoid multiple should by using and()

        cy.get(".orangehrm-login-branding > img").should("be.visible")
            .and("exist")


        // check if  how many total links are present on the page 
        // checking if there are 5 anchor tags on the page or not

        cy.get("a").should("have.length", 5)


        // verify if the value present on the element is corrret or not

        cy.get("input[placeholder='Username'][name = 'username']").type("Admin").should('have.value', 'Admin')

    });

    it('Test Two - Explicit Assertions', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username'][name = 'username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click();

        // after login check on the dashbaord , user is cprrect or not 

        // we need to create explicit js ffunction to use explicit assertions


        let dashbaord_name = 'Paul Collings';
        // check after succesful login, this username is displayed or not


        // capture the element 

        // element captured from the get is stored in varibale x. and this variable is passed in the function . 
        // now we captured the text valu form the variable .i.e this is the actual name 
        cy.get(".oxd-userdropdown-name").then((x) => {

            let actual_name = x.text()
            // BDD 

            // now we will campared th captured name with the username

            expect(actual_name).to.equal(dashbaord_name)
            expect(actual_name).to.not.equal(dashbaord_name)

            // TDD 

            assert.equal(actual_name, dashbaord_name);
            assert.notEqual(actual_name, dashbaord_name);


        })






    });



});