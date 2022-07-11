Feature: CLICKDOC Page

  Scenario: As a user, I can search for doctors on the search field

    Given I open the browser and navigate on the homepage
    And I click on Alle akzeptieren button
    When I click on the doctors search button 
    And I go to the search page
    And I search for the term 'Peter Test'
    Then I should see as a result 'Dr. Peter Test'
    And I should see as a result 'Dr. Peter Test ABD'       
      