// Generated on 2014-07-07 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    name: grunt.file.readJSON('package.json').name,
    src: 'src',
    dist: 'dist',
    warDist: 'war',
    dateTime: new Date().getTime(),
    local: {
      serviceBE: 'http://localhost:9030/online-exam-server',
      serviceQURI: 'https://presence.q.att.com'
    },
    dev: {
      serviceBE: '/online-exam-server', //need service uri for future plans
      serviceQURI: 'https://presence.q.att.com'
    },
    qa: {
      serviceBE: '/online-exam-server',
      serviceQURI: 'https://presence.q.att.com'
    },
    prod: {
      serviceBE: '/online-exam-server',
      serviceQURI: 'https://presence.q.att.com'
    },
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.src %>/less/**/*.less'],
        tasks: ['less:dev', 'newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    less: {
      dev: {
        options: {
          banner: '/*! BUILD DATE: <%= grunt.template.date(yeoman.dateTime, "dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'
        },
        files: {
          'app/styles/main.css': 'src/less/main.less'
        }
      },
      prod: {
        options: {
          compress: true,
          cleancss: true,
          banner: '/*! BUILD DATE: <%= grunt.template.date(yeoman.dateTime, "dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'
        },
        files: {
          'app/styles/main.css': 'src/less/main.less'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/**/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/**/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
	  war: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.warDist %>/**/*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! BUILD DATE: <%= grunt.template.date(yeoman.dateTime, "dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/**/*.html',
            'images/**/*.{ico,png,jpg,jpeg,gif,webp,svg}',
            'fonts/**/*',
            'pdf/**/*',
            'json/*',
            'styles/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      scripts: {
        expand: true,
        cwd: '.tmp/concat/scripts/',
        dest: '<%= yeoman.dist %>/scripts',
        src: '{,*/}*.js'
      },
			fonts: {
				cwd: 'bower_components/fonts',
				expand: true,
				src: '**/*',
				dest: 'app/fonts'
			}
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'less:dev',
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles'
      ]
    },

    // Create angular constants base on built type (dev, qa, production)
    ngconstant: {
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config',
        dest: '<%= yeoman.app %>/scripts/configuration.js',
        constants: {
          ENV: {
            name: 'local',
            debug: true,
            services: {
              uri: {
                online: '<%= yeoman.local.serviceBE %>',
                qPresence: '<%= yeoman.local.serviceQURI %>'
              },
              endpoints: {
                online: grunt.file.readJSON('src/json/servicesOnline.json'),
                qPresence: grunt.file.readJSON('src/json/servicesQPresence.json')
              }
            }
          }
        }
      },
      local: {
        constants: {}
      },
      dev: {
        constants: {
          ENV: {
            name: 'development',
            services: {
              uri: {
                online: '<%= yeoman.dev.serviceBE %>'
              }
            }
          }
        }
      },
      qa: {
        constants: {
          ENV: {
            name: 'qualityAssurance',
            services: {
              uri: {
                online: '<%= yeoman.qa.serviceBE %>'
              }
            }
          }
        }
      },
      prod: {
        constants: {
          ENV: {
            name: 'production',
            debug: false,
            services: {
              uri: {
                online: '<%= yeoman.prod.serviceBE %>'
              }
            }
          }
        }
      }
    },

    war: {
      prod: {
        options: {
          war_dist_folder: '<%= yeoman.warDist %>',
          war_verbose: true,
          war_name: '<%= yeoman.name %>',
          webxml_welcome: 'index.html',
          webxml_display_name: '<%= yeoman.name %>',
          webxml_mime_mapping: [
            {
                extension: 'woff',
                mime_type: 'application/font-woff'
            }
          ]
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.dist %>',
            src: ['**'],
            dest: ''
          }
        ]
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'copy:fonts',
      'clean:server',
      'ngconstant:local',
      'wiredep',
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', function(target){
    if (target === 'dev') {
      return grunt.task.run(['dev']);
    } else if (target === 'qa') {
      return grunt.task.run(['qa']);
    } else {
      return grunt.task.run(['prod']);
    }
  });

  grunt.registerTask('dev', [
    'less:dev',
    'clean:dist',
	'clean:war',
    'ngconstant:dev',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'ngmin',
    'copy:dist',
    'copy:scripts',
    'usemin',
    'war:prod'
  ]);

  grunt.registerTask('qa', [
    'less:prod',
    'clean:dist',
	'clean:war',
    'ngconstant:qa',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'ngmin',
    'copy:dist',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
    'war:prod'
  ]);

  grunt.registerTask('prod', [
    'less:prod',
    'clean:dist',
	'clean:war',
    'ngconstant:prod',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'ngmin',
    'copy:dist',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
    'war:prod'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
