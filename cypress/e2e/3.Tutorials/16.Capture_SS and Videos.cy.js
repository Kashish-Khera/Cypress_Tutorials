// 2 approaches : 
// 1.using screenshot command we can captue the ss and this ss wil be stored inn screeshots folder
// 2. another way is  when test fails -- ss is taken automatically when the test failure happens

//  Note : we can capture the ss intentionally using screenshot command,  but not videos 

describe('Capture SS and vidoes on Test Failure ', () => {
    it('Test one', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.screenshot();  //will capture with some random name 

        cy.get("input[placeholder='Password']").type("admin123")

        cy.screenshot("Homepage with creds")   //capture ss and save the ss with the name provide in the () . 

        // if we want to capture some specific thing like logo --we can passs the locator also

        cy.get("img[alt='company-branding']").screenshot()

        // save the logo with name 
        cy.get("img[alt='company-branding']").screenshot("Logo Image")

    });


    it('Captures the ss when test fails', () => {
        // cypress will automatically captues the test fail ss
        // in case of excuting the test via terminal -- in this case we will see the ss in ss folder on test fail

        // automatically capture the ss & video . this only works when you ru test thrighu cli (terminal)


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[placeholder='Username']").type("qwertyu")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text" , "Dashboard")


        // run via cmd/terminal  usng npx cypress run --spec filepath



    });
});