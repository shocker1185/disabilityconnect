import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebaseConfig';  // Import the Firebase Auth instance from firebaseConfig

// Register new user with email and password
export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User registered successfully:', user);
    return user;  // Optionally return the registered user object
  } catch (error) {
    // Handle registration errors
    switch (error.code) {
      case 'auth/email-already-in-use':
        console.error('This email is already in use.');
        break;
      case 'auth/invalid-email':
        console.error('Invalid email format.');
        break;
      case 'auth/weak-password':
        console.error('Password is too weak. Passwords should be at least 6 characters long.');
        break;
      default:
        console.error('Error registering user:', error.message);
    }
    throw error;  // Re-throw the error if needed for further handling in the UI
  }
};

// Login existing user with email and password
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User logged in successfully:', user);
    return user;  // Optionally return the logged-in user object
  } catch (error) {
    // Handle login errors
    switch (error.code) {
      case 'auth/user-not-found':
        console.error('No user found with this email.');
        break;
      case 'auth/wrong-password':
        console.error('Incorrect password.');
        break;
      case 'auth/invalid-email':
        console.error('Invalid email format.');
        break;
      default:
        console.error('Error logging in user:', error.message);
    }
    throw error;  // Re-throw the error if needed for further handling in the UI
  }
};

// Log out the currently logged-in user
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Error logging out:', error.message);
  }
};
