import Page from './page'

class SearchPage extends Page {


    get searchDoctorsBtn () {
        return $('button=Suchen');
    }
    
    get inputSearchField() {
        return $('#search-query-typeahead')
    }

    get allSearchResults(){
        return $$('.contact-title')
    }

    public async searchForDoctor(searchString: string) {
        await this.inputSearchField.setValue(searchString);
        await this.searchDoctorsBtn.click();
        await expect(this.allSearchResults).toBeElementsArrayOfSize(2);
    }

    public async searchForDoctorsResults(doctorName: string) {
        const isDoctorInResults = await this.allSearchResults.some(
            async el => await el.getText() === doctorName)
        await expect(isDoctorInResults).toStrictEqual(true)
    }
}

export default new SearchPage();