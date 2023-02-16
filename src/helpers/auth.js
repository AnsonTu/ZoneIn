import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

const onUserSignIn = (email, password, navigate) => {
  if (email === "" || password === "") {
    console.error("Missing email or password");
    return false;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("Dashboard");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error:", errorMessage);
    });
};

const onUserSignUp = (
  firstName,
  lastName,
  age,
  role,
  email,
  password,
  confirmPassword,
  tacAccepted,
  navigate
) => {
  if (!tacAccepted) {
    console.error("Terms and Conditions must be accepted");
    return false;
  }
  if (firstName === "" || lastName === "" || age === "" || role === "") {
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
    .then(async (userCredential) => {
      try {
        await addDoc(collection(db, "users"), {
          userId: userCredential.user.uid,
          firstName: firstName,
          lastName: lastName,
          age: age,
          role: role,
        });
      } catch (e) {
        console.error("Error adding user variables: ", e);
      }
      navigate("Dashboard");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error:", errorMessage);
    });
};

const onUserSignOut = (navigate) => {
  signOut(auth)
    .then(() => {
      console.log("Signed out");
      navigate("Login");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error: ", errorMessage);
    });
};

const onUserResetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("RESET PASS SENT");
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error: ", errorMessage);
    });
};

export { onUserSignIn, onUserSignUp, onUserSignOut, onUserResetPassword };
