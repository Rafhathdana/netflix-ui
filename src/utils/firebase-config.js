// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ0wP42RZYnPV4G6_lTxXT0cWbZ9__thk",
  authDomain: "olx-clone-rafhathdana.firebaseapp.com",
  projectId: "olx-clone-rafhathdana",
  storageBucket: "olx-clone-rafhathdana.appspot.com",
  messagingSenderId: "526855716197",
  appId: "1:526855716197:web:6fa9e5ace86a01f846b58c",
  measurementId: "G-BBJ5LTTSS7",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
