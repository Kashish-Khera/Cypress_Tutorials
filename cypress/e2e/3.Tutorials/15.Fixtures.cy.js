// fixtures are the files which have some data which we can use in our test
// it contains test data
// all fixtures file should be part of fixture folder.

// Created orangehrm.jso file in filxture folder
// we are passing username and password in fixture file to login and after login we are checking the PIM text is displayed or not on the page

// we have two approavhes to access the data from the fixtures files
// 1. directly from the fixture file 
// 2. access throgh hooks - for multiple it blocks

describe('Fixtures Testing', () => {



    it('Test One : directly from the fixture file ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //   usual way of doing the tetsing : 

        // cy.get("input[placeholder='Username']").type("Admin")
        // cy.get("input[placeholder='Password']").type("admin123")
        // cy.get("button[type='submit']").click()
        // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text" , "Dashboard")



        // using Fixtures : 

        // to get the data from the fixtures , use fixture method and pass the file name
        cy.fixture("orangehrm").then((data) => {

            // oragehrm file contains data and to capture this data we need some variable so we used then()

            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", data.expected)


        })

    });
});


describe('Access through hooks - for multiple it blocks', () => {

    let userdata;   //created a global variable
    before(() => {

        cy.fixture("orangehrm").then((testdata) => {

            // now we can use this userdata in all the t blocks
            userdata = testdata;

        })
    })

    it('Test', () => {


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // use this userdata here which contains the fixture file data 

        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.expected)


    });


    describe('Have multiple sets of data in Fixture files', () => {

        //    have multiple sets of username and pw in fixture file and have to login multiple times with diff. username and pw
        //   this is called data driven testing

        it('Data Driven Testing ', () => {

            // data == 1 set
            // userdata == 1 key value pair of the data 


            // logic : 
            // json ----> data --> have 3 sets  -->a.  ---we use testdata for each set
            //                                  -->b.
            //                                  -->c.


            cy.fixture("orangehrm_multiple_sets").then((data) => {
                // so we need to iterate for multiple sets . and foe each set we have to first visit the ppage 

                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

                data.forEach(testdata => {

                    cy.get("input[placeholder='Username']").type(testdata.username)
                    cy.get("input[placeholder='Password']").type(testdata.password)
                    cy.get("button[type='submit']").click()

                    // if login is successful only then we have to check this
                    //  since this is present only after succesful login
                    // if we pass valid adata , match the text and then logout
                    // if not , then check the error message displayed on UI

                    if (testdata.username == 'Admin' && testdata.password == "admin123") {

                        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", testdata.expected)

                        // logout after each run

                        cy.get(".oxd-userdropdown-name").click()
                        cy.get(":nth-child(4) > .oxd-userdropdown-link").click()


                    }
                    else {
                        // if the creds are not valid , validate this messge 

                        cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", testdata.expected)
                    }



                });


            })

        });
    });
});
