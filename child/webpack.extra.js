// Note: this "externals" list should be a mirror of the same externals list in the parent app's webpack.extra.js.

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
    }
}