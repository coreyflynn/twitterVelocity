module.exports = function(grunt) {
  // Project configuration.
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({
  	doxx: {
  		custom: {
  			src: 'source',
  			target: 'newDocs2',
  			options: {
  				ignore: 'test',
  				template: 'newDocs2/doxx_template.jade'
  			},
  		}
  	},
  });

  grunt.loadNpmTasks('grunt-doxx');
  grunt.registerTask('default', ['doxx']);

};