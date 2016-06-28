module.exports = function(config) {
  config.set({
    basePath : './',
    files: ['src/*.js'],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],
    autoWatch: false,
    singleRun: true
  });
};
