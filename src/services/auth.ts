
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as onFirebaseAuthStateChanged
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
  return signOut(auth);
};

export const onAuthStateChanged = (callback) => {
  return onFirebaseAuthStateChanged(auth, callback);
};
