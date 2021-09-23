import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBef8CLNwhHHbSUwZwVccTuIMpsPlLpLRc",
    authDomain: "photograph-32b88.firebaseapp.com",
    projectId: "photograph-32b88",
    storageBucket: "photograph-32b88.appspot.com",
    messagingSenderId: "176368496241",
    appId: "1:176368496241:web:c499dcf237b0f6fc5875d0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };