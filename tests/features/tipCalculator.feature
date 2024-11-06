Feature: Tip Calculator

  Scenario: Calculate a 15% tip
    Given the total amount is 100
    When I set the tip percentage to 15
    Then the tip should be 15
    And the total should be 115

  Scenario: Specify the tip percentage
    Given the total amount is 200
    When I set the tip percentage to 20
    Then the tip should be 40
    And the total should be 240
