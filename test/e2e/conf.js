exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todoChallengeFeature.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }, {
    browserName: 'firefox'
  }, {
    browserName: 'safari'
  }]
}