Feature: Create new user in demoblaze

Scenario: create a new user successfully
    Given User navigates to the application
    When User fills out the registration information 
    | automation  | pass1234  |
    Then User is register successfully