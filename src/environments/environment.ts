// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const firebaseConfig = {
	fire: {
    apiKey: "AIzaSyCY6nouYbid72sZGvW5O_DD1tz8hlHYYto",
    authDomain: "bbandc-a66ee.firebaseapp.com",
    databaseURL: "https://bbandc-a66ee.firebaseio.com",
    projectId: "bbandc-a66ee",
    storageBucket: "bbandc-a66ee.appspot.com",
    messagingSenderId: "767275959028"
	}
};