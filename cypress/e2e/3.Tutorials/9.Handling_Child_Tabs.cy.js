// by default cypress doesnot support child windows.

// we have two approaches : 
// 1. changing the attribute of the element (target attribute)--click on the a tag elemnt and you will be reredirected to new tab. if e change the target attribute of the a tag , we can clikc and new URL will be open in same tab 
//    we will invoke the target attribute from the a tag at runtime (using devtools)

// 2. captures the href attribute value (contains targeted url) and then use cy.visit with this href url to iopen it in the same tab


describe('Child Tabs', () => {
    it('Test One : Changing the Target Tab', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")

        // if  we are directly clicking the link , then new tab will be opened and we cannot perform anything in the new tab
        // cypress cannot handle the child tab
        // cy.get(".example > a").click()


        // so we are removing the target attribute and then if we click the a tag , page will opened in the same tab.(targetted window willbe opened in the same tab)
        // to remove the attribute we use invoke    
        // after removing the target , we are clicking
        cy.get(".example > a").invoke("removeAttr", "target").click()

        // asserting the child tab
        cy.url().should('include', "https://the-internet.herokuapp.com/windows/new")


        //   wait for 5 sec and go back to parent tab
        cy.wait(5000)

        //  to go back to the parent tab 
        cy.go("back")

        // /assertig the parent tab 
        cy.url().should('include', "https://the-internet.herokuapp.com/windows")


    });


    it('Test Two : Using href attribute`', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        // using jquery the function to capture the href value .
      
      let url ;
        cy.get(".example > a").then((e) =>{

        //    capture the value in url variable

        url =  e.prop("href")
        cy.visit(url);
        })

        cy.url().should('include', "https://the-internet.herokuapp.com/windows/new")

        // disadvantage of this is : domain should match : as in thw parent tab and child tab should have same domain name ( like here both the urls have same domain : https://the-internet.herokuapp.com/)


    });
});