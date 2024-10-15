// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBO6zaO4dZbs79qgXC7u6On8jcAJhmcLh8",
    authDomain: "pacertest-d818e.firebaseapp.com",
    projectId: "pacertest-d818e",
    storageBucket: "pacertest-d818e.appspot.com",
    messagingSenderId: "179524996741",
    appId: "1:179524996741:web:b3825839dc581c918ba3ec"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
