
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfUFH_DAnHW3fMvvI1UiIC4Oww1lmgOCQ",
  authDomain: "mywebproject-b2b3d.firebaseapp.com",
  projectId: "mywebproject-b2b3d",
  storageBucket: "mywebproject-b2b3d.firebasestorage.app",
  messagingSenderId: "555700732654",
  appId: "1:555700732654:web:0e4e53e9c9f6028923a9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;