import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkD1uetwt0HO6OHVeKAUNm2jEb1aH_jXo",
  authDomain: "edusched-b0b1a.firebaseapp.com",
  projectId: "edusched-b0b1a",
  storageBucket: "edusched-b0b1a.appspot.com", // ✅ Fixed this line
  messagingSenderId: "120694789732",
  appId: "1:120694789732:web:f66cfc6ba06032099fb171",
  measurementId: "G-YY2CM1LLXL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
