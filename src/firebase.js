import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBn_aCAKcgpMqYLgRAV9qwUM9VdgzUdXfo",
  authDomain: "firbase-learn-360.firebaseapp.com",
  databaseURL: "https://firbase-learn-360-default-rtdb.firebaseio.com",
  projectId: "firbase-learn-360",
  storageBucket: "firbase-learn-360.appspot.com",
  messagingSenderId: "196987928754",
  appId: "1:196987928754:web:d41acbd8444bbaa47d49ab",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
