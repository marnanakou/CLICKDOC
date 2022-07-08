import Page from './page'

class MainPage extends Page {
    get searchDoctorsBtn (){
        return $('[routerlink="search"]');
    }

    get acceptCookieBtn() {
        return $('button=Alle akzeptieren')
    }

    public async clickSearchDoctors() {
        await this.acceptCookieBtn.click();
        await this.searchDoctorsBtn.click();
    }
}

export default new MainPage();