import { Given, When, Then } from '@cucumber/cucumber';
import { isAwaitExpression } from 'typescript';

import MainPage from '../pageobjects/main.page';
import SearchPage from '../pageobjects/search.page';


Given(/I open the browser and navigate to the homepage/, async () => {
    await MainPage.open("/")
});

Given(/I accept all cookies/, async () => {
    await MainPage.acceptCookies()
})

When(/I click on the doctors search button/, async () => {
    await MainPage.clickSearchDoctors()
});

When(/I go to the search page/, async () => {
    await MainPage.redirectedToSearchPage()
});

When(/I search for the term '(.+)'/, async (searchTerm: string) => {
    await SearchPage.searchForDoctor(searchTerm)
})

Then(/I should see '(.+)' as one of the results/, async (doctorName: string)=>{
    await SearchPage.searchForDoctorsResults(doctorName)
})
