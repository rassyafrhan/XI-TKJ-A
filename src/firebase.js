// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAL0QzGCRMTanSq4OgE99ywHCbfAS4uUa8",
  authDomain: "xii-tkj-a.firebaseapp.com",
  projectId: "xii-tkj-a",
  storageBucket: "xii-tkj-a.appspot.com",
  messagingSenderId: "531630580839",
  appId: "1:531630580839:web:208902782f18e470c0a0c2",
  measurementId: "G-3X7FBVPYXB"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();