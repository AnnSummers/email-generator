module.exports = function(grunt) {

  var globalConfig = {
    target: grunt.option('target')
  };

  // Project configuration.
  grunt.initConfig({
    globalConfig: globalConfig,
    'compile-handlebars': {
      dynamicTemplate: {
        files: [{
            src: './<%= globalConfig.target  %>/template.html',
            dest: './<%= globalConfig.target  %>/build/<%= globalConfig.target  %>.html'
        }],
        templateData: "./<%= globalConfig.target  %>/template_data.json",
        partials: "./<%= globalConfig.target  %>/partials/*.html"
      }
    },
    indent: {
      html: {
        src: [
          './<%= globalConfig.target  %>/build/*.html'
        ],
        dest: './<%= globalConfig.target  %>/build/',
        options: {
          style: 'space',
          size: 4,
          change: -99
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-indent');

  grunt.registerTask('default', ['compile-handlebars:dynamicTemplate', 'indent:html']);

};