/**
 * TO-DO: FIX UGLIFY AND CONCAT
 */

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
           transform: [['babelify', {presets: ['es2015', 'react']}]]
        },        
        src: ['client/components/*.js', 'client/jsx-compiled/*.js'],
        dest: 'client/bundle.js',
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        //files to concatenate
        src: ['src/**/*.js'],
         //location of js file after concatenating
         // <%= pkg.name %> are template strings
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        // prepends the date to the minified file
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= browserify.dist.dest %>']
        }
      }
    },
    eslint: {
      options: {
        //config file for eslint rules (separate from .eslintrc which live lints) this will lint when grunt is run
        config: 'conf/eslintrc.json'
        // rulePaths: ['conf/rules']
      },
      //files to lint
      target: ['Gruntfile.js', 'client/components/*.jsx', 'client/components/*.js']
    },
    babel: {
      options: {
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: 'client/components', // Custom folder
          src: ['*.jsx'],
          dest: 'client/jsx-compiled/', // Custom folder
          ext: '.js'
        }]
      }
    },
    watch: {
      //files to keep an eye on, in this case all files that are listed in the jshint task
      files: ['<%= eslint.target %>', '/client/styles.css'],
      //tasks to run when files stated above have changed
      tasks: ['babel', 'eslint', 'browserify'],
      options: {
        //spawn is set to false to eslint is called in the correct context
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');

  //tasks for final ['jshint', 'babel', 'concat', 'uglify']
  grunt.registerTask('default', ['babel', 'eslint', 'browserify']);
};
