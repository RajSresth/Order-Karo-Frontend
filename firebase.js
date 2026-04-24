// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "order-karo-d7c5a.firebaseapp.com",
  projectId: "order-karo-d7c5a",
  storageBucket: "order-karo-d7c5a.firebasestorage.app",
  messagingSenderId: "237745699637",
  appId: "1:237745699637:web:1da3571e07e3620ec0ea7c",
  measurementId: "G-M6CGLMP8D7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
