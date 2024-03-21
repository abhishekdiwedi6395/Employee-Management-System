// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvBaJdG3w8GKSQimENA-la55HL2JDpm28",
  authDomain: "employee-management-syst-2cc11.firebaseapp.com",
  projectId: "employee-management-syst-2cc11",
  storageBucket: "employee-management-syst-2cc11.appspot.com",
  messagingSenderId: "699386042543",
  appId: "1:699386042543:web:f517cfdc6eb0c3c8dc1c5a",
  measurementId: "G-127WPEQLQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth,app};