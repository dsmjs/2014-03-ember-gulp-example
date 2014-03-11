module.exports = function(karma) {
    karma.set({
        basePath: 'js',

        files: [
          "dist/app.min.js",
          "tests/*.js"
        ],

        logLevel: karma.LOG_ERROR,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: false,

        frameworks: ["qunit"]
    });
};
