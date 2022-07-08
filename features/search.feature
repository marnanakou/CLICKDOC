Feature: CLICKDOC Page

  Scenario Outline: As a user, I can search for doctors

    Given I open the browser and navigate on the url <homepage> https://demo.clickdoc.de/cd-de/
    When I click on the doctors search button 
    And I go to https://demo.clickdoc.de/cd-de/search
    And I insert the searchterm on the input search field 
    And I click on the search button
    Then I should see as a result Dr Peter Test and Dr Peter Test ABD 

    Examples:
        | homepage | search button | | searchterm
        |search button| Dr Peter Test | Dr Peter Test ABD |
      
      