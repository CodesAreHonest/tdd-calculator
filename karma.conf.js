//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: 'app',

    files: [
      // 'lib/bower_components/angular/angular.js',
      // 'lib/bower_components/angular-route/angular-route.js',
      // 'lib/bower_components/angular-mocks/angular-mocks.js',
      // 'lib/components/**/*.js',
      // 'lib/view*/**/*.js',
      'calculator-app/calculator.js',
        'calculator-app/calculatorSpec.js'

    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: [],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
