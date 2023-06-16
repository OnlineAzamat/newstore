// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY7_oJcJUdqgEBXAAwoFxo8YVewgGlFeg",
  authDomain: "myurls-2471a.firebaseapp.com",
  databaseURL: "https://myurls-2471a-default-rtdb.firebaseio.com",
  projectId: "myurls-2471a",
  storageBucket: "myurls-2471a.appspot.com",
  messagingSenderId: "29619493182",
  appId: "1:29619493182:web:28e103a6c8c6788d49f46f",
  measurementId: "G-K14VHL1N9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);