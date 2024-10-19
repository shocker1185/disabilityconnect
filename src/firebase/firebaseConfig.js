// Import Firebase modules
import { initializeApp } from "firebase/app";            // Firebase core (app initialization)
import { getAuth } from "firebase/auth";                 // Firebase authentication
import { getFirestore } from "firebase/firestore";       // Firebase Firestore database
import { getAnalytics } from "firebase/analytics";       // Firebase Analytics (optional)
import { getStorage } from "firebase/storage";

// Firebase configuration object (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyBqp9ROA4xAzUxGql-IqnG_1F679p2gihU",
  authDomain: "disability-f9409.firebaseapp.com",
  projectId: "disability-f9409",
  storageBucket: "disability-f9409.appspot.com",
  messagingSenderId: "544648712158",
  appId: "1:544648712158:web:02d20b56287bcfd888174f",
  measurementId: "G-362BSS5SZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services initialization
const auth = getAuth(app);         // Initialize Firebase Authentication
const db = getFirestore(app);      // Initialize Firestore
const analytics = getAnalytics(app);  // Initialize Analytics (optional)

// Export services for use in other parts of the app
export { auth, db, analytics };
export const storage = getStorage(app);
