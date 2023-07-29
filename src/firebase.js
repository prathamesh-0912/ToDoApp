// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyIzErvjbkGUrYxQ-Xa4rRZiMUKl7Cwss",
  authDomain: "to-do-be490.firebaseapp.com",
  projectId: "to-do-be490",
  storageBucket: "to-do-be490.appspot.com",
  messagingSenderId: "823890377086",
  appId: "1:823890377086:web:1a493fcafb5dd051645b2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)