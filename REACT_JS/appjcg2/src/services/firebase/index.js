
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: process.env.REACTAPP_MC_apiKey,
  authDomain: process.env.REACTAPP_MC_authDomain,
  projectId: process.env.REACTAPP_MC_projectId,
  storageBucket: process.env.REACTAPP_MC_storageBucket,
  messagingSenderId: process.env.REACTAPP_MC_messagingSenderId,
  appId: process.env.REACTAPP_MC_appId
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)