Feature: I open google.com and perform search action

  Scenario Outline: I open google.com and perform seach
    Given I am on the google home page
    When I search for "<search_item>"
    Then I verify "<search_item>" on result page

    Examples:
      | search_item |