// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN1WDH95Vss95vleIRmKksfQhKa2m0Ma8",
  authDomain: "ma-apparels-website.firebaseapp.com",
  projectId: "ma-apparels-website",
  storageBucket: "ma-apparels-website.appspot.com",
  messagingSenderId: "228692958390",
  appId: "1:228692958390:web:71be71d00e96b728a99a17",
  measurementId: "G-VNPYSS8P3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);