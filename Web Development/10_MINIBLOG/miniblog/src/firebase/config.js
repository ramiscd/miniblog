// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireBase } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9x9_gTOBhdikoNoAOZDyHAmmeo9NTXRw",
  authDomain: "miniblog-55e79.firebaseapp.com",
  projectId: "miniblog-55e79",
  storageBucket: "miniblog-55e79.appspot.com",
  messagingSenderId: "627506169028",
  appId: "1:627506169028:web:9dedba07d2f3af138e7591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializando banco de dados
const db = getFirestore(app);

export {db};