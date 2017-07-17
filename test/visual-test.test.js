let Eyes = require('eyes.selenium');
let eyes = new Eyes();
eyes.setApiKey("ZNCO5PUx9Mj2yLNZJ0du8s6HJBTwcpkiDNf1vjDcJ8w110");

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});
