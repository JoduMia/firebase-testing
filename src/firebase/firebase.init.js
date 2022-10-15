import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBR1CF_ec3jePjsN42YXSdF4gIeZc4jifQ",
  authDomain: "testing-firebase-9dcce.firebaseapp.com",
  projectId: "testing-firebase-9dcce",
  storageBucket: "testing-firebase-9dcce.appspot.com",
  messagingSenderId: "114707864351",
  appId: "1:114707864351:web:3a055699f2723607c06e2a"
};

const app = initializeApp(firebaseConfig);

export default app;