// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjt7hzLuL6xh4QzV2z6svlOkRbWR2jnBI",
  authDomain: "alta1-e43ed.firebaseapp.com",
  projectId: "alta1-e43ed",
  storageBucket: "alta1-e43ed.appspot.com",
  messagingSenderId: "339117855835",
  appId: "1:339117855835:web:4eacb0c6fbd30d8d5a1b7e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)