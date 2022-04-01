
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHdv44yp9tk-9arCWrknRmuQjqt42bZfM",
  authDomain: "react-crud-d5ccc.firebaseapp.com",
  projectId: "react-crud-d5ccc",
  storageBucket: "react-crud-d5ccc.appspot.com",
  messagingSenderId: "766555101105",
  appId: "1:766555101105:web:3b5131160be2ac66cdcf90",
  measurementId: "G-V02E4EYPQG"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
