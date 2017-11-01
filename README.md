# Build the plugin

Building the plugin is super easy; just browse to the plugin directory and then run `npm run build`.

## Build steps

The `npm run build` command does a bunch of stuff:

*   `clean`: The `bin/plugins/[plugin]` directory gets removed, as does the plugin's `aot` directory.
*   `ngc`: The plugin app is compiled using the Angular `ngc` compiler. This includes source mappings.
*   `tsc`: The output of the `ngc` compilation then gets recompiled with the TypeScript compiler, for
    reasons I don't yet understand. Source mappings get stripped here.
*   `rollup`: The output of the `tsc` compilation then gets rolled up into a `.umd.js` file. This 
    does the magic rollup stuff that strips out the additional crud such as references to the core 
    Angular libraries (which will be included by the hosting app).
*   `copy`: Finally, the `rollup` output and the companion `plugin-metadata.json` file are copied to 
    `/bin/plugins/[plugin]`.

