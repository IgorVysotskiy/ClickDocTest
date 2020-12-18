const { browser } = require("protractor");
const EC = protractor.ExpectedConditions;

class LoginPage {
        constructor() {
        this.usrLogin = element(by.css('#cdk-text-field-autofill-monitored.ng-touched'));
        this.usrPassword = element(by.css('[data-web-test=login_password]'));
        this.loginBtn = element(by.linkText('Tutorial'));
        this.logoutBtn = element(by.css(".dropdown-item:nth-child(2) .menu-text"))
        this.loginError = element (by.id('.error-container'));
        this.failedLoginText = element(by.text('Bitte überprüfen Sie Ihre Eingaben und probieren Sie es erneut. Haben Sie noch keine CGM LIFE ID?'));
        this.welcomeMsg = element(by.css('(".d-inline-block"'));
        
      
        this.login = function (userName, password) {
                this.usrLogin.sendKeys(userName);
                this.usrPassword.sendKeys(password);
                this.loginBtn.click();
            };

             
        this.logout = function (){
                this.logoutBtn.click();
        };     
}

}
module.exports = LoginPage(); 