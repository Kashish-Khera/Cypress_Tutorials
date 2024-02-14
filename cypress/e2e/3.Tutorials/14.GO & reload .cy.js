describe('Navigation Testing', () => {
    it('Test One : Go Command ', () => {

        cy.visit("https://www.opencart.com/")
        cy.title().should("eq", "OpenCart - Open Source Shopping Cart Solution")

        // click the button and check if the title is now for the blogs or not 
        cy.get(".nav.navbar-nav>li:nth-child(4)").click()
        cy.title().should("eq", "OpenCart - Blog")

        // to go back to homepage  -- we can either use "back" or "-1"
        cy.go("back")
        cy.title().should("eq", "OpenCart - Open Source Shopping Cart Solution")

        //  to go back to blog page --w ecan use either "forward"  or "1"
        cy.go("forward")
        cy.title().should("eq", "OpenCart - Blog")

        cy.go(-1)
        cy.title().should("eq", "OpenCart - Open Source Shopping Cart Solution")

        cy.go(1)
        cy.title().should("eq", "OpenCart - Blog")

    });


    it('Reload Command', () => {

        // reloads / refresh the page 
        cy.visit("https://www.opencart.com/")
        cy.reload()

    });


});