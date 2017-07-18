// Initialize the eyes SDK and set your private API key.
const Eyes = require("eyes.selenium").Eyes;
const eyes = new Eyes();
const applitools = require('../src/resources/applitools.key').applitools;
eyes.setApiKey(applitools.key);

describe("Hello World test!", function() {
    it("Run the test", function() {

        // Open a chrome browser.
        eyes.open(browser, "Hello World!", "My first Protractor Test!");

        // Navigate the browser to the "hello world!" web-site.
        browser.ignoreSynchronization = true
        browser.get("http://applitools.com/helloworld");

        // Visual checkpoint #1.
        eyes.checkWindow("Hello!");

        // Click the "Click me!" button.
        element(by.tagName("button")).click();

        // Visual checkpoint #2.
        eyes.checkWindow("Click!");

        // End the test.
        eyes.close();
    });
});
