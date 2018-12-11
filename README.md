A technique which leverages Angular AoT compilation to bootstrap an unknown-at-runtime series of plugins into a main, 
parent app in an enterprise setting.

To run, build the parent app:

1. `cd parent`
2. `npm install`
3. `npm run build`

Then build the child app:

1. `cd ../child`
2. `npm install`
3. `npm run build`

Then serve up the `/bin` directory and watch the magic happen.