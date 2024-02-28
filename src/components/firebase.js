// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBVfLO5_5T5jpQsoN3C9nsgwfPCzfOsdk",
  authDomain: "img-uplaoder.firebaseapp.com",
  projectId: "img-uplaoder",
  storageBucket: "img-uplaoder.appspot.com",
  messagingSenderId: "119564836253",
  appId: "1:119564836253:web:f1fb8a0b0dd420c81b6374",
  measurementId: "G-BVLTEQFRFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
