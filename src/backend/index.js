import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCO9bfNy6360rhMje5uXUIxQnpj-ectZec",
  authDomain: "rdmautomacao-26c5f.firebaseapp.com",
  projectId: "rdmautomacao-26c5f",
  storageBucket: "rdmautomacao-26c5f.appspot.com",
  messagingSenderId: "1099090028206",
  appId: "1:1099090028206:web:9b8533a31d9d6f68a92f3f",
  measurementId: "G-3T60YZVDTP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export const auth = getAuth(app);