Feature: Calculator

  Scenario: Add two numbers
    Given the numbers 2 and 2
    When I add them
    Then the result is 4

  Scenario: Add different numbers
    Given the numbers 3 and 3
    When I add them
    Then the result is 6
