import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginshopcart.firebaseapp.com",
  projectId: "loginshopcart",
  storageBucket: "loginshopcart.firebasestorage.app",
  messagingSenderId: "896549760771",
  appId: "1:896549760771:web:9b7cb5b81d2559afb1c336",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
