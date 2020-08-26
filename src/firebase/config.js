import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCphUOYNI4n5U7uRLeS7v8C4JD81G6_Uc8",
  authDomain: "firegram-b9cc6.firebaseapp.com",
  databaseURL: "https://firegram-b9cc6.firebaseio.com",
  projectId: "firegram-b9cc6",
  storageBucket: "firegram-b9cc6.appspot.com",
  messagingSenderId: "545960918379",
  appId: "1:545960918379:web:efa5bbae1d74d1dc2f602e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
