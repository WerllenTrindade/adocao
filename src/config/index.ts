import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyAPT9nwFtIpoA4IkIRFFsEsnsgdCuiHPfE",
  authDomain: "adocao-b24a3.firebaseapp.com",
  projectId: "adocao-b24a3",
  storageBucket: "adocao-b24a3.appspot.com",
  messagingSenderId: "22318238524",
  appId: "1:22318238524:web:f8617f57ce2f6b46966c39"
};

const app = getApps.length > 0 ? getApp() : initializeApp(config)

const firestoreDB = getFirestore(app)
const firebaseAuth = getAuth(app)

export {firestoreDB, firebaseAuth }