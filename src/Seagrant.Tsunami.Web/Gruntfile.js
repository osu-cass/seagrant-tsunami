/// <binding ProjectOpened='all, watch' />
'use strict';

const lessFiles = {
    'wwwroot/css/site.css': 'Styles/site.less',
};

module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            css: ["wwwroot/css/*"],
            ts: ["wwwroot/scripts/*", "temp"],
            lib: ["wwwroot/lib/*", "temp"]
        },

        uglify: {
            files: {
                src: 'wwwroot/scripts/*.js',  // source files mask
                dest: 'wwwroot/scripts/',    // destination folder
                expand: true,    // allow dynamic building
                flatten: true,   // remove all unnecessary nesting
                ext: '.min.js'   // replace .js to .min.js
            }
        },

        less: {
            development: {
                files: lessFiles
            },
            production: {
                files: lessFiles
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "wwwroot/css/site.min.css": ["wwwroot/css/site.css"]
                }
            }
        },

        ts: {
            default: {
                tsconfig: {
                    tsconfig: 'Scripts/tsconfig.json',
                },
            },
        },

        watch: {
            less: {
                files: ["Styles/*.less"],
                tasks: ["less"]
            }
        },
        "bower-install-simple": {
            options: {
            },
            "prod": {
                options: {
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-bower-install-simple');


    grunt.registerTask("bower-install", ["bower-install-simple"]);
    grunt.registerTask("all", ['clean', 'ts', 'less', 'cssmin', 'uglify', 'bower-install']);
    grunt.registerTask("tsrecompile", ['clean:ts', 'ts', 'uglify']);
    grunt.registerTask("lessrecompile", ['clean:css', 'less', 'cssmin']);

};