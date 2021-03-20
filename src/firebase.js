import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBI2hvejExkX41kMIHWKVc0O0P3FcN8yPE",
    authDomain: "netflix-build-b9309.firebaseapp.com",
    projectId: "netflix-build-b9309",
    storageBucket: "netflix-build-b9309.appspot.com",
    messagingSenderId: "702455231648",
    appId: "1:702455231648:web:a84bc3b60129f2580545c5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth }
  export default db;

  // We can have one default export and many exclusive export