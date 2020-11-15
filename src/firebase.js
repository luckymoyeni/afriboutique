// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAOvnbopuJc9-Ejsh53v8HtpyMchu6rdAc",
    authDomain: "afriboutique-bc241.firebaseapp.com",
    databaseURL: "https://afriboutique-bc241.firebaseio.com",
    projectId: "afriboutique-bc241",
    storageBucket: "afriboutique-bc241.appspot.com",
    messagingSenderId: "248363928014",
    appId: "1:248363928014:web:e72fca2d58926d1832039f",
    measurementId: "G-B1SVJ8T99K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};