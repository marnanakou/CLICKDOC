import { Given, When, Then } from '@cucumber/cucumber';
import { isAwaitExpression } from 'typescript';

import MainPage from '../pageobjects/main.page';
import SearchPage from '../pageobjects/search.page';


Given(/I open the browser and navigate on the homepage/, async () => {
    await MainPage.open("/")
});

Given(/I click on Alle akzeptieren button/, async () => {
    await MainPage.acceptCookies()
})

When(/I click on the doctors search button/, async () => {
    await MainPage.clickSearchDoctors()
});

When(/I go to the search page/, async () => {
    await MainPage.redirectedToSearchPage()
});

When(/I search for the term 'Peter Test'/, async () => {
    await SearchPage.searchForDoctor('Peter Test')
})

Then(/I should see as a result '(.+)'/, async (doctorName)=>{
    await SearchPage.searchForDoctorsResults(doctorName)
})
