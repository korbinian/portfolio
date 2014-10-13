module.exports = function(grunt) {



    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'ftp-deploy': {
            build: {
                auth: {
                    host: 'korbinianpolk.de',
                    port: 21,
                    authKey: 'key1'
                },
                src: 'build',
                dest: '',
                exclusions: []
            }
        }

    });


  

    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('default', ['ftp-deploy']);


};