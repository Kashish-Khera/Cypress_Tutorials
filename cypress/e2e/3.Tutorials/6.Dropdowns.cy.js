describe('Drodowns Testing', () => {
    it.skip('Test One : Drowndown type-1 (Dropdown with select)', () => {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // select second value from the dropdown
        cy.get("#dropdown-class-example").select("Option2")

        // chec if the value is selected pr not after
        // Note the value should match woht the value given in the option tag
        cy.get("#dropdown-class-example").select("Option2").should("have.value", "option2")


    });


    it.skip('Test Two - Drowdoen type-2 (No select tag) ', () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("India").type("{enter}");


        // check if the value selected is japan only 

        cy.get("#select2-billing_country-container").should("have.text", "India")

    });



    it.skip('Test-Three: Drowdoen with auto suggestions', () => {

        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        // after typing delhi , it will autosuggest the options , capture all the options and click the Delhi unversity options
        // find the common locator which is common in all the options

        cy.get(".suggestion-title").contains("Delhi University").click()

    });

    it('Test Four : dynamic dropdown', () => {


        cy.visit("https://www.google.com/")
        cy.get("textarea[name = 'q']").type("cypress automation")

        // find the common locator which is common in all the options
        // captures all the options
        cy.get("div.wM6W7d > span")

        // one way is to use contain option (like obove it block)

        // other option : add it in the array and Iterate it 
        // we will use function  for the options

        // assert the no. of options : 
        cy.get("div.wM6W7d > span").should("have.length" ,12)

        cy.get("div.wM6W7d > span").each(($el , $index, $list) =>
        {
            // capturee the text nd check if it matches with "Cypress automation"

            if($el.text() == "cypress automation")
            {
                // if such elemnt found , warp the elemt to capute that elemnt and then click

                cy.wrap($el).click()

            }
          
        })


        // after clicking the option , same text is displayed on the input bx 

        cy.get("textarea[name = 'q']").should("have.value", "Cypress automation")

    


    });
});