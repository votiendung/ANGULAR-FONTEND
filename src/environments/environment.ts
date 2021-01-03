// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: 'AIzaSyCPwmesURn15dvjXhQjxqIWYeerEonZMEw',
    authDomain: 'ketnoibackend.firebaseapp.com',
    projectId: 'ketnoibackend',
    storageBucket: 'ketnoibackend.appspot.com',
    messagingSenderId: '672279948214',
    appId: '1:672279948214:web:f62e0ea886daa51b02ef17',
    measurementId: 'G-HDW4EJ0DQJ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
