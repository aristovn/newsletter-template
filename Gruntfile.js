module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            jade: {
                src: 'blocks/**/*.jade',
                dest: 'temp/concat.jade'
            }
        },
        jade: {
            compile: {
                files: {
                    'build/index.html': 'pages/index.jade'
                }
            }
        },
        watch: {
            templates: {
                files: ['pages/**/*.jade', 'blocks/**/*.jade'],
                tasks: ['concat', 'jade'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'jade']);
};