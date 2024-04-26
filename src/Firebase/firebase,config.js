
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app)
export default auth;