// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtpRyIR1iknAVkPtiulxf5vFGuPA7WV9M",
  authDomain: "netflixgpt-722e0.firebaseapp.com",
  projectId: "netflixgpt-722e0",
  storageBucket: "netflixgpt-722e0.appspot.com",
  messagingSenderId: "168477021219",
  appId: "1:168477021219:web:ce125b62dbed7509740d96",
  measurementId: "G-VFBF7T7YPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();