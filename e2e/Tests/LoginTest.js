const LoginPage = require('../PO/LoginPage');
var homePage = require('../PO/LoginPage');
var testdata = require('../testdata/data.json');
const EC = protractor.ExpectedConditions;

describe ('Login Page Test Suite', () =>{
var LoginPage = new LoginPage;

const wrongCredentias = {
  username: 'test1',
  password: 'test2'
};

beforeEach (() => {
    browser.get('baseUrl+/search');
    browser.switchTo().frame(3)
});

    it('user should be able to login and welcome message should appear', () => {
      LoginPage.login();
      expect(welcomeMsg.isDisplayed()).toBe(true);
    });

    it('when user trying to login with wrong credentials he should stay on “login” page and see error notification', () => {
      LoginPage.login(wrongCredentias);
     expect(EC.visibilityOf(failedLoginText));
     })

    it('should navigate to home page after logout',() =>{
      loginPage.logout();
      expect(LoginPage.getCurrentUrl()).toContain('baseUrl');
       })
      }
)
      
      
