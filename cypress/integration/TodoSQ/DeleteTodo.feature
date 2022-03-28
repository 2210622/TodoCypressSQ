Feature: Add a todo to the list and delete it
    I want to add a Todo to the list and delete it

    Scenario: Adding a todo and deleting it
        Given I open the main page
        And I write "anything" in the text field
        And I press the Add button
        And I see that it was added to the list
        When I click on the todo item thas was added to the list
        Then I see that it was deleted from the list