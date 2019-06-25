// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => {  })

/**
 * Command to get text
 * receive a locator
 * Use the cypress-commands package to get text
 */
Cypress.Commands.add("getText", (locator) => {
    return cy.get(locator).text()
});

/**
 * Command to get text using invoke text
 * receive a locator
 */
Cypress.Commands.add("getText2", (locator) => {
    cy.get(locator).invoke('text').then((text) => {
        return text;
    });
});

/**
 * Command to get text from subject
 * receive a subject
 * Use the cypress-commands package to get text
 */
Cypress.Commands.add("getText3", { prevSubject: true}, (subject) => {
    return subject.text();
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
