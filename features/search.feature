Feature: CLICKDOC Page

  Scenario: As a user, I can search for doctors on the search field

    Given I open the browser and navigate to the homepage
    And I accept all cookies
    When I click on the doctors search button 
    And I go to the search page
    And I search for the term 'Peter Test'
    Then I should see 'Dr. Peter Test' as one of the results
    And I should see 'Dr. Peter Test ABD' as one of the results
      