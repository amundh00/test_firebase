import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBB5l8VXiz1yPHHh67KxhuMCI-IfUt1X6o",
    authDomain: "revedilter.firebaseapp.com",
    projectId: "revedilter",
    storageBucket: "revedilter.appspot.com",
    messagingSenderId: "89877137581",
    appId: "1:89877137581:web:2c02364e850c9c83c7de24"
  };


  //init firebase app
  initializeApp(firebaseConfig);

  // init services
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, 'opening_hours');

  // get collection data
  getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs);
    })