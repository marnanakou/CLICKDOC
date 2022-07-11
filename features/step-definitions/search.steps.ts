import { Given, When, Then } from '@cucumber/cucumber';

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

When(/^I click on searchBtn/, async () => {
    await SearchPage

});

Then(/^I validat page header \"([^\"]*)\"$/, async (header: string) => {
    await assertions.toHaveText(chaiPage.getHeader(), header)
});