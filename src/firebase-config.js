import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBSosJ_FQCuBg78Sz0ecOYnGNtOM_4v8s",
  authDomain: "the-single-plus.firebaseapp.com",
  databaseURL: "https://the-single-plus-default-rtdb.firebaseio.com",
  projectId: "the-single-plus",
  storageBucket: "the-single-plus.appspot.com",
  messagingSenderId: "991118539545",
  appId: "1:991118539545:web:454982552f3923eaec6388",

  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export default firebaseApp;
