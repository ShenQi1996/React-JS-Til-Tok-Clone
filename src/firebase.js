import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUsrPzlsXhNil3g7wANXIh2tWOI2qIzi0",
    authDomain: "tik-tok-clone-b7299.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-b7299.firebaseio.com",
    projectId: "tik-tok-clone-b7299",
    storageBucket: "tik-tok-clone-b7299.appspot.com",
    messagingSenderId: "104829053653",
    appId: "1:104829053653:web:020cccf157c918a6ef905c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;