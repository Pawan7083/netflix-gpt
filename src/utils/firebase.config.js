// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8_EvgZAQ0BOydZIB1r-KezTo8ZFzHoI0",
  authDomain: "nexflix-gpt.firebaseapp.com",
  projectId: "nexflix-gpt",
  storageBucket: "nexflix-gpt.firebasestorage.app",
  messagingSenderId: "1050313603801",
  appId: "1:1050313603801:web:01deb62206ae9210619cc8",
  measurementId: "G-M5QTDCBJ87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();