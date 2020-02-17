import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyBJhA046XkLCW4Eazs-aoSBrg-5U3xew5Y",
  authDomain: "fabalt-8b425.firebaseapp.com",
  databaseURL: "https://fabalt-8b425.firebaseio.com",
  projectId: "fabalt-8b425",
  storageBucket: "fabalt-8b425.appspot.com",
  messagingSenderId: "945003117433",
  appId: "1:945003117433:web:7e71ab317e9b721bf28da8"
};
// Initialize Firebase
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
