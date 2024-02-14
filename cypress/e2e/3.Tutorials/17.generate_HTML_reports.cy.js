 describe('Generate HTML report', () => {

    // we will use cypress mochawesome-reporter
// follow the steps given in URL (https://www.npmjs.com/package/cypress-mochawesome-reporter)
// run in the cli /non gui mode and after test run , we will see onw new folder will be created with the name "reports"
// inside the reports we willl have index.html
// copy the complete path and paste it in new tab
// it also took the failed case SS

// we can run this in headed and in chrome browser also (npx cypress run --spec C:\Users\DELL\CYPRESS_AUTOMATION\cypress\reports\html\index.html  --headed --browser chrome)
//  after run , report will be generated and will replace the old one


     it('Test One', () => {

        // positive flow
         
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text" , "Dashboard")


     });

     it('Test Two - Negative flow', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("xyz")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text" , "Dashboard")


     });
 });