Feature: Edit one todo from the list
    As a user
    I want topress a button on a todo
    So that I can edit one todo from the list

    Scenario: Editing a todo successfully
        Given I open the main page
        And I have todos on the list
        When I click on the edit button
        And I change the content of the todo
        Then I see that the todo has changed