Feature: Tip Calculator
    As a user
    I want to calculate tips and total amounts
    So that I can properly pay at restaurants

    Scenario: Calculate 10% tip on $100
        Given the total amount is 100
        When I set the tip percentage to 10
        Then the tip should be 10
        And the total should be 110

    Scenario: Calculate 15% tip on $200
        Given the total amount is 200
        When I set the tip percentage to 15
        Then the tip should be 30
        And the total should be 230

    Scenario: Calculate 20% tip on $50
        Given the total amount is 50
        When I set the tip percentage to 20
        Then the tip should be 10
        And the total should be 60

    