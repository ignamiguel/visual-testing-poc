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
    eyes.open(browser, 'ApplitoolsDemo', 'Mulesoft Home');
 
    // Protractor expects an angular application but this test won't be executed with an application build
    // on that framework, so disable the wait for angular.
    browser.waitForAngularEnabled(false);
 
    // It goes to MuleSoft home page.
    browser.get('https://www.mulesoft.com/');
 
    // Visual checkpoint #1.
    eyes.checkWindow('Home Page');
 
    const logoImageList = element.all(by.id('logo'));
    browser.wait(EC.presenceOf(logoImageList.first()), 60 * 1000)
 
    // End the test.
    eyes.close();
  });
});
