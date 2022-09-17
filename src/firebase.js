import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBDkqIv9Puw1h0iufkgCINzjWlbyKOJHPY",
  authDomain: "react-chat-bot-app-baebc.firebaseapp.com",
  projectId: "react-chat-bot-app-baebc",
  storageBucket: "react-chat-bot-app-baebc.appspot.com",
  messagingSenderId: "597428373290",
  appId: "1:597428373290:web:25574c744d67eebc110053"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
