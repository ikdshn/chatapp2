import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOsKSdev67e42zrod1l03U3yhXSuiErEg",
  authDomain: "chatapp2-45c78.firebaseapp.com",
  databaseURL: "https://chatapp2-45c78.firebaseio.com",
  projectId: "chatapp2-45c78",
  storageBucket: "chatapp2-45c78.appspot.com",
  messagingSenderId: "559061981444",
  appId: "1:559061981444:web:6c80af5602dd1400cbd851",
  measurementId: "G-H1LRDF3W5K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth(); // ショートカット
export const db = firebase.firestore(); // ショートカット
