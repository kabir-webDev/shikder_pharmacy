// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC2DSX1G1h5l1Q9uvfTBTUPOWLaWLOvc0Q",
//   authDomain: "sikder-pharma.firebaseapp.com",
//   projectId: "sikder-pharma",
//   storageBucket: "sikder-pharma.appspot.com",
//   messagingSenderId: "17385553540",
//   appId: "1:17385553540:web:8eaeec21448c3c989eccd1",
// };

// firebase.initializeApp(firebaseConfig);

// export default firebase;

import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2DSX1G1h5l1Q9uvfTBTUPOWLaWLOvc0Q",
  authDomain: "sikder-pharma.firebaseapp.com",
  projectId: "sikder-pharma",
  storageBucket: "sikder-pharma.appspot.com",
  messagingSenderId: "17385553540",
  appId: "1:17385553540:web:8eaeec21448c3c989eccd1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
