import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD2NlBJoYKiu23jUYzDkJK-kCOL8p0NZ6s",
    authDomain: "ministryoffinancemk.firebaseapp.com",
    projectId: "ministryoffinancemk",
    storageBucket: "ministryoffinancemk.appspot.com",
    messagingSenderId: "608401300693",
    appId: "1:608401300693:web:281df077c93ef4d22a565c",
    measurementId: "G-26M38XH531"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)