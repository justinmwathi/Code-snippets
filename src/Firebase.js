// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfqx0HGWb7zjYzXZAZjnvspNB2ypa9zp0",
  authDomain: "fir-authentication-intro-a75e3.firebaseapp.com",
  projectId: "fir-authentication-intro-a75e3",
  storageBucket: "fir-authentication-intro-a75e3.appspot.com",
  messagingSenderId: "378153410461",
  appId: "1:378153410461:web:1248630b21c81052131974",
  measurementId: "G-JRMGGGF5QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth};