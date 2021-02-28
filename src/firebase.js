import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDIMopp8cQS-RZFIohwkoI47CAK7EM6pBQ",
    authDomain: "api-english-reactjs.firebaseapp.com",
    projectId: "api-english-reactjs",
    storageBucket: "api-english-reactjs.appspot.com",
    messagingSenderId: "643218753157",
    appId: "1:643218753157:web:0581d764ebdf6fc9388bec",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// export
export const db = fb.firestore();

