// Hooks are derived from Mocha framework
// Cypress Hooks are used to carry out the certain operations prior/post every/each test

//  Types of Hooks : 

// 1. Before()  : This hook runs once before all the tests in a test suite. (3 it block , run for the 1st it )
// 2. BeforeEach() : This hook runs before each test in a test suite.(3 it block , run for all 3)
// 3. After() : This hook runs once after all the tests in a test suite ( (3 it block , run for the 1st it ))
// 4. AfterEach(): This hook runs after each test in a test suite. (3 it block , run for all 3)

describe('Hooks Testing', () => {

    before(() => {
        cy.log("Before Block")

    })

    after(() => {

        cy.log("AFTER BLOCK")
    })

    beforeEach(() => {
        cy.log("BEFORE EACH BLOCK")
    })

    afterEach(() => {
        cy.log("AFTER EACH BLOCK")
    })

    it('it Block ONE', () => {

        cy.log("ONE")
    });

    it('it block TWO', () => {
        cy.log("TWO")
    });

    it('it block THREE', () => {
        cy.log("THREE")
    });
});