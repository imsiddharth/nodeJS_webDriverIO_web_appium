import Page from "./page";


class GoogleSearchPage extends Page {


    /**
     * define or overwrite page methods
     */

    get englishLanguage() {return browser.element('//a[text()=\'English\']')}
    get searchbox() { return browser.element('//input[@name=\'q\']') }
    get searchbutton() {return browser.element('//input[@value=\'Google Search\']')}


    open()
    {
        super.open('http://www.google.com');
        browser.pause(2000);
        if(this.englishLanguage.isVisible()){
            this.englishLanguage.click();
            browser.pause(2000);
        }
    }

    doSearch(query){
        this.searchbox.click();
        this.searchbox.setValue(query);
        this.searchbutton.click();
        browser.pause();
    }

}

export default new GoogleSearchPage();
