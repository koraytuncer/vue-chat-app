import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyA7tfoarZEmSzJlJnpGfKWx_4nN4F_2PHc",
    authDomain: "blog-vue3-9ddc9.firebaseapp.com",
    projectId: "blog-vue3-9ddc9",
    storageBucket: "blog-vue3-9ddc9.appspot.com",
    messagingSenderId: "316187674437",
    appId: "1:316187674437:web:92750af0b35e54d109202c"
  };


  firebase.initializeApp(firebaseConfig)
  
  const projectAuth = firebase.auth()
  const projectFireStore = firebase.firestore()
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFireStore,projectAuth,timeStamp}