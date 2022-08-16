describe("New Inventory VDP", () => {
  it("Should show valid map link", () => {
    cy.viewport(2050, 750);
    cy.visit(
      "https://www.kingstonmazda.ca/new/vehicle/2022-mazda-mazda3-gx-id11624438.htm"
    );
    cy.get(".reqinformation-used > a")
      .invoke("attr", "href")
      .should("contain", "maps.google.com")
      .then((href) => {
        cy.request(href).its("status").should("eq", 200);
      });
  });
});
