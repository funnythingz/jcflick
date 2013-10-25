module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dest:
        files: 'jquery-jcflick.min.js': ['src/jquery-jcflick.js']

    concat:
      develop:
        src: ['src/license.js', 'src/jquery-jcflick.js']
        dest: 'jquery-jcflick.js'

      product:
        src: ['src/license.min.js', 'jquery-jcflick.min.js']
        dest: 'jquery-jcflick.min.js'

      options:
        separator: ';'

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      ts:
        tasks: ['uglify', 'concat', 'compass']
        options:
          atBegin: true

      css:
        files: ['sass/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['uglify', 'concat', 'compass'])
