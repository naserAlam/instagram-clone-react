import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvVGWPBJTMhct8FPl9VeQoNDEzGq2kwlk",
    authDomain: "instagram-clone-naseralam.firebaseapp.com",
    databaseURL: "https://instagram-clone-naseralam.firebaseio.com",
    projectId: "instagram-clone-naseralam",
    storageBucket: "instagram-clone-naseralam.appspot.com",
    messagingSenderId: "332973849636",
    appId: "1:332973849636:web:2a30e33a0186e5ce15acb1",
    measurementId: "G-Q1D5EVVR3Y"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }