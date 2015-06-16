module.exports = function(grunt) {

  var globalConfig = {
    target: grunt.option('target')
  };
  
  // Project configuration.
  grunt.initConfig({
    globalConfig: globalConfig,
    'compile-handlebars': {
      globbedTemplateAndOutput: {
        files: [{
            expand: true,
            cwd: './<%= globalConfig.target  %>/',
            src: '<%= globalConfig.target  %>.html',
            dest: './<%= globalConfig.target  %>/build/',
            ext: '.html'
        }],
        "templateData": "./<%= globalConfig.target  %>/template_data.json",
        "partials": "./<%= globalConfig.target  %>/partials/*.html"
      }
    }
  });

  grunt.loadNpmTasks('grunt-compile-handlebars');

  grunt.registerTask('default', ['compile-handlebars:globbedTemplateAndOutput']);

};