// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXbAnEj0PPfLVBNfmiAKzUmWXA9ybDRKw",
  authDomain: "icare-adhd.firebaseapp.com",
  projectId: "icare-adhd",
  storageBucket: "icare-adhd.appspot.com",
  messagingSenderId: "26445353682",
  appId: "1:26445353682:web:98d7b50c7f0b289790530b",
  measurementId: "G-X3YZFZEQ7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
