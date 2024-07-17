Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario Outline: Login should be success
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the login button
    Then Login should be "<output>"
    Examples:
      | username | password | output  |
      | test     | test     | success |
      | test2    | test     | failed  |
