// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnUhzsM8VvJ5GIwGZlD-YrIpPXDBWpbg4",
  authDomain: "crud-angular-1f317.firebaseapp.com",
  projectId: "crud-angular-1f317",
  storageBucket: "crud-angular-1f317.appspot.com",
  messagingSenderId: "706711273464",
  appId: "1:706711273464:web:8483a9dad9bfc159e6e00d",
  measurementId: "G-BHGCS5EDZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
