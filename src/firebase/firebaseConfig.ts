// src/firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNRuBAB75c3rVE6fU9lz65dMvJYbdGhwM",
    authDomain: "npj0-2e420.firebaseapp.com",
    projectId: "npj0-2e420",
    storageBucket: "npj0-2e420.appspot.com",
    messagingSenderId: "18540966303",
    appId: "1:18540966303:web:505c46272e5d8af018cdaa"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
