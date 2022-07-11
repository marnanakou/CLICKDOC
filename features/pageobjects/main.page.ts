import Page from './page'

class MainPage extends Page {
    get searchDoctorsBtn (){
        return $('[routerlink="search"]');
    }

    get acceptCookieBtn() {
        return $('button=Alle akzeptieren')
    }

    public async acceptCookies() {
        await this.acceptCookieBtn.click();
    }

    public async clickSearchDoctors() {
        await this.searchDoctorsBtn.click();
    }

    public async redirectedToSearchPage(){
        await expect(browser).toHaveUrl('https://demo.clickdoc.de/cd-de/search')
    }
}

export default new MainPage();