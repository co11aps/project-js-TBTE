import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { firebaseConfig } from './config';
import refs from './refs';

initializeApp(firebaseConfig);

const auth = getAuth();

// if (window.location.hostname === 'localhost') {
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099');
// }

const emailInput = document.getElementById('email');
const userNameInput = document.getElementById('user-name');
const passwordInput = document.getElementById('password');
// const signInButton = document.getElementById('quickstart-sign-in');
// const signUpButton = document.getElementById('quickstart-sign-up');
const passwordResetButton = document.getElementById(
  'quickstart-password-reset'
);

// const verifyEmailButton = document.getElementById('quickstart-verify-email');
// const signInStatus = document.getElementById('quickstart-sign-in-status');
// const accountDetails = document.getElementById('quickstart-account-details');

/**
 * Handles the sign in button press.
 */
export function toggleSignIn() {
  if (auth.currentUser) {
    signOut(auth);
  } else {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    signInWithEmailAndPassword(auth, email, password).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      refs.signInButton.disabled = false;
    });
  }
  refs.signInButton.disabled = true;
}

/**
 * Handles the sign up button press.
 */
export function handleSignUp() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const userName = userNameInput.value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  if (userName.length < 4) {
    alert('Please enter a User name.');
    return;
  }
  // Create user with email and pass.
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential =>
      updateProfile(userCredential.user, {
        displayName: userName,
      })
    )
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

/**
 * Sends an email verification to the user.
 */
// function sendVerificationEmailToUser() {
//   sendEmailVerification(auth.currentUser).then(function () {
//     // Email Verification sent!
//     alert('Email Verification Sent!');
//   });
// }

function sendPasswordReset() {
  const email = emailInput.value;
  sendPasswordResetEmail(auth, email)
    .then(function () {
      // Password Reset Email Sent!
      alert('Password Reset Email Sent!');
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
    });
}

// Listening for auth state changes.
onAuthStateChanged(auth, function (user) {
  // verifyEmailButton.disabled = true;
  if (user) {
    // User is signed in.
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    const providerData = user.providerData;
    // signInStatus.textContent = 'Signed in';
    refs.signInButton.textContent = 'Sign out';
    refs.headerSignInBtn.textContent = displayName;
    // accountDetails.textContent = JSON.stringify(user, null, '  ');
    // if (!emailVerified) {
    // verifyEmailButton.disabled = false;
    // }
  } else {
    // User is signed out.
    // signInStatus.textContent = 'Signed out';
    refs.headerSignInBtn.textContent = 'Sign in';
    refs.signInButton.textContent = 'Sign in';
    // accountDetails.textContent = 'null';
  }
  refs.signInButton.disabled = false;
});

// refs.signInButton.addEventListener('click', toggleSignIn, false);
// refs.signUpButton.addEventListener('click', handleSignUp, false);
// verifyEmailButton.addEventListener('click', sendVerificationEmailToUser, false);
passwordResetButton.addEventListener('click', sendPasswordReset, false);
