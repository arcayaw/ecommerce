// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKpMLicfQ8FE2Vz7RbXSZOmCRYJ42_VoA",
  authDomain: "ecommerce-nunchibox.firebaseapp.com",
  projectId: "ecommerce-nunchibox",
  storageBucket: "ecommerce-nunchibox.appspot.com",
  messagingSenderId: "543744109724",
  appId: "1:543744109724:web:af3b82dcd68ced1a035159",
  measurementId: "G-4909CQF69F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const db = getFirestore(app)