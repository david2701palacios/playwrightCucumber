Feature: Add to cart many products

Background:
    Given User navigates to the application
    And User click on the login link
    And User enter the username as "test"
    And User enter the password as "test"
    And User click on the login button
@cart
 Scenario Outline: Add products to the cart 
    When User selected products:
    | Nexus 6  |
    | Nokia lumia 1520   |
    Then cart contains the products and total value is "1470"
    | Nexus 6  |
    | Nokia lumia 1520   |
