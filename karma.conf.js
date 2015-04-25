module.exports = function(config) {
    config.set({
        frameworks: [
            'browserify',
            'mocha'
        ],
        files: [
            '*_test.js'
        ],
        preprocessors: {
            '*_test.js': 'browserify'
        },
        browserify: {
            debug: true,
        },

        autoWatch: true,
        browsers: ['PhantomJS'],
        colors: true,
        logLevel: config.LOG_INFO,
        reporters: ['dots'],
        singleRun: false
    });
};
