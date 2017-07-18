const Eyes = require('eyes.selenium').Eyes;
const applitools = require('../src/resources/applitools.key').applitools;
const eyes = new Eyes();
const EC = require('protractor').ExpectedConditions;
 
eyes.setApiKey(applitools.key);
 
// The test will take a screenshoot of the MuleSoft AnyPoint login form and will click on
// the sign in button without write any credentials.
describe('Applitools Demo App', function() {
  it('should validate the screenshoots', function() {
 
    // eyes.open(driver, appName, testName, viewportSize)
    eyes.open(browser, 'ApplitoolsDemo', 'Anypoint Platform Test');
 
    // Protractor expects an angular application but this test won't be executed with an application build
    // on that framework, so disable the wait for angular.
    browser.waitForAngularEnabled(false);
 
    // It goes to MuleSoft AnyPoint home page.
    browser.get('https://anypoint.mulesoft.com');
 
    // Visual checkpoint #1.
    // eyes.checkWindow(screenshootTag).
    eyes.checkWindow('SignUp Page');
 
    // Fill username
    // element(by.css('[data-reactid="21"]')).sendKeys('PEPE');

    // Click the "SignUp" button.
    const signUpButtons = element.all(by.id('form-undefined-primary-action-button'));
    browser.wait(EC.presenceOf(signUpButtons.first()), 10 * 1000);
    signUpButtons.first().click();
 
    // Visual checkpoint #2.
    eyes.checkWindow('SignUp Error');
 
    // End the test.
    eyes.close();
  });
});
