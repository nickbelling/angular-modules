To build: `npm run build`.

Note that this doesn't support raw `ng build` - a few additional options need to be passed in for this to work. See the
`scripts` section of `package.json` to see what is being run.

Files of interest in this directory:

*   `src/app/child.module.ts`: note that this, as a plugin module, is a bit more complex than normal. The file is 
    commented to explain why each variation is important.
*   `src/plugin-metadata.json`: describes the plugin itself, and critically, the main module that needs to be loaded by
    the hosting app at runtime.
*   `src/polyfills.ts`: we comment out `zone.js` because it's loaded onto the main page at runtime.
*   `angular.json`: switches the builder to the `ngx-build-plus:build` builder, as well as running a 
    `document-register-element` script at build time, which enables the plugin app to be bootstrapped onto the page
    alongside the main app without blasting over the original.
*   `webpack.extra.js`: defines all manually-loaded libraries in `index.html` as externals, so that they can be shared
    between the main app and any loaded plugins at runtime.