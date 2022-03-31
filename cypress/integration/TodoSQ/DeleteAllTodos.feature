Feature: Delete all todos from the list
    As a user
    I want the delete all button
    So that I can delete all the todos from the list

    Scenario: Deleting all todos successfully
        Given I open the main page
        And I have todos on the list
        When I click on the delete all button
        Then I see that all todos were deleted from the list