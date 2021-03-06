module.exports = function (grunt) {

    /* Task configuration */

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {

            build: [ 'coverage/',
                     'static/assets/js/codebrowser-min.js',
                     'static/assets/js/codebrowser-templates-min.js',
                     'static/assets/js/codebrowser-templates.js',
                     'static/assets/js/codebrowser.js',
                     'tmp/' ]
        },

        watch: {

            src: {

                files: [ 'Gruntfile.js', 'config/*.js', 'src/**/*.js', 'src/templates/*.template' ],
                tasks: [ 'jshint:src', 'build' ],

            },

            test: {

                files: [ 'test/config/config.js', 'test/casperjs/*.js', 'test/spec/**/*-spec.js' ],
                tasks: [ 'jshint:test', 'jshint:spec', 'jshint:casperjs' ],

            }
        },

        handlebars: {

            template: {

                files: {

                    'static/assets/js/codebrowser-templates.js': 'src/templates/*.template'

                },

                options: {

                    namespace: 'Handlebars.templates',

                    processName: function (path) {

                        // Use filename as the name of the template (View.template -> View)
                        var split = path.split('/'),
                            file = split[split.length - 1],
                            filename = file.split('.')[0];

                        return filename;
                    }
                }
            }
        },

        concat: {

            tests: {

                src: 'test/casperjs/*.js',
                dest: 'tmp/casperjs-concat.js'

            },

            dist: {

                src: [ 'config/*.js',
                       'src/app.js',
                       'src/helpers/*.js',
                       'src/models/*.js',
                       'src/collections/*.js',
                       'src/views/list-base-view.js',
                       'src/views/*.js',
                       'src/controllers/*.js',
                       'src/routers/*.js' ],
                dest: 'static/assets/js/codebrowser.js',
                options: {

                    separator: ';\n\n'

                }
            },

            handlebars: {

                src: [ 'static/assets/js/codebrowser-templates.js',
                       'static/assets/js/codebrowser.js' ],
                dest: 'static/assets/js/codebrowser.js',
                options: {

                    separator: ';\n\n'

                }
            }
        },

        uglify: {

            dist: {

                files: {

                    'static/assets/js/codebrowser-templates-min.js': 'static/assets/js/codebrowser-templates.js',
                    'static/assets/js/codebrowser-min.js': 'static/assets/js/codebrowser.js'

                },

                options: {

                    report: 'min'

                }
            }
        },

        jshint: {

            src: {

                src: [ 'Gruntfile.js', 'web.js', 'config/*.js', 'src/**/*.js' ],
                options: {

                    jshintrc: 'jshint.json'

                }
            },

            test: {

                src: [ 'test/config/config.js', 'test/helpers/*.js' ],
                options: {

                    jshintrc: 'test/spec/jshint.json'

                }
            },

            spec: {

                src: 'test/spec/**/*.js',
                options: {

                    jshintrc: 'test/spec/jshint.json'

                }
            },

            casperjs: {

                src: 'test/casperjs/*.js',
                options: {

                    jshintrc: 'test/casperjs/jshint.json'
                }

            }
        },

        jasmine: {

            src: [ 'config/*.js',
                   'test/config/*.js',
                   'src/app.js',
                   'src/helpers/*.js',
                   'src/models/*.js',
                   'src/collections/*.js',
                   'src/views/list-base-view.js',
                   'src/views/*.js',
                   'src/controllers/*.js',
                   'src/routers/*.js' ],
            options: {

                vendor: [ 'static/assets/js/jquery-2.1.1.min.js',
                          'static/assets/js/moment.min.js',
                          'static/assets/js/underscore-min.js',
                          'static/assets/js/jszip.min.js',
                          'static/assets/js/jszip-utils.min.js',
                          'static/assets/js/backbone-min.js',
                          'static/assets/js/backbone-relational-min.js',
                          'static/assets/js/backbone.fetch-cache.min.js',
                          'static/assets/js/handlebars.runtime-min.js',
                          'static/assets/js/ace/ace.js',
                          'static/assets/js/difflib-min.js',
                          'static/assets/js/raphael-min.js',
                          'static/assets/js/codebrowser-templates-min.js',
                          'node_modules/sinon/pkg/sinon.js',
                          'test/helpers/fake-server.js' ],
                specs: 'test/spec/**/*-spec.js',
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {

                    coverage: 'coverage/coverage.json',
                    report: {

                        type: 'lcov',
                        options: {

                            dir: 'coverage/'

                        }
                    }
                }
            }
        },

        connect: {

            server: {

                options: {

                    base: 'static'

                }
            }
        },

        casperjs: {

            files: 'tmp/casperjs-concat.js',
            options: {

                includes: [ 'test/config/config.js', 'test/helpers/fake-server.js' ]

            }
        }
    });

    /* Load tasks */

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-casperjs');

    /* Register tasks */

    grunt.registerTask('test', [ 'jshint', 'jasmine' ]);
    grunt.registerTask('integration-test', [ 'concat:tests', 'connect', 'casperjs' ]);
    grunt.registerTask('build', [ 'jshint', 'handlebars', 'concat', 'uglify' ]);
    grunt.registerTask('default', [ 'clean', 'build', 'test', 'integration-test' ]);
}
