// interact and assert radiobuttons and checkboxs 


// radiobuttons 

describe('Radiobuttons &Checkboxes ', () => {
    it('Test One : Radiobuttons', () => {

        // check if the radiobuttons are visible or not 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("input[value='radio1']").should("be.visible");
        cy.get("input[value='radio2']").should("be.visible");
        cy.get("input[value='radio3']").should("be.visible");

        cy.get("input[value='radio2']").click();
        cy.get("input[value='radio1']").click();
        cy.get("input[value='radio3']").click();

        // we can also select radiobutton using check()

        cy.get("input[value='radio1']").check()

        // check if the radiobutton is checked or not 

        cy.get("input[value='radio1']").check().should("be.checked")

        // verify if the other radiobuttons are not selected when first one is selected.
        cy.get("input[value='radio2']").should("not.be.checked")
        cy.get("input[value='radio3']").should("not.be.checked")

    });


    it('Test Two : CheckBoxes', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // check if the chekcboxes are visible or not 

        cy.get("#checkBoxOption1").should("be.visible")
        cy.get("#checkBoxOption2").should("be.visible")
        cy.get("#checkBoxOption3").should("be.visible")

        // selecting single checkbox

        cy.get("#checkBoxOption1").check()

        // check if the first one is c=slected/checked or not 

        cy.get("#checkBoxOption2").check().should("be.checked")

        // un-selecting/uncheck  check box
        cy.get("#checkBoxOption1").uncheck()
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")


        // selecting all the checkboxes

        cy.get("input[type = 'checkbox']").check()

        // check if all are checked or not 
        cy.get("input[type = 'checkbox']").should("be.checked")

        cy.get("input[type = 'checkbox']").uncheck()

    

        // to select first chekbox ...
        cy.get("input[type = 'checkbox']").first().check()

        cy.get("input[type = 'checkbox']").last().check()




    });
});