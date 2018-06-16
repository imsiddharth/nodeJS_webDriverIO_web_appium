Feature: I open google.com and perform search action

  Scenario Outline: I open google.com and perform seach
    Given I am on the gmail home page
    When I login with "<email>" and "<password>"
    Then I verify logged in user

    Examples:
      | email                 | password   |
      | updateEmail@gmail.com | NoPassword |
#    Update the email and password on above line