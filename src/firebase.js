import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACkFwxtgT-yP2l88ssWLbCp550CL9_5CY",
  authDomain: "prioritizer-84c10.firebaseapp.com",
  projectId: "prioritizer-84c10",
  storageBucket: "prioritizer-84c10.appspot.com",
  messagingSenderId: "1044079346408",
  appId: "1:1044079346408:web:e9c23ed078c2e414547f5d",
  measurementId: "G-X150SLKCTT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(firebaseApp)

export { db, auth };