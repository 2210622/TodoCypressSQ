Feature: Delete a todo from the list
    As a user
    I want to click on a todo
    So that I can delete it from the list

    Scenario: Deleting a todo successfully
        Given I open the main page
        And I have a todo on the list
        When I click on the todo item thas was added to the list
        Then I see that it was deleted from the list