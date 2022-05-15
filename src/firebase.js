import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC0KRsFAbHGLJ0vnHunxPaCk82PTaTYdLQ',
  authDomain: 'disney-plus-clone-fef52.firebaseapp.com',
  projectId: 'disney-plus-clone-fef52',
  storageBucket: 'disney-plus-clone-fef52.appspot.com',
  messagingSenderId: '804755876621',
  appId: '1:804755876621:web:422f2f8172e1d93f795e44',
  measurementId: 'G-MJYLBNG2M1',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firebaseStorage = firebase.storage();

export { auth, provider, firebaseStorage };
export default db;
