module.exports = function(grunt) {



    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dev/styles/style.css': 'dev/styles/style.scss'
                }
            },
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/styles/style.css': 'build/styles/style.css'
                }
            }
        },

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
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass:dev']);
    grunt.registerTask('build', ['sass:build']);

};