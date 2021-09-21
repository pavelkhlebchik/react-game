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
class FireBase {
  constructor() {

    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off();
  }


  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref(`pokemons/${newKey}`).set(data).then(() => cb());    
  }
}


export default FireBase;
