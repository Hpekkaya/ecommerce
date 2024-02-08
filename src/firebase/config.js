// burada google firebase ile etkileşime buradan girilecek.

import { initializeApp } from "firebase/app";

//Login control and authorization
import {getAuth} from "firebase/auth"

// Data storage location
import {getFirestore} from "firebase/firestore"

// Image storage location
import {getStorage} from "firebase/storage"


// Import the functions you need from the SDKs you need
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBYccASa7V4RXU0uNJDAU09WIG6IDCtT9k",
  authDomain: "eshop01-68e85.firebaseapp.com",
  projectId: "eshop01-68e85",
  storageBucket: "eshop01-68e85.appspot.com",
  messagingSenderId: "255103167268",
  appId: "1:255103167268:web:61d54d56fe3bae1e7a21b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth =getAuth(app)
export const db =getFirestore(app)
export const storage =getStorage(app)


export default app