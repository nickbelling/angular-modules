To build: `npm run build`.

You'll get a `WARNING` about Lazy routes discovery - this is expected (it doesn't appear to be possible to turn this
off without having the plugin try to bootstrap itself as soon as you load it onto the page, which we definitely don't 
want).

Note that this doesn't support raw `ng build` - a few additional options need to be passed in for this to work. See the
`scripts` section of `package.json` to see what is being run.

Files of interest in this directory:

*   `src/app/child.module.ts`: note that this, as a plugin module, is a bit more complex than normal. The file is 
    commented to explain why each variation is important.
*   `src/plugin-metadata.json`: describes the plugin itself, and critically, the main module that needs to be loaded by
    the hosting app at runtime.
*   `src/main.ts`: we assign a global window variable for the module type, and because it's AoT compiled, the parent app
    can compile the module at runtime. The parent app will attempt to pull it out of the global context based on what we
    put in `plugin-metadata.json`, so this needs to match. We don't bootstrap this module using `platformBrowserDynamic`
    (we used to - but that created problems with dependant modules such as the Material ones being bootstrapped twice,
    which led to horrible and unpredictable results).
*   `angular.json`: switches the builder to the `ngx-build-plus:build` builder, which enables us to mark the Angular,
    CDK, Material and other packages as external.
*   `webpack.extra.js`: defines all manually-loaded libraries in the parent's `index.html` as externals, so that they
    can be shared between the main app and any loaded plugins at runtime.