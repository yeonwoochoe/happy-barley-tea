import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDBSosJ_FQCuBg78Sz0ecOYnGNtOM_4v8s',
  authDomain: 'the-single-plus.firebaseapp.com',
  databaseURL: 'https://the-single-plus-default-rtdb.firebaseio.com',
  projectId: 'the-single-plus',
  storageBucket: 'the-single-plus.appspot.com',
  messagingSenderId: '991118539545',
  appId: '1:991118539545:web:454982552f3923eaec6388',
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export default firebaseApp;
