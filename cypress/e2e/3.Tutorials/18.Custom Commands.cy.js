// to create custom command , we will write code in commands.js

describe('Custom Commands Testing', () => {
    it('handling links', () => {

        // without custom commands 

        // cy.visit("https://demo.nopcommerce.com/")
        // cy.get("img[title='Show details for Apple MacBook Pro 13-inch']").click()
        // cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch")

        // create a custom command where we create a command where we will pass the label , itnseatd of whole lable an then clicking it 


        // using custom command : 

        cy.visit("https://demo.nopcommerce.com/")
        cy.Click_Link("Apple MacBook Pro 13-inch")
        cy.go("back")
        cy.Click_Link("$25 Virtual Gift Card")

    });


    it('Login Command', () => {
        
        // Custom coomand for login
        cy.visit("https://demo.nopcommerce.com/")

        // we can write either this or can use our pld cisytom command
        // cy.get(".ico-login").click()


        cy.Click_Link("Log in"); 
        // create this creds on website and use them 
        
        cy.loginapp("testing@gmailcom", "test")


    });
});