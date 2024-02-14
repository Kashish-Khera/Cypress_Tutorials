// ----HTML TABLE ----
// Here's a breakdown of the elements:

// <table>: This is the root element that defines the entire table.
// <caption> (Optional): It's used for providing a title or caption for the table.
// <thead> (Optional): This section groups the header cells within a table. It separates the header from the main body of the table.
// <tr>: Stands for "table row." It defines a row within the table.
// <th>: Stands for "table header." It defines header cells within a row. Header cells are typically bold and centered by default.
// <tbody>: This section groups the main body of the table, including data cells.
// <td>: Stands for "table data." It defines regular data cells within a row. Data cells contain the actual content or data of the table.
// <tfoot> (Optional): Similar to `<thead>, it groups footer cells. It separates the footer from the main body of the table.

// example : 
//     <table>
//         <caption>Employee Information</caption>
//         <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Department</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>101</td>
//                 <td>John Doe</td>
//                 <td>HR</td>
//             </tr>
//             <tr>
//                 <td>102</td>
//                 <td>Jane Smith</td>
//                 <td>IT</td>
//             </tr>
//         </tbody>
//         <tfoot>
//             <tr>
//                 <td colspan="3">Total Employees: 2</td>
//             </tr>
//         </tfoot>
//     </table>


// ---Output --

// Employee Information
// +-----+------------+------------+
// | ID  | Name       | Department  |
// +-----+------------+------------+
// | 101 | John Doe   | HR         |
// | 102 | Jane Smith | IT         |
// +-----+------------+------------+
// Total Employees: 2



describe('Tables ', () => {


    beforeEach("Login", () => {

        // this is a hook . thi s code will be exxcuted before each it block

        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click();   //close the popup

        cy.get("#menu-customer > a").click()   //customer main menu
        cy.get("#menu-customer > ul > li:first-child ").click()   //customer main menu
    })

    it('Test One : Check the no. of rows & cols', () => {


        //    tbody contains rows , thead contains cols

        // to find the rows   
        cy.get(".table.table-bordered.table-hover > tbody >tr").should("have.length", 10)

        // to check the leneght of cols
        cy.get(".table.table-bordered.table-hover > thead > tr > td").should("have.length", 7)

    });

    it('Test Two : Check cell data from a specifi row and cols', () => {

        cy.get(".table.table-bordered.table-hover > tbody> tr:nth-child(4) >  td:nth-child(3)").contains("gorankrezic90@gmail.com")



    });

    it('Test Three : Read all the rows and cols in first page  (or table without pagination) ', () => {

        // to read all the data , we will use array . (use each() )
        // go to each row and then read each columns

        cy.get(".table.table-bordered.table-hover > tbody> tr").each(($each_row, row_index, $rows_array) => {

            cy.wrap($each_row).within(() => {

                cy.get("td").each(($each_col, index, $cols_array) => {
                    cy.log($each_col.text())
                })

            })


        })

    });

    it.only('Test Four : Pagination', () => {

        // Assume you have a web page with pagination controls and data items.

describe('Pagination Test', () => {
    it('should navigate through pages and display the correct data', () => {
      cy.visit('your_pagination_page_url'); // Replace with your URL
  
      // Perform initial assertions or interactions
      // For example, you might assert the initial data items.
  
      // Click the "Next" button to go to the next page.
      cy.get('.next-button').click();
  
      // Perform assertions to check if the new data items are displayed.
  
      // Click the "Previous" button to return to the previous page.
      cy.get('.previous-button').click();
  
      // Perform assertions to check if you are back to the original data items.
  
      // Optionally, you can click on specific page numbers to navigate to a specific page.
      // For example:
      // cy.get('.page-number-2').click(); // Click to go to page 2
  
      // Perform assertions to check if the correct data items are displayed for the selected page.
  
      // Repeat these steps for other navigation controls and page numbers.
    });
  });
  

    });
});