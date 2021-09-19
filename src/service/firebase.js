import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDkflO_HsmuWMXHjqoedhZaHtFcoDaO0Q4",
  authDomain: "pokemon-game-e75ce.firebaseapp.com",
  databaseURL: "https://pokemon-game-e75ce-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-e75ce",
  storageBucket: "pokemon-game-e75ce.appspot.com",
  messagingSenderId: "966053483247",
  appId: "1:966053483247:web:2d03743dd406f9ee0c011a"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;
