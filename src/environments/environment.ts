// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDI9P9RV77HorL1o0tTXZ6dwCtMD1LIA4s",
    authDomain: "uploadtest-a0ebc.firebaseapp.com",
    databaseURL: "https://uploadtest-a0ebc.firebaseio.com",
    projectId: "uploadtest-a0ebc",
    storageBucket: "uploadtest-a0ebc.appspot.com",
    messagingSenderId: "928110400155",
    appId: "1:928110400155:web:9e3d46a3e9fdab70e0ac3e"
 },
 emailAPI: 'http://xpik.io',
  database: 'firebase',
  social: {
    fblink: 'https://www.facebook.com/xpik',
    linkedin: 'https://www.linkedin.com/in/xpik/',
    github: '',
    emailid: 'info@xpik.io',
    homelink: ''
  },
  socialAuthEnabled: true,
  graphql: 'http://localhost:3000/graphql'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
