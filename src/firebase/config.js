import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcpGykmAXRP8yGVrknM-vL9hmPSDJBU6g",
  authDomain: "rn-social-6e2d0.firebaseapp.com",
  projectId: "rn-social-6e2d0",
  storageBucket: "rn-social-6e2d0.appspot.com",
  messagingSenderId: "15013489044",
  appId: "1:15013489044:web:55ca56f30fabbc2b89c781"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);