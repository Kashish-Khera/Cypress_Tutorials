// -------------Basic Syntax --------------: 

// 1.  USING ARROW FUNCTION : 

describe('Test Suite name ', () => {
    it('Test scenerios', () => {
        //Visit the Demo QA Website
        cy.visit("Website URL");
    })
})

// 2. without using arrow function

describe('Test Suite Name ', function () {
    it('Test scenerios', function () {
        //Visit the Demo QA Website
        cy.visit("Website URL");
    })
})


// ---------Basic Commands ------

// -> visit : visit the URL 
// -> title  : return Title of the page
// -> cy.url(); : captures the url of the page 
// -> type() : type in any inout box
// -> .type('{enter}') : simulates the Enter key press event, which should submit the search.
// -> check() : check/select radiobutton/checkboxes
// -> uncheck() : de-select/uncheck radiobutton/checkbox 
// -> first() : select the first eleemnt from the given data
// -> last()  : select the first eleemnt from the given data
// -> select() : to sleect the vaue form the dropdown
// -> skip() : used in the it block.while running , cypress will skip this it block . (syntax: it.skip)
// -> each () : Each is used to interact with multiple elements. It is used to iterate through an array-like structure in cypress.
// -> wrap() : wrap() command is used for elements. if you want to execute the Cypress command with jQuery so you have to add that one layer on top of the jQuery object so that you can use or leverage the cypress commands
// -> on() : In Cypress, the cy.on() command is used to attach event listeners to DOM elements. This allows you to observe and respond to events that occur during your test. Here's the basic syntax for cy.on(): cy.get('element-selector').on('event-name', callback)
// -> only() : The only keyword is used in the context of test selection and execution. It allows you to run only the tests that are marked with the only keyword, ignoring other tests.it.only('This test will run exclusively', () => {// Test code here})
// -> invoke() : In Cypress, "invoke" is a method that allows you to invoke a function or method on a DOM element. This can be useful when you want to interact with the webpage or retrieve some information from it.  It allows you to call methods or retrieve properties of DOM elements and then make assertions based on the results . Syntax : cy.get('your-selector').invoke('method-name', 'arguments');
// -> go()  : Navigate back or forward to the previous or next URL in the browser's history  (URL : https://docs.cypress.io/api/commands/go)
// -> wait()  : Wait for a number of milliseconds or wait for an aliased resource to resolve before moving on to the next command. (https://docs.cypress.io/api/commands/wait)
// -> then() : It's commonly used when you need to work with values or perform actions that depend on the result of a previous command. syntax : cy.command().then((result) => { // Code to handle the result or perform actions});
// -> its()  : The .its() command in Cypress is used to access and work with properties of an object returned by a preceding Cypress command. Access Properties: Use .its('propertyKey') to access a specific property of an object or element returned by a preceding Cypress command. After accessing the property, you can use .should('eq', expectedValue) or any other Cypress assertion to check or manipulate the property's value. Ex. cy.get('input[name="username"]').its('value').should('eq', 'JohnDoe');
// -> clear() : Clear the value of an input or textarea.  sytanx : cy.clear()
// -> within() : The within command allows you to run a series of commands within the context of a selected element, reducing the need to repeatedly specify the same parent element.cy.get('parent-element-selector').within((element) => {// Commands and assertions scoped to the 'parent-element'});  .within((element) => { /* commands and assertions */ }): This is a callback function that takes the selected element as an argument. You can then run a series of Cypress commands and assertions within the context of this element.
// -> log()  : In Cypress, the cy.log() command is used to log messages to the Cypress Command Log. It's a way to provide informational or debugging messages during test execution. The cy.log() command does not affect the behavior of your tests; it's purely for logging and debugging purposes. Syntax : cy.log('Message to log'); The messages logged using cy.log() will appear in the Cypress Command Log,
// -> trigger() : The trigger method in Cypress is used to programmatically trigger events on DOM elements. It allows you to simulate user interactions, such as clicks, mouseovers, key presses, and more. Syntax : cy.get('element-selector').trigger('event');
// -> cy.reload();  : reloads /Refresh the page to reset the state
// -> find()  : the find() method is used to search for and select elements within a previously selected element. It's particularly useful when you want to narrow down your search scope to a specific area of the DOM. Syntax : cy.get('parent-element-selector').find('child-element-selector');
// -> scrollIntoView() :  scrollIntoView is a standard JavaScript method that's used to scroll an element into the viewport .syntax : cy.get('#your-element').scrollIntoView();
// -. fixture() : the fixture method is used for loading and working with external files such as JSON, text, or binary files during your tests. It helps you simulate different scenarios by providing data or file content that your test can interact with. The fixture method allows you to load and use these external files as fixtures in your tests. By using fixtures, you can keep your test data separate from your test code, making it easier to maintain and update test data independently from your test scripts. .Syntax : 
// cy.fixture('example.json').then((data) => {
//     // 'data' contains the content of the 'example.json' file
//     // You can perform actions with the loaded data
//   });
//   Example : 
//   // Loading a text fixture
//   cy.fixture('example.txt').then((text) => {
//     // 'text' contains the content of the 'example.txt' file
//     // You can perform actions with the loaded text
//   });

// -> screenshot() --> take the ss of the test
  




// ----------Assertions---------

// used to verify that the state of the application being tested meets the expected conditions.

// 1. should()
// 2. contains()


// -----------------Locators--------

