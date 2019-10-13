import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHSOwKOJNU8quuJqbdkcrl0w7MCLl89xA",
    authDomain: "bookstore1-6a953.firebaseapp.com",
    databaseURL: "https://bookstore1-6a953.firebaseio.com",
    projectId: "bookstore1-6a953",
    storageBucket: "",
    messagingSenderId: "280551874668",
    appId: "1:280551874668:web:92581d18db0d4db11c7849",
    measurementId: "G-39GG8M1Y6H"
});

const fbase = Rebase.createClass(firebaseApp.database());


export {fbase, firebaseApp};
