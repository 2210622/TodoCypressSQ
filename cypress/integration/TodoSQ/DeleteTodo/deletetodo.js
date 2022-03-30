import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:8080'
var todo = ''

Given('I open the main page', () => {
 cy.visit(url)
})

And('I have a todo on the list', () => {
 todo = "todo";
 cy.get('input').type(todo)
 cy.get('button').click()
 cy.wait(1000)
})

When('I click on the todo item thas was added to the list', () => {
 cy.get('li:last-child()').contains(todo).click()
})

Then('I see that it was deleted from the list', () => {
 cy.get('li:last-child()').not().contains(todo)
})
