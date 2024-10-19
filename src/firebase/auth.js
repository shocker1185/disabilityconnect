import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebaseConfig';  // Import the `auth` instance from firebaseConfig

// Register new user
export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered:', userCredential.user);
  } catch (error) {
    console.error('Error registering user:', error.message);
  }
};

// Login existing user
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
  } catch (error) {
    console.error('Error logging in user:', error.message);
  }
};

// Log out user
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
  } catch (error) {
    console.error('Error logging out:', error.message);
  }
};
