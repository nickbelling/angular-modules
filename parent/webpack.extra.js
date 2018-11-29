const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    externals: {
        '@angular/animations': 'ng.animations',
        '@angular/animations/browser': 'ng.animations.browser',
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/compiler': 'ng.compiler',
        '@angular/platform-browser': 'ng.platformBrowser',
        '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
        '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
        '@angular/http': 'ng.http',
        '@angular/forms': 'ng.forms',

        '@angular/cdk': 'ng.cdk',
        '@angular/cdk/a11y': 'ng.cdk.a11y',
        '@angular/cdk/bidi': 'ng.cdk.bidi',
        '@angular/cdk/overlay': 'ng.cdk.overlay',
        '@angular/cdk/platform': 'ng.cdk.platform',
        '@angular/cdk/portal': 'ng.cdk.portal',
        '@angular/cdk/scrolling': 'ng.cdk.scrolling',
        '@angular/cdk/coercion': 'ng.cdk.coercion',
        '@angular/cdk/collections': 'ng.cdk.collections',
        '@angular/cdk/keycodes': 'ng.cdk.keycodes',
        '@angular/cdk/layout': 'ng.cdk.layout',
        '@angular/cdk/observers': 'ng.cdk.observers',
        '@angular/cdk/stepper': 'ng.cdk.stepper',
        '@angular/cdk/table': 'ng.cdk.table',
        '@angular/cdk/text-field': 'ng.cdk.textField',
        '@angular/cdk/tree': 'ng.cdk.tree',

        '@angular/material': 'ng.material',
        '@angular/material/core': 'ng.material',
        '@angular/material/button': 'ng.material',
        '@angular/material/card': 'ng.material',

        'rxjs': 'rxjs'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from:'node_modules/tslib/tslib.js', to:'tslib.js' },
            { from:'node_modules/zone.js/dist/zone.js', to:'zone.js' },
            { from:'node_modules/zone.js/dist/long-stack-trace-zone.js', to:'long-stack-trace-zone.js' },
            { from:'node_modules/rxjs/bundles/rxjs.umd.js', to:'rxjs.umd.js' },
            { from:'node_modules/reflect-metadata/Reflect.js', to:'Reflect.js' },
            { from:'node_modules/@angular/animations/bundles/animations.umd.js', to: 'animations.umd.js' },
            { from:'node_modules/@angular/animations/bundles/animations-browser.umd.js', to: 'animations-browser.umd.js' },
            { from:'node_modules/@angular/core/bundles/core.umd.js', to:'core.umd.js' },
            { from:'node_modules/@angular/common/bundles/common.umd.js', to:'common.umd.js' },
            { from:'node_modules/@angular/common/bundles/common-http.umd.js', to:'common-http.umd.js' },
            { from:'node_modules/@angular/compiler/bundles/compiler.umd.js', to:'compiler.umd.js' },
            { from:'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js', to:'platform-browser.umd.js' },
            { from:'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js', to: 'platform-browser-animations.umd.js' },
            { from:'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js', to:'platform-browser-dynamic.umd.js' },
            { from:'node_modules/@angular/forms/bundles/forms.umd.js', to:'forms.umd.js' },
            
            { from:'node_modules/@angular/cdk/bundles/cdk.umd.js', to:'cdk.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-a11y.umd.js', to:'cdk-a11y.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-bidi.umd.js', to:'cdk-bidi.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-overlay.umd.js', to:'cdk-overlay.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-platform.umd.js', to:'cdk-platform.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-portal.umd.js', to:'cdk-portal.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js', to:'cdk-scrolling.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-coercion.umd.js', to:'cdk-coercion.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-collections.umd.js', to:'cdk-collections.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js', to:'cdk-keycodes.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-layout.umd.js', to:'cdk-layout.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-observers.umd.js', to:'cdk-observers.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-stepper.umd.js', to:'cdk-stepper.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-table.umd.js', to:'cdk-table.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-accordion.umd.js', to:'cdk-accordion.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-text-field.umd.js', to:'cdk-text-field.umd.js' },
            { from:'node_modules/@angular/cdk/bundles/cdk-tree.umd.js', to:'cdk-tree.umd.js' },

            { from:'node_modules/@angular/material/bundles/material.umd.js', to:'material.umd.js' } ],
            { debug: 'warn' }
        )
    ]
}