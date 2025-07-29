import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHth1EIen6DdRQ_lV7p-O8Y5OuMq4zC8U",
    authDomain: "react-auth-8b3fe.firebaseapp.com",
    projectId: "react-auth-8b3fe",
    storageBucket: "react-auth-8b3fe.firebasestorage.app",
    messagingSenderId: "651464416411",
    appId: "1:651464416411:web:8896e58ffb829aba3d7a3e"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);