import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
  type Auth,
} from 'firebase/auth';
import { auth } from '../firebase/config';

// Sign Up
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Log In
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign in with Google
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Log Out
export const logout = () => {
  return signOut(auth);
};

// Auth State Change Listener
export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};