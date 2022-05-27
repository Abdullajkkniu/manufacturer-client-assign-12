// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOlgUmgRDRIh4hNQvF48i8wVZgS3Oxzl8",
  authDomain: "techbyko.firebaseapp.com",
  projectId: "techbyko",
  storageBucket: "techbyko.appspot.com",
  messagingSenderId: "951184000159",
  appId: "1:951184000159:web:3df10f25ad84d859df8eaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default auth;