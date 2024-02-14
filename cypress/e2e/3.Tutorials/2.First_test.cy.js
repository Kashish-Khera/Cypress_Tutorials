describe('Demo Test', () => {
    it('Test one --Test Tilte (Positive Test ) ', () => {

        // visit the URL : 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //  return the title of the page 
        cy.title()

        // check if the title matches with our title or not (for matching we use asserrions)
        cy.title().should("eq", "OrangeHRM")
   
    });

    it('Test TWO --Test Tilte (negative Test )', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should("eq", "QWERTY")
    });



});