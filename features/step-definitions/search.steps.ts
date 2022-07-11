import { Given, When, Then } from '@cucumber/cucumber';

import MainPage from '../pageobjects/main.page';
import SearchPage from '../pageobjects/search.page';


Given('I open the browser and navigate on the homepage', async () => {
    await MainPage.open("/")
});

When(/I click on the doctors search button/, async () => {
    await MainPage.clickSearchDoctors()
});

When(/^I click on searchBtn/, async (fname: string, lname: string) => {
    const fname_input = $('[name-firstname]');
    const lastname_input = $('[last-firstname]')

    await (await fname_input).setValue(fname)
    await (await lastname_input).setValue(lname)

});

Then(/^I validat page header \"([^\"]*)\"$/, async (header: string) => {
    await assertions.toHaveText(chaiPage.getHeader(), header)
});