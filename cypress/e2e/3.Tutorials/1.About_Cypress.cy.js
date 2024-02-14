// ------About Cypress---------------
// Cypress is web automation testing tool
// Used to test modern web applications --- applications developed with latest tech like react , angular.js. previously they were developed on HTML , CSS 
// We can aitomate any application whoch runs on browser.
// Here cypress use JS .
// Doesot use any selenium libraries.
// It is open source
// Cypress is build on node.js
// Cypress can be used for both web automation and API automation.

// --------Features of Cypress ------
// 1. time travel 
// 2. debugability
// 3. automatic waits 
// 4. consistance result 
// 5. ss and videos 
// 6. cross browser testing


// --------- Limitations------
// cant automate window based/mobile apps 
// limites suppor
// JS and typescript
// reading and writing data into file is diffecult 
// third party reporting tool integration is also limited


// ----------Enviorment setup--------

// 1.download and install node js 
// 2.download vs code 
// 3.create a new folder for project and open vs code 
// 4. open cmd/terminal then execute foll. command :   npm -i init  (Create package.json file )
// 5. to install cypress : npm install cypress --save -dev
// 6. start cyprees : npx cypress open (or) node_module/.bin/cypress open

// ------FOLDER STRUCTURE----------

// 1. Fixtures – Fixtures are used to store test data which can then be used throughout the tests. Usually, the data is stored in JSON format.
// 2. Integration – Integration folder includes all the test files. The test files may be written as .js, .jsx, .coffee and .cjsx. Usually the preferred extension is .js and the test file name format is test-name.spec.js.
// 3. Plugins – This folder includes index.js file. This file will be automatically imported every time before the execution of every spec(test) file. Plugins enable you to tap into, modify, or extend the internal behavior of Cypress. You can check out the use cases for plugins from the cypress official docs.
// 4. Screenshots – Cypress comes with the ability to take screenshots, whether you are running via cypress open or cypress run, even in CI. To take a manual screenshot you can use the cy.screenshot() command. Additionally, Cypress will automatically capture screenshots when a failure happens during cypress run.
// 5. Support – This folder contains index.js and commands.js files. This index.js file is run before every single spec file. The support folder is a great place to put reusable behavior such as custom commands or global overrides that you want to be applied and available to all your spec files.
// 6. Videos – Cypress records a video for each spec file when running tests during cypress run. Videos are not automatically recorded during cypress open. Videos are stored in the videos folder which is set to cypress/videos by default.
// 7. Cypress.json – It is used to save different cypress related configurations for eg. base URL, timeouts, etc. The default behavior of Cypress can be modified by supplying any of the following configuration options. You can learn more about the configuration options from here.




// --------------NOTE :
// 1 . CYPRESS Will automatically detect which browser are installed in your system and will show you  