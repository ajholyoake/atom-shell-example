module.exports = function(grunt) {

  grunt.initConfig({
    'download-atom-shell': {
      version: '0.18.1',
      outputDir: '../binaries'
    },
    'shell':{
      'run': {
        'command':'../binaries/Atom.app/Contents/MacOS/Atom ../app/'
      },
      'run-default':{
        'command':'../binaries/Atom.app/Contents/MacOS/Atom ../default-app/ &'
      }
    },
    'watch':{
    files:'**/*.js',
    tasks:['run'],
    options:{interrupt:true}
    }

  });

  grunt.loadNpmTasks('grunt-download-atom-shell');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('fetchbinary',['download-atom-shell']);
  grunt.registerTask('run',['shell:run']);
  grunt.registerTask('run-default',['shell:run-default']);
};



