class Login_two 
{
    // created diff.  user defined methods/functions for the differnet elements 
    // we can also do this in this way also 
    // we will create the locators in one pace and then refer these locatprs in actio methos 


    name = "input[placeholder='Username']"
    pw = "input[placeholder='Password']"
    submit_btn = "button[type='submit']"
    label = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

    // this means -- this will returrn the this classlocators



    setUserName(username)
    {
        cy.get(this.name).type(username)
    }

    setPassword(pword)
    {
        cy.get(this.pw).type(pword)

    }

    click_submit()
    {
        cy.get(this.submit_btn).click()

    }

    verify_login()
    {
        cy.get(this.label).should("have.text", "Dashboard")

    }


}

export default Login_two;