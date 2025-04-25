import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFntJELlFw1ntZ-_Ffv86jp9f12bZsIKY",
  authDomain: "prepwise-ad3da.firebaseapp.com",
  projectId: "prepwise-ad3da",
  storageBucket: "prepwise-ad3da.firebasestorage.app",
  messagingSenderId: "339943186168",
  appId: "1:339943186168:web:f97e6906858f638dec250d",
  measurementId: "G-4LRW5787YN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);