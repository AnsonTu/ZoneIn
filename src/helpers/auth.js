import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

const onUserSignin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const onUserSignup = (
  firstName,
  lastName,
  age,
  email,
  password,
  confirmPassword
) => {
  if (firstName === "" || lastName === "" || age === "") {
    console.error("Missing user details");
    return false;
  }
  if (email === "" || password === "") {
    console.error("Missing email or password");
    return false;
  }
  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    return false;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
      // ..
    });
};

export { onUserSignin, onUserSignup };
