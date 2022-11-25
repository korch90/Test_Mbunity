// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC0IUPmXHmmCwOEplkWpsNid_6tu--rKsg",
  authDomain: "andriankukr.firebaseapp.com",
  projectId: "andriankukr",
  storageBucket: "andriankukr.appspot.com",
  messagingSenderId: "768413021144",
  appId: "1:768413021144:web:66f57294538ab78f2eb8ad",
  measurementId: "G-Y88C4J7T8Z"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default getFirestore()
