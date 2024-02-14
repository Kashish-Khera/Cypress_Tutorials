// In cypress , there are two approaches to handle iFrames : 
// 1. Find the iFrame and then 

import "cypress-iframe"
describe('iFrames Testing', () => {
    it.skip('Testing One : Apprach One', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        let iframe = cy.get("#mce_0_ifr ")
            .its("0.contentDocument.body")    // 0 = since there is only one document inside it .
            .should("be.visible")
            .then(cy.wrap);   //wrap the fram and then return it 



        //  let iframe =  cy.get("#mce_0_ifr ")-->   getting the frame
        //    .its("0.contentDocument.body")    -->inside the frame we have document part
        //    .should("be.visible")  -->   check if it us visible or not 
        //    .then(cy.wrap) ;   //  -->  warp it and return it.


        iframe.clear()     //clear the default value  (Your content shows here is cleared.)

        // ctrl + a == select all and click on bold to bold the text
        iframe.clear().type("Hello  & Welcome  {ctrl+a}");
        cy.get("button[title='Bold']").click()

    });


    it('Test TWO : approach -2  ( Cypress Custom command) ', () => {

        // using the custom command , created one command for iframe(check commands.js)

        // if we have mulltiple iframes 
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getiFrames("#mce_0_ifr").clear().type("Heyooo{ctrl+a}");
        cy.get("button[title='Bold']").click()


    });


    it('Test Threee - Approach -3 (Cypress plugin For iFrame )', () => {
        
        // download the iFrame Plugin (Url : https://www.npmjs.com/package/cypress-iframe)
        // import the module in file using command : import "cypress-iframe"

        
        cy.visit("https://the-internet.herokuapp.com/iframe")
       
        // to get the iframe : 
         cy.frameLoaded("#mce_0_ifr")    // pass the loactor of the frame and it will load the frame (switch the iframe)
        // interact with the iframe 
         cy.iframe("#mce_0_ifr").clear().type("Heloo Again{ctrl+a}");
         cy.get("button[title='Bold']").click()
         cy.get("button[title='Italic']").click()

    
    
        });
});
