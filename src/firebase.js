import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD9UL8bKe1nQb-yX_nG2WiLena_KPVn8YU',
  authDomain: 'whatsapp-clone-994cb.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-994cb.firebaseio.com',
  projectId: 'whatsapp-clone-994cb',
  storageBucket: 'whatsapp-clone-994cb.appspot.com',
  messagingSenderId: '721948039957',
  appId: '1:721948039957:web:6ca963fef90b68586d271c',
  measurementId: 'G-RF3ZNEZBWJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
