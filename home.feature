Feature: Data Search

   As a user of the Zero Bank website
   I want to be able to search for data easily
   So that i can find the information i need

   Background:
     Given I am on the Zero Bank homepage

   Scenario: Searching with a valid keyword
       When I enter the keyword "online"
       And I click the search button
       Then I should see relevant search results