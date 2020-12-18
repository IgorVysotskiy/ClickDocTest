class SearchPage {
    constructor() {

        this.searchBarMain = element((By.id("search-query-typeahead")).click()
        this.input = elementt(By.id("search-query-typeahead")).sendKeys("test ")
        this. = element(by.linkText('Tutorial'));
        this. = element(by.id('drop2'));
        this.settigUpProtractorLink = element(by.linkText('Setting Up Protractor'));
        this.settingUpTheSeleniumServerLink = element(by.linkText('Setting Up the Selenium Server'));
        this.settingUpTheBrowserLink = element(by.linkText('Setting Up the Browser'));
        this.choosingAFrameworkLink = element(by.linkText('Choosing a Framework'));
        this.drop3Link = element(by.id('drop3'));
        this.fAQLink = element(by.linkText('FAQ'));
    }

}
module.exports = new SearchPage();