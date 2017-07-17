let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    // '../test/spec.test.js',
    // '../test/visual-test.test.js',
    '../test/demo2.test.js'
  ],

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },

  jasmineNodeOpts: {
   print: function() {}
  }
}
