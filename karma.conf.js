//karma.conf.js

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'spec/**/*.[sS]pec.js'
        ],
        exclude: [],
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    })
};