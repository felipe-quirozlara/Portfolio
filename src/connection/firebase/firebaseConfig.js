import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAXReGi9CWUEa7f1AevseOWtVAmgVqAO6M",
    authDomain: "portafolio-aa3bd.firebaseapp.com",
    databaseURL: "https://portafolio-aa3bd-default-rtdb.firebaseio.com",
    projectId: "portafolio-aa3bd",
    storageBucket: "portafolio-aa3bd.appspot.com",
    messagingSenderId: "938390691668",
    appId: "1:938390691668:web:a7f560000143bad8bef2c1",
    measurementId: "G-KBCDY69004"
});

const db = getFirestore();

export default db; 