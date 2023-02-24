import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { updateEmail } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";

const getUserInfo = async (userId) => {
  let userInfo;
  const userQuery = query(
    collection(db, "users"),
    where("userId", "==", userId)
  );
  const querySnapshot = await getDocs(userQuery);
  querySnapshot.forEach((doc) => {
    userInfo = { docId: doc.id, ...doc.data() };
  });

  return userInfo;
};

const updateUserInfo = async (
  documentId,
  firstName,
  lastName,
  email,
  phoneNumber,
  dateOfBirth
) => {
  console.log(documentId, firstName, lastName, email, phoneNumber, dateOfBirth);
  const userRef = doc(db, "users", documentId);
  await updateDoc(userRef, {
    firstName,
    lastName,
    phoneNumber,
    dateOfBirth,
  });
  updateEmail(auth.currentUser, email)
    .then(() => {
      console.log("Email updated!");
    })
    .catch((err) => {
      console.error("Failed to update email: ", err);
    });
};

export { getUserInfo, updateUserInfo };
