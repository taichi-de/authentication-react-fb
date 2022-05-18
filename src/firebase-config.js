import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "authentication-react-fb.firebaseapp.com",
  projectId: "authentication-react-fb",
  storageBucket: "authentication-react-fb.appspot.com",
  messagingSenderId: "452571225286",
  appId: "1:452571225286:web:d208c6848689535c2fcbc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);