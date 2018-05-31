import * as firebase from 'firebase';
// Required for side-effects
import '@firebase/firestore'

const config = {
    apiKey: "AIzaSyDslH02QzfxDwxPkTOKvINpgjauwf1nh00",
    authDomain: "forest-book.firebaseapp.com",
    databaseURL: "https://forest-book.firebaseio.com",
    projectId: "forest-book",
    storageBucket: "forest-book.appspot.com",
    messagingSenderId: "315342178024"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.firestore();
const auth = firebase.auth();
const facebookProvider = new firebase.auth.FacebookAuthProvider()
export {  db, auth, facebookProvider };