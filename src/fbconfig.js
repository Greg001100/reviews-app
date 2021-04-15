import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB5AgSmE3o_fv1gp4Kfeg_FXOZaYIVMMBE",
    authDomain: "reviewsapp-94b53.firebaseapp.com",
    projectId: "reviewsapp-94b53",
    storageBucket: "reviewsapp-94b53.appspot.com",
    messagingSenderId: "800871678287",
    appId: "1:800871678287:web:ad4f59f7468b3b1d86053a",
    measurementId: "G-0WXF1LM4N2"
};

firebase.initializeApp(firebaseConfig)
export default firebase;
