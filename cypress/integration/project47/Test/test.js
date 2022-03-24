import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://projeto47-developer-edition.eu40.force.com/s/'
//const url = 'https://google.com/'

Given('I open the main page', () => {
 cy.visit(url)
})

Then('I see {string} in the title', (title) => {
 cy.get('webruntime-app')
})