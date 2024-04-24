// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf8oV7l7MYO5mFP51G3KcZ3-WrxFXvJ38",
  authDomain: "gptflix-80891.firebaseapp.com",
  projectId: "gptflix-80891",
  storageBucket: "gptflix-80891.appspot.com",
  messagingSenderId: "856442359762",
  appId: "1:856442359762:web:db1a5059c5a2c31720c20b",
  measurementId: "G-X3P6LDZGF9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();