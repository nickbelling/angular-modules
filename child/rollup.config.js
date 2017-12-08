let metadata = require('./plugin-metadata.json')

export default {
    input: './aot/src/app/child.module.ngfactory.js',
    moduleName: metadata.name,
    output: {
        file: '../bin/plugins/' + metadata.name + '/plugin-factory.umd.js',
        format: 'umd'
    },
    external: [
        '@angular/animations',
        '@angular/animations/browser',
        '@angular/core',
        '@angular/common',
        '@angular/platform-browser',
        '@angular/platform-browser/animations',
        '@angular/cdk/a11y',
        '@angular/cdk/bidi',
        '@angular/cdk/overlay',
        '@angular/cdk/platform',
        '@angular/cdk/portal',
        '@angular/cdk/scrolling',
        '@angular/material',
        '@angular/material/common',
        '@angular/material/core',
        '@angular/material/button',
        '@angular/material/card'
    ],
    globals: {
        '@angular/animations': 'ng.animations',
        '@angular/animations/browser': 'ng.animations.browser',
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/platform-browser': 'ng.platformBrowser',
        '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
        '@angular/cdk/a11y': 'ng.cdk.a11y',
        '@angular/cdk/bidi': 'ng.cdk.bidi',
        '@angular/cdk/overlay': 'ng.cdk.overlay',
        '@angular/cdk/platform': 'ng.cdk.platform',
        '@angular/cdk/portal': 'ng.cdk.portal',
        '@angular/cdk/scrolling': 'ng.cdk.scrolling',
        '@angular/material': 'ng.material',
        '@angular/material/common': 'ng.material',
        '@angular/material/core': 'ng.material',
        '@angular/material/button': 'ng.material',
        '@angular/material/card': 'ng.material'
    }
}