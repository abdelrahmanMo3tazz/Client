// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAx12mXcZ56cpVfttZRrBUmVHwghhgmqQ",
  authDomain: "enhanced-digit-337913.firebaseapp.com",
  projectId: "enhanced-digit-337913",
  storageBucket: "enhanced-digit-337913.appspot.com",
  messagingSenderId: "927992456581",
  appId: "1:927992456581:web:ac06992f712e127d4010ec",
  measurementId: "G-PLZHKVMBXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);