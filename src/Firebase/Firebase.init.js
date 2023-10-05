// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBDwXHq8PFXx9XaMIkWzrvlfxKPSVbCOsw",
  authDomain: "react-hospital-managemen-cb56f.firebaseapp.com",
  projectId: "react-hospital-managemen-cb56f",
  storageBucket: "react-hospital-managemen-cb56f.appspot.com",
  messagingSenderId: "940231896734",
  appId: "1:940231896734:web:66b03e0eaa9e3058e9558f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;
