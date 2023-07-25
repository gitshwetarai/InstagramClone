import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQJ9ackAbbSajjmpeKmdPbtXT0wXb4A3s",
  authDomain: "instagram-clone-1da2e.firebaseapp.com",
  projectId: "instagram-clone-1da2e",
  storageBucket: "instagram-clone-1da2e.appspot.com",
  messagingSenderId: "472673359313",
  appId: "1:472673359313:web:f714afac285ac8bcb9fcf0",
  measurementId: "G-BV8NQS1TK5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
