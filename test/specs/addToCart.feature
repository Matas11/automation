Feature: Add to cart Hosting plan, user is able to add to cart the Hosting Business plan for 24 month

  Scenario Outline: Validate that 24-Month Hosting Business plan is added to cart
    Given User is opening the Hostinger website
    When User is choosing the Business plan
    When User is choosing the 24-Month plan
    Then User should see 24-Month Business plan added to cart <message>

        Examples:
      | message                |
      |  Business Web Hosting - 24 months plan|