// A Selector or Locator is an object that finds and returns web page items/elements on a page based on the query
// Locators : to interact with the elements , we need something to to track them . loactors are use to locate them
// by default cypress use CSS locators .
// we need to install xpath plugin to use xpath locators 
// we first need to locate the elements then we need to identify the element

// CSS SELECTORS : 

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// | Selector                      | Description                                                     | Example                                             |
// |-------------------------------|---------------------------------------------------------------=-|---------------------------------------------------- |
// | Universal Selector (`*`)      | Selects all elements on the page.                               | `* { color: red; }`                                 |
// | Type Selector                 | Selects elements by their HTML tag name.                        | `p { font-weight: bold; }`                          |
// | Class Selector                | Selects elements by their class attribute.                      | `.my-class { background: blue; }`                   |
// | ID Selector                   | Selects a single element by its unique ID.                      | `#my-id { border: 1px solid red; }`                 |
// | Descendant Selector           | Selects an element that is a descendant of another element.     | `div p { font-size: 16px; }`                        |
// | Child Selector                | Selects an element that is a direct child of another element.   | `ul > li { list-style-type: square; }`              |
// | Adjacent Sibling Selector     | Selects an element that is immediately preceded by a specified  | `h2 + p { margin-top: 20px; }`                      |
// | Attribute Selector            | Selects elements based on their attributes.                     | `input[type="text"] { border: 1px solid #ccc; }`    |
// | Pseudo-class Selector         | Selects elements based on their state or position.              | `a:hover { color: orange; }`                        |
// | Pseudo-element Selector       | Selects specific parts of an element.                           | `p::first-line { font-weight: bold; }`              |
// | Grouping Selector             | Combines multiple selectors into one rule.                      | `h1, h2, h3 { font-family: 'Arial', sans-serif; }`  |
// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// input tag having class as icon-search. sleectors can be : 
// "i[class = 'icon-search' ]") ,  i.icon-search


// tag#id
// tag.class
// tag[attribute = 'value']
// tag.class[attribute = 'value']


// 1. get() :  we use get()  methos/command to locate the elements and and we have to pass locators as parameter to identify the element










// NOTE : 
// -> Every spec file (cy.js) contains describe block 
// -> we can have multiple it block in describe block 
// ->we can run via 2 methods - Via cypess app & via cmd/terminal
    // a) Via cypess app  -- in terminal type : npx cypress open 
    // b) via terminal -- open terminal : npx cypress run  , by default t will run in headless mode. (we cant see any UI) .
    // to run in head mode  : npx cypress run --headed. (same like point a)
    // to run specific spec(cy.js file) file  : npx cypress run --spec "filepath"  /  npx cypress run --spec  --headed filepath
    // by default , test run on electron browser, to run on any other browser (say Chrome ): npx cypress run --browser chrome --spec filepath 
// -> we can also chain should() Nd avoid multiple should by using and()
// -> for explicit assertion , you need to write JS functions
// ->  // Note the value should match woht the value given in the option tag
// ->cy.get("#dropdown-class-example").select("Option2").should("have.value" , "option2")
// ->to check if the the types value is type in input box or not we use have.value . we will not use contains. example. cy.get.type , then cy.get.should("have.value")
// ->then() method is used to capture and work with the values or properties of the targeted elements. It allows you to perform assertions, log information, or use the captured values in subsequent commands.
// fixtures are the files which have some data which we can use in our test
// it contains test data
// all fixtures file should be part of fixture folder.

// -> The Page Object Model (POM) is a design pattern used for organizing and managing the elements and interactions of a web application in a more structured and maintainable way. It is commonly used in test automation to separate the test code from the web page's structure and behavior. Although Cypress doesn't have native support for POM, you can implement POM-like principles to improve the organization of your Cypress tests.
// Here are the key concepts of implementing a Page Object Model pattern in Cypress:
// Page Objects:
// Page objects represent web pages or components of your application.
// Create a JavaScript class or module for each page or component.
// The page object should encapsulate the page's structure, elements, and interactions.
// Methods within the page object should provide actions specific to that page.
// javascript
// Copy code
// // Example of a page object for a login page
// class LoginPage {
//   // Selectors for elements on the page
//   usernameField = 'input[name="username"]';
//   passwordField = 'input[name="password"]';
//   loginButton = 'button[type="submit"]';

//   // Methods for interacting with the page
//   visit() {
//     cy.visit('/login');
//   }

//   login(username, password) {
//     cy.get(this.usernameField).type(username);
//     cy.get(this.passwordField).type(password);
//     cy.get(this.loginButton).click();
//   }
// }

// export default new LoginPage();
// Test Cases:
// In your test files, import the page objects for the pages or components you want to test.
// Use the page objects to perform actions and assertions.
// javascript
// Copy code
// import LoginPage from '../page-objects/LoginPage';

// describe('Login Test', () => {
//   it('should log in with valid credentials', () => {
//     LoginPage.visit();
//     LoginPage.login('testuser', 'password123');
    
//     // Add assertions here
//   });
// });
// Benefits:

// Improved code organization and readability: Separating page interactions from test code makes your tests more maintainable.
// Reusability: Page objects can be reused across multiple test cases.
// Easier maintenance: When the structure of a page changes, you only need to update the corresponding page object.
// Drawbacks:

// Cypress doesn't natively support POM like some other testing frameworks. This means you may need to adapt the POM principles to fit Cypress.
// Creating page objects can be time-consuming, especially for complex applications.
// Implementing POM principles in Cypress can greatly improve the organization and maintainability of your test suite, making it easier to write and manage automated tests. However, it's essential to tailor the approach to suit Cypress's style and capabilities.