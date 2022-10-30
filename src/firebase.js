import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA4iQUTSLs1iqxxbo6YuuFTZ8VuHpsf8pU",
	authDomain: "real-chat-f5e71.firebaseapp.com",
	projectId: "real-chat-f5e71",
	storageBucket: "real-chat-f5e71.appspot.com",
	messagingSenderId: "267739502218",
	appId: "1:267739502218:web:cf469f03c66d5debeb3f73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
