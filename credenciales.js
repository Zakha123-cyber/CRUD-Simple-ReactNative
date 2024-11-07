// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIbxIU7edosMgbV8dFiDp8gG3er7w5pmE",
  authDomain: "reactnativeauth-740ab.firebaseapp.com",
  projectId: "reactnativeauth-740ab",
  storageBucket: "reactnativeauth-740ab.firebasestorage.app",
  messagingSenderId: "174355822979",
  appId: "1:174355822979:web:96cd7da9cb5f90d0fd5eb6"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;