// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTnnvJDa9WU3vr1o4P0m_0RuIByBt-PuI",
  authDomain: "chatapp-77b2a.firebaseapp.com",
  projectId: "chatapp-77b2a",
  storageBucket: "chatapp-77b2a.appspot.com",
  messagingSenderId: "694405141651",
  appId: "1:694405141651:web:c11d5542c7a59813b9e966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
export {auth, db}