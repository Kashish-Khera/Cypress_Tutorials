// Locators : to interact with the elements , we need something to to track them . loactors are use to locate them
// by default cypress use CSS locators .
// we need to install xpath plugin to use xpath locators 
// we first need to locate the elements then we need to identify the element
// we use get()  methos/command to locate the elements and and we have to pass locators as parameter to identify the element

describe(' CSS-Locators ', () => {
    it('1. Test One', () => {
            
        cy.visit("https://practice.automationtesting.in/");
        cy.get("i.icon-search")

    });

    it('Test Two', () => {
        
        cy.visit("https://magento.softwaretestingboard.com/?ref=hackernoon.com");


        // locate search box  and type tshirts in the box  and click enter 

        // .type('{enter}') simulates the Enter key press event, which should submit the search.
        cy.get("#search").type("T-Shirts").type('{enter}')


        // check if the searched item matches with the result 
        cy.get(".base").contains("T-Shirts");
   
   

    });


}); 


describe('XPath - Locators', () => { 

//    cypress xpath is deprecated now 


 })