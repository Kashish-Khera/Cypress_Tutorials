// project object model  : 
// seperate page elemnt  in seerate files and actual test script in another files 
// say in a webste we have -login search and advance search page 
// we need to write testcases  and add validations/test for each page 
// each testcase contains -  multiple testmethods. each test method  which include elemnts and actions
// supose i want to test one test case , i need login page and search page  elements
// and suppose to test testcase 2 , i want pagelements from all the three pages
// if. we are locating the elemnts multiple times for each testcase
// what will be doing -- we will locate the element once and then resuse them in multiple testcases. --this is Project of model
// problems without POM -- 1) duplications of elemnt locators , 2) if we have to update the locators --then we have to do it mn multiple spaces

// in POM pattern , for every page , we will craete a page object class  which contains only page elemnts and action methods
// in actual testcase , we will not locate the elements , we will write the test and validations 

import Login from "../../PageObjects/LoginPage"
import Login_two from "../../PageObjects/LoginPage2"


describe('Page Object Model Pattern', () => {
    it('Test One --General Method ', () => {


        // general approach : 

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard")

    });

    it('Test Two - Using POM (Login Page)', () => {
        
        
        // Using POM

        // create separe folder in cypress folder for Page object
        // we have created one POM by the name - LoginPage which contains a class and methods and now we will use this method 
        // we will import the loginpage first

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // create the objects for the class

        const login_object = new Login();
        login_object.setUserName("Admin")
        login_object.setPassword("admin123")
        login_object.click_submit()
        login_object.verify_login()



    });


    it('Test Three - Using POM (Login Page -2 )', () => {
        
        
        // Using POM

        // create separe folder in cypress folder for Page object
        // we have created one POM by the name - LoginPage which contains a class and methods and now we will use this method 
        // we will import the loginpage first

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // create the objects for the class

        const login_object = new Login_two();
        login_object.setUserName("Admin")
        login_object.setPassword("admin123")
        login_object.click_submit()
        login_object.verify_login()
    });


    it.only('Test Four - Using POM with Fixtures', () => {
        
    
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // create the objects for the class

        cy.fixture("orangehrm").then((creds) =>{

            const login_object = new Login_two();
            login_object.setUserName(creds.username)
            login_object.setPassword(creds.password)
            login_object.click_submit()
            login_object.verify_login()

        })

        
    });


    
});
