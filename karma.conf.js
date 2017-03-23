//karma.conf.js

module.exports = function karmaConfig(config) {
    config.set({
        reporters: [
            'coverage'
        ],
        coverageReporter: {
            reporters: [
                {type: 'lcovonly', subdir: '.'},
                {type: 'json', subdir: '.'}
            ]
        },
        preprocessors:{
            'src/**/*.js': ['coverage']
        }
    });
};