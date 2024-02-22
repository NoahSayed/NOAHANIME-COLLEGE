import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXhi0NBxC5JzHQ1wG35mQhgsg79g0lKis",
  authDomain: "noahanime-fba6e.firebaseapp.com",
  projectId: "noahanime-fba6e",
  storageBucket: "noahanime-fba6e.appspot.com",
  messagingSenderId: "570210440468",
  appId: "1:570210440468:web:59a125d9f185d9e6f9de01",
  measurementId: "G-Y4BNPNRJS5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
