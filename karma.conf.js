//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-mocks/angular-mocks.js',
      // 'lib/bower_components/angular/angular.js',
      // 'lib/bower_components/angular-route/angular-route.js',
      // 'lib/bower_components/angular-mocks/angular-mocks.js',
      // 'lib/components/**/*.js',
      // 'lib/view*/**/*.js',
      'app/calculator-app/calculator.js',
        'app/calculator-app/calculatorSpec.js'

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
