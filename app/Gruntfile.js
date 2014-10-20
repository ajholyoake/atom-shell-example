
module.exports = function(grunt) {
  grunt.initConfig({
    'download-atom-shell': {
      version: '0.18.1',
      outputDir: 'binaries'
    }
  });

  grunt.loadNpmTasks('grunt-download-atom-shell');

  grunt.registerTask('default',['download-atom-shell']);
};



