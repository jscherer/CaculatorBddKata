Feature: Calculator
  As a user I want to add two numbers so that I get the correct sum

  Scenario: Adding 2 and 2 gives 4
    Given the numbers 2 and 2
    When I add them
    Then the result is 4
