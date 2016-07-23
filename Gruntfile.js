/**
 * TO-DO: ADD A TASK TO LINT ES6/JSX/REACT FILES WITH ESLINT
 */

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    // babel: {
    //   options: {
    //     plugins: ['transform-react-jsx'],
    //     presets: ['es2015', 'react']
    //   },
    //   jsx: {
    //     files: [{
    //       expand: true,
    //       cwd: 'source/js/jsx/', // Custom folder
    //       src: ['*.jsx'],
    //       dest: 'source/js/jsx-compiled/', // Custom folder
    //       ext: '.js'
    //     }]
    //   }
    // }
    watch: {
      //files to keep an eye on, in this case all files that are listed in the jshint task
      files: ['<%= jshint.files %>'],
      //tasks to run when files stated above have changed
      tasks: []
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //tasks for final ['jshint', 'babel', 'concat', 'uglify']
  grunt.registerTask('default', ['concat', 'uglify']);
};