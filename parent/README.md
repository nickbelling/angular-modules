To build: `npm run build`.

Note that this doesn't support raw `ng build` - a few additional options need to be passed in for this to work. See the
`scripts` section of `package.json` to see what is being run.

Files of interest in this directory:

*   `src/app/plugin-metadata.model.ts`: represents the model of the `plugin-metadata.json` file each plugin should 
    provide so that it can be dynamically loaded.
*   `src/app/plugin.component.ts`: the host component which is actually responsible for dynamically loading the plugin
    component onto the page. All of the magic happens here!
*   `src/index.html`: imports all of the Angular/Material/Rxjs/Zone/etc `.umd.js` bundles manually, so that they can be 
    shared between the main app and the child plugins.
*   `src/polyfills.ts`: has the `zone.js` import commented out (as it's manually loaded onto the page in `index.html`).
*   `angular.json`: switches the builder to the `ngx-build-plus:build` builder.
*   `webpack.extra.js`: defines all manually-loaded libraries in `index.html` as externals, so that they can be shared
    between the main app and any loaded plugins at runtime, and also copies the `.umd.js` files into an `externals` 
    directory for ease of use. I also recommend updating this to also copy across the `.umd.js.map` files as well, so 
    that you can find script order issues in the `index.html` file (this will almost certainly happen).