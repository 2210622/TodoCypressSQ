import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:8080'
var todo = ''

Given('I open the main page', () => {
 cy.visit(url)
})

And('I write {string} in the text field', (string) => {
 todo = string;
 cy.get('input').type(string)
})

And('I press the Add button', () => {
 cy.get('button').click()
})

And('I see that it was added to the list', () => {
 cy.wait(1000)
 cy.get('li:last-child()').contains(todo)
})

When('I click on the todo item thas was added to the list', () => {
 cy.get('li:last-child()').contains(todo).click()
})

Then('I see that it was deleted from the list', () => {
 cy.get('li:last-child()').not().contains(todo)
})
