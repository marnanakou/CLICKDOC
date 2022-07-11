import Page from './page'

class SearchPage extends Page {
    get clickSearchDoctorsBtn (){
        return $('[title="Search Input"]');
    }
    
    
    // get inputSearchField(){
    //     return 
    // }

    

    // get submitBtn(){
    //     return 
    // }

    // get inputResult (){
    //     return ()
    // }

    public async clickSearchButton (){
        await this.clickSearchDoctorsBtn.click();
    }

}

export default new SearchPage();