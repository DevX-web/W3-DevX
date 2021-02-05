import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBjUvhGPjZuQvvXMqQ8vR5CsPjXmsGmRnA',
  authDomain: 'apscript-d77eb.firebaseapp.com',
  projectId: 'apscript-d77eb',
  storageBucket: 'apscript-d77eb.appspot.com',
  messagingSenderId: '688487857543',
  appId: '1:688487857543:web:51c10a0d20606f418b2722',
  measurementId: 'G-P4TDWC5DTY',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebaseApp };
