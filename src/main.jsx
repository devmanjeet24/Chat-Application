import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK5MMfRiKYmMzFSXIBUWZlYvT1UUDTKb4",
  authDomain: "react-chat-app-5e126.firebaseapp.com",
  databaseURL: "https://react-chat-app-5e126-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-5e126",
  storageBucket: "react-chat-app-5e126.firebasestorage.app",
  messagingSenderId: "286741245707",
  appId: "1:286741245707:web:3974eccbaf9a4a98407c0e",
  measurementId: "G-2X1X84B8Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,  
)
