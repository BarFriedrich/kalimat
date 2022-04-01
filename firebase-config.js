import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE6CvBHTM4GNAosTfWKTXxDP5eeWiZk60",
  authDomain: "kalemat-1a88a.firebaseapp.com",
  projectId: "kalemat-1a88a",
  storageBucket: "kalemat-1a88a.appspot.com",
  messagingSenderId: "470972935539",
  appId: "1:470972935539:web:49e77d1dd12b565dd3a906"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;