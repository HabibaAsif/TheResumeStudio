// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE80GUJw-wWRdRGnpFry6KfONa_95q00A",
  authDomain: "contactformdata-f3c0b.firebaseapp.com",
  projectId: "contactformdata-f3c0b",
  storageBucket: "contactformdata-f3c0b.appspot.com",
  messagingSenderId: "116589951745",
  appId: "1:116589951745:web:0db4ececb6b9e66668f900"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
