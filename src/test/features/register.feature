Feature: Create new user in demoblaze
@register
Scenario: create a new user successfully
    Given User navigates to the application
    When User fills out the registration information 
    | automation  | pass1234  |
    Then User is register successfully