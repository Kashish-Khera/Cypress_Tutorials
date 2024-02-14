// to create page elemnts we will create class

class Login{

    // created diff.  user defined methods/functions for the differnet elements 
    // here we have created action method for every element. inside each action method wehave located the elemnt and perform action directly

    setUserName(username)
    {
        cy.get("input[placeholder='Username']").type(username)
    }

    setPassword(pw)
    {
        cy.get("input[placeholder='Password']").type(pw)

    }

    click_submit()
    {
        cy.get("button[type='submit']").click()

    }

    verify_login()
    {
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard")

    }


}
// to use this class , we have to export this class
export default Login;