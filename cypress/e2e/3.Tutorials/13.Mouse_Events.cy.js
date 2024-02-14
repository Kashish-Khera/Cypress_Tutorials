require('@4tw/cypress-drag-drop')
describe('Mouse Events ', () => {

    it('Mouse Hover', () => {

        cy.visit('https://www.amazon.in/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang');
        cy.get("#icp-nav-flyout").trigger('mouseover');
    });

    it('Right Click action', () => {

        // Can be done in two ways : 
        // 1.  using trigger method
        // 2. direct methid - rightclick()


        // using Trigger method : 
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")

        // after right click - check if the particular element is visible or not
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should("be.visible")


        // 2. Using Right click method 

        cy.reload();    // reload/refresh the page
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()

        // after right click - check if the particular element is visible or not
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should("be.visible")

    });


    it.skip('Double Click', () => {


        // same here we have two approaches : 
        // 1. using trigger method 
        // 2. using dbclick() method



        // 1. using trigger method 
        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_html")
        cy.get("#demo").trigger("dblclick")
        cy.get("#demo").should("have.text", "I was double-clicked!")


        // iframe works 

        cy.frameLoaded("#iframeResult")
        cy.iframe("#iframeResult").find("#demo").trigger("dblclick")
        cy.iframe("#iframeResult").find("#demo").should("have.text", "I was double-clicked!")

        // 2. using doublt click method direclty

        cy.iframe("#iframeResult").find("#demo").dblclick()
        cy.iframe("#iframeResult").find("#demo").should("have.text", "I was double-clicked!")

    });


    it.skip('Drag & Drop using Plugin', () => {

        // firstly install the plugin (URL : https://www.npmjs.com/package/@4tw/cypress-drag-drop)
        // THEN IN THE FILE WRITE THIS COMMAND ON TOP : require('@4tw/cypress-drag-drop')

        cy.visit("http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html")

        // find the source and target Element and use drag method whoch comes from the plugin

        // in the drag method give the targeted elemnet locator i.e where you want ot drop this dragged eleemnt
        cy.get("#box6").drag("#box106")

    });


    it.only('Scrolling pages', () => {

        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        // to scroll the page till we find indian flag 

        // withiing 2 sec take me to the indian flag

        cy.get("img[alt='Flag of India']").scrollIntoView()

        cy.reload()

        // withiing 2 sec take me to the indian flag
        cy.get("img[alt='Flag of India']").scrollIntoView({duration : 3000})
        cy.get("img[alt='Flag of India']").should("be.visible")





    });




});


