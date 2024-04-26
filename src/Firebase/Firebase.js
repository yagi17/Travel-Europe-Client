// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuDdrB16sjtd5Hh3mSKzvKCf2E7RiBBY8",
    authDomain: "travel-europe-96dad.firebaseapp.com",
    projectId: "travel-europe-96dad",
    storageBucket: "travel-europe-96dad.appspot.com",
    messagingSenderId: "289767165692",
    appId: "1:289767165692:web:b472043b1f380422a35179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app