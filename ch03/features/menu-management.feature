
Feature: Menu Management
  Scenario: Add a menu item
    Given I have a menu item with "Cucumber Sandwich" and price $20
    When I add that menu item
    Then Menu Item with name "Cucumber Sandwich" should be added

  Scenario: Add a menu item
    Given I have a menu item with "Cucumber Salad" and price 15
    When I add that menu item
    Then Menu Item with name "Cucumber Salad" should be added