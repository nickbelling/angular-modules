let metadata = require('./plugin-metadata.json')

export default {
    input: './aot/src/app/child.module.ngfactory.js',
    moduleName: metadata.name,
    output: {
        file: '../bin/plugins/' + metadata.name + '/plugin-factory.umd.js',
        format: 'umd'
    },
    external: [
        '@angular/core'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common'
    }
}