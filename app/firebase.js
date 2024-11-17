
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCeTfxiqEEwHW76M1-5u79gRlGQT2ja7rw",
  authDomain: "say-48953.firebaseapp.com",
  projectId: "say-48953",
  storageBucket: "say-48953.appspot.com",
  messagingSenderId: "185889115117",
  appId: "1:185889115117:web:7b23e080eb77fd7d6a75e4",
  measurementId: "G-NYZW7HWPQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
