import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
});

const firestore = app.firestore();

export const database = {
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  formatDoc: (doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  },
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export const auth = app.auth();
export default app;
