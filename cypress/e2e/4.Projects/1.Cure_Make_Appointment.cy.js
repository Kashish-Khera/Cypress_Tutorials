// Cases : 
// ------Positive Flow ----------
// ->  check if the user is redirected to the make appointment section or not after clicking Make appointment button 
// ->  drordoen is visible or not 
// ->  Default value in drodpdown
// ->  multiselction in dropdown
// ->  check the checkbox "Apply for hospital readmission"
// ->  radiobutton selection check 
// ->  check if muliselection if radiobuttons
// ->  caleneder displayed when clicked on field 
// -> calneder displayed when cicked on icon
// -> sleect date from the calender
// -> check if user is able to change the date via the arrows keys in the datepicker calender
// -> manually type the date in the field 
// -> check if user is able to comment in the comment section
// -> check if user is able to resize the comment section
// -> click on Book an appointment button
// -> check if get the confirmation msg or not 
// -> check the values displayed in the confirmatio msg
// -> Click on "Go to homepage button"
// ->check if we are redirected to the homepage or not 

// ------Negative Flow----------
// -> error message on focus out 
// -> type incorrect date in the Date field and check if the error msg is dispayed or not 
// -> leave the date field black
// leave the comment section blank





describe('Cure Make appointment ', () => {

    beforeEach(() => {

        cy.visit("https://katalon-demo-cura.herokuapp.com/")
    })


    it('Test one - Appointment section redirection', () => {

        cy.get("btn-make-appointment").click()
        cy.get("col-sm-12 text-center > h2").should("have.text")
    });

});