var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  seleniumPort: null,
  seleniumArgs: [],
  specs: ['spec.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'https://demo.clickdoc.de/cd-de/search',
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  },
    onPrepare: () =>
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp/screenshots'
    }).getJasmine2Reporter()),
 }
 