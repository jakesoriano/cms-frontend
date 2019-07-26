// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIEndpoint: "http://192.168.129.26:8001/api",
  WebAPIEndpoint: "http://192.168.129.26:8001/api",
  whitelistedDomains: ["192.168.129.25:8000"],
  blacklistedRoutes: [
    "192.168.129.25:8000/api/auth/login",
    "192.168.129.25:8000/api/auth/register"
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
