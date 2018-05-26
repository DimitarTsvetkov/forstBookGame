import Rebase from 're-base';
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDslH02QzfxDwxPkTOKvINpgjauwf1nh00",
    authDomain: "forest-book.firebaseapp.com",
    databaseURL: "https://forest-book.firebaseio.com",
    projectId: "forest-book",
    storageBucket: "forest-book.appspot.com",
    messagingSenderId: "315342178024"
};
const auth = firebase.auth;
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const email = document.getElementById("emailtest");
const pass = document.getElementById("passtest");
const logbuttun= document.getElementById("logbuttun");
export { app,email, pass, auth, base, facebookProvider }