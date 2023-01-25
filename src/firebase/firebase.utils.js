import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAaACaEGJ3hFzjh4RzCjkOBkKF03E_AOd4",
  authDomain: "dokan-90413.firebaseapp.com",
  databaseURL: "https://dokan-90413.firebaseio.com",
  projectId: "dokan-90413",
  storageBucket: "dokan-90413.appspot.com",
  messagingSenderId: "920146727461",
  appId: "1:920146727461:web:32ec7ded074e663d87a5cc",
  measurementId: "G-CH4GVXYQ4S"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
