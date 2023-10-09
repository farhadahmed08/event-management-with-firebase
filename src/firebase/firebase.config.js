// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDotEiMEp_zZtL2m3EqU75ukiSwsmXhdKs",
  authDomain: "react-event-assignment.firebaseapp.com",
  projectId: "react-event-assignment",
  storageBucket: "react-event-assignment.appspot.com",
  messagingSenderId: "87773799888",
  appId: "1:87773799888:web:a377fcf5d56bef146945d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;