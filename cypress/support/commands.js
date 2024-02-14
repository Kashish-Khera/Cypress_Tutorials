// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// for autosuggestions 

///<reference types="Cypress" />


// custom command for iframe 
Cypress.Commands.add("getiFrames" , (iframe)=>{
    return cy.get("iframe")
    .its("0.contentDocument.body")    // 0 = since there is only one document inside it .
    .should("be.visible")
    .then(cy.wrap);   //wrap the fram and then return it 

})


// custo command for clicking the link by passing the label (value written for a tag)
Cypress.Commands.add("Click_Link" , (label) =>{

    // internally find the lables in the a tag and then cicking it 
    cy.get("a").contains(label).click();
})

// custom ommand for login

Cypress.Commands.add("loginapp" , (email , pw) =>{

    cy.get("#Email").type(email)
    cy.get("#Password").type(pw)
    cy.get("button[class='button-1 login-button']").click()

})