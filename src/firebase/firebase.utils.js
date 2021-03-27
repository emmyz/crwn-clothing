import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOMx9v0vCw9wnMjmgI_QlfMBca4595-Y4",
  authDomain: "crwn-db-dbe9f.firebaseapp.com",
  projectId: "crwn-db-dbe9f",
  storageBucket: "crwn-db-dbe9f.appspot.com",
  messagingSenderId: "603576600401",
  appId: "1:603576600401:web:9771854b248b17862df570",
  measurementId: "G-STM70KZEJ8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
