// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTb7FhBrt4CHg0IFO6hqmZzmB0vtDrWL4",
    authDomain: "twitter-project-a912a.firebaseapp.com",
    projectId: "twitter-project-a912a",
    storageBucket: "twitter-project-a912a.appspot.com",
    messagingSenderId: "916594693475",
    appId: "1:916594693475:web:84d00311d62e97324c2f56"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };