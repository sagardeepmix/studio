
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "bhagyolipi-dear-4-you",
  appId: "1:367253220952:web:bcf564231de09bdaaf642d",
  storageBucket: "bhagyolipi-dear-4-you.firebasestorage.app",
  apiKey: "AIzaSyD9CuWuAHTxPT9lPyZKC02Sl4G8Uhl7sWQ",
  authDomain: "bhagyolipi-dear-4-you.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "367253220952",
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
