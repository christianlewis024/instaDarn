import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDkn_CgudsKGIAH4scC9Al7UVUVCSMDqL4",
  authDomain: "instadarn.firebaseapp.com",
  databaseURL: "https://instadarn.firebaseio.com",
  projectId: "instadarn",
  storageBucket: "instadarn.appspot.com",
  messagingSenderId: "63149773396",
  appId: "1:63149773396:web:d0aa6cebd2e4a77c5113c1",
  measurementId: "G-9MQWZG3E4G",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
