// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3AuTjX95-vMtEev6Ft6DGjJDNb2r2-yE",
  authDomain: "resume-builder-1d9d9.firebaseapp.com",
  projectId: "resume-builder-1d9d9",
  storageBucket: "resume-builder-1d9d9.appspot.com",
  messagingSenderId: "79041754832",
  appId: "1:79041754832:web:3469e368a080ccedcc90d5",
  measurementId: "G-ER0DYS3HQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };








