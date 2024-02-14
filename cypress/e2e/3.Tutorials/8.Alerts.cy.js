// Types of alerts

// 1. simple alert : have some text and "OK" button
// 2. Confirm Alert : have "OK" and "Cancel" button
// 3. Propmt Alert : Textbox with input along with "OK"
// 4. Authentication alert

// cypress automatially /by default handles the alerts . automatically it will closed it .
// closed the alert/or assert it , we will write seprate code. we will write some events

describe('Alerts Testing', () => {
    it('Test One : Simple Alert Box ', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        // we will npt be able to see the alert since cypress automatically closed it

        // check ffi the msg displayed in the alert box is correct or not

        // t representing alert window
        cy.on("window: alert", (t) => {

            expect(t).to.contain("I am JS Alert")
        })

        // we no need to wrote code to closed alert window , since cypress do it automatically 

        cy.get("#result").should("have.text", "You successfully clicked an alert")
    });



    it('Test Two : Confirmation Alert  --OK BUtton ', () => {

        // have two events  : OK and Closed.
        // cypress willl automatically closed this alert by clicking "OK" button

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()


        // OK button 
        cy.on("window:confirm", (t) => {

            expect(t).to.contain("")
        })

        // cypress automatically closed the alert window by using OK button by default

        cy.get("#result").should("have.text", "You clicked: Ok")


    });

    it('Test Three :  Confirmation Alert  -- Cancel BUtton', () => {
       
       
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        // Cancel Button 

        // this event will close the window using cancel button
        // if instead of false, if i write true , it will close the alerrt using OK button

        cy.on("window:confirm", () => false)
        cy.get("#result").should("have.text", "You clicked: Cancel")

    });


    it.only('Test Four : Prompt Alert--Ok Button', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsPrompt()']").click()

        // this event should be trigger before opening the alert window
        
        cy.window().then((win) =>{

            cy.stub(win, 'prompt').returns("welcome")
        })


        // will do later on

    });
}); 