import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDslH02QzfxDwxPkTOKvINpgjauwf1nh00",
    authDomain: "forest-book.firebaseapp.com",
    databaseURL: "https://forest-book.firebaseio.com",
    projectId: "forest-book",
    storageBucket: "forest-book.appspot.com",
    messagingSenderId: "315342178024"
};
firebase.initializeApp(config);
export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();