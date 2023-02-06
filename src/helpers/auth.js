import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

const onUserSignIn = (email, password, navigate) => {
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
  email,
  password,
  confirmPassword,
  navigate
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
    .then(async (userCredential) => {
      try {
        await addDoc(collection(db, "users"), {
          userId: userCredential.user.uid,
          firstName: firstName,
          lastName: lastName,
          age: age,
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

const onUserSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Signed out");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error: ", errorMessage);
    });
};

export { onUserSignIn, onUserSignUp, onUserSignOut };
