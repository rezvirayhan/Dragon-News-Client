// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCgJI5_01OBcJwQlYAvBh70TpTfI4eqvE",
    authDomain: "the-news-dragon-ph-hero.firebaseapp.com",
    projectId: "the-news-dragon-ph-hero",
    storageBucket: "the-news-dragon-ph-hero.appspot.com",
    messagingSenderId: "791974336508",
    appId: "1:791974336508:web:b3f267a02ecb82e9050479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;