import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBM4HFRTPhLS-d9UM0cAWxO8bjbjG1gllw",
  authDomain: "ecomm-store-8454d.firebaseapp.com",
  projectId: "ecomm-store-8454d",
  storageBucket: "ecomm-store-8454d.appspot.com",
  messagingSenderId: "494592617491",
  appId: "1:494592617491:web:510bb7bddc698a1b6f23e6",
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};

export { firestore, createUserProfileDocument, auth };
