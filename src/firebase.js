import * as auth from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC83ULHkRnwB0wPQ-wMz3ucwg5q8QF3x8A",
  authDomain: "netflix-clone-df139.firebaseapp.com",
  projectId: "netflix-clone-df139",
  storageBucket: "netflix-clone-df139.appspot.com",
  messagingSenderId: "315001380769",
  appId: "1:315001380769:web:72cc27ff90f042e8db35e0"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db =getFirestore(firebaseApp);
  
  export { auth };
  export default db;