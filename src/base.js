import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8nm1zu6tmkte0RQl3Myiu46dm_1cugV4",
    authDomain: "catch-of-the-day-strdbr.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-strdbr-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-strdbr",
    storageBucket: "catch-of-the-day-strdbr.appspot.com",
    messagingSenderId: "226371990421",
    appId: "1:226371990421:web:9dd7f4cc525f30f447bc9c",
    measurementId: "G-WHQ6Z07E1M"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;