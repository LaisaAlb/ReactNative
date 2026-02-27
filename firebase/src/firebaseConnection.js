// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: "AIzaSyALawtcBhrlzE95KwfWsa14VaU_NUfucCw",
  authDomain: "devcurso-478c2.firebaseapp.com",
  projectId: "devcurso-478c2",
  storageBucket: "devcurso-478c2.firebasestorage.app",
  messagingSenderId: "190958546896",
  appId: "1:190958546896:web:e1811f15ef9b60a40513d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})



export { db, auth };
