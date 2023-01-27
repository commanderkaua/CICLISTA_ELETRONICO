import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBQxGSTB6RHuLrne_Xqtr1VuH55ki2IWnI",
  authDomain: "ciclista-eletronico-8f29c.firebaseapp.com",
  projectId: "ciclista-eletronico-8f29c",
  storageBucket: "ciclista-eletronico-8f29c.appspot.com",
  messagingSenderId: "246327088561",
  appId: "1:246327088561:web:d9f923df576c6423d71990"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
