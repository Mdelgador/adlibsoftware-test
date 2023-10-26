import "cypress-xpath";
describe("Checkbox on line with Blue Band selection", () => {
  it("select row with name blue band", () => {
    //go to the site
    cy.visit("https://www.primefaces.org/primereact-v5/#/datatable/selection");
    //wait for the DOM
    cy.get(".p-datatable", { timeout: 10000 }).should("be.visible");
    //Select the checkbox
    cy.xpath("//tr[@draggable='false']//div[@role='checkbox']").click();
  });
});
