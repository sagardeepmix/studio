
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as onFirebaseAuthStateChanged
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
  return signOut(auth);
};

export const onAuthStateChanged = (callback: any) => {
  return onFirebaseAuthStateChanged(auth, callback);
};
