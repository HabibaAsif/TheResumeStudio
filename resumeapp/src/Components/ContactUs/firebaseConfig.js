// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS8lsroNZjLb6XoU_LKPd1Q9X9Mpp3P18",
  authDomain: "alainadatabase.firebaseapp.com",
  projectId: "alainadatabase",
  storageBucket: "alainadatabase.appspot.com",
  messagingSenderId: "520097223067",
  appId: "1:520097223067:web:8168399ed66b4e9bc0913e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);