Feature: Final Bill Calculation

@ScenarioOutLineExample
Scenario Outline: Customer Bill Amount Calculation
  Given I have a Customer
  And User enters initial bill amount as <InitialBillAmount>
  And Sales tax rate is <TaxRate> percent
  Then Final bill amount calulated is <CalculatedBillAmount>
  Examples:
      | InitialBillAmount | TaxRate | CalculatedBillAmount |
      | 100               | 10      | 110                  |
