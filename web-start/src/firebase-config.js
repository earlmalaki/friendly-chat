/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyD4P79iTIU4PgHdHsz-yzSRXYGnmzub5BE",
  authDomain: "friendlychat-8a041.firebaseapp.com",
  projectId: "friendlychat-8a041",
  storageBucket: "friendlychat-8a041.appspot.com",
  messagingSenderId: "246805840946",
  appId: "1:246805840946:web:d95d128d989b7ed181282b"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}