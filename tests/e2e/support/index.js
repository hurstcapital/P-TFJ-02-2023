// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

import "cypress-localstorage-commands";
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add("addTask", (value = 0) => {
  cy.get("[data-cy=input]").type(`Task Example Title ${value}`);
  cy.get("[data-cy=add-task]").should("be.not.disabled");
  cy.get("[data-cy=add-task]").click({ multiple: true });
});

Cypress.Commands.add("actTaskItem", (eq, action) => {
  cy.get("[data-cy=task-item]")
    .eq(eq)
    .then((element) => {
      cy.get(element).within(() => {
        cy.dataCy(action).click();
      });
    });
});
