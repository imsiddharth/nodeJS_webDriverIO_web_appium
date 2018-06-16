module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            tests: {
                configFile: './test/config/suite.mobile.conf.js'
            },
        },
    });

    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('default', ['webdriver:tests']);
    //grunt.registerTask('default', ['webdriver:tests-mobile']);
};
