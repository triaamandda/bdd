import SearchPage from './home.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the Zero Bank homepage', function () {
    cy.visit('http://zero.webappsecurity.com/index.html');
})

When('I enter the keyword {string}', function (keyword) {
    cy.get('#searchTerm').click()
})

When('I click the search button', function () {
    cy.get('#searchTerm').type('online{enter}')
})

Then('I should see relevant search results', function () {
    cy.get('h2').should('be.visible');
    cy.get('h2').should('have.text', 'Search Results:');
});