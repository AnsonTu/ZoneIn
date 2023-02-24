import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

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
  userId,
  firstName,
  lastName,
  email,
  phoneNumber,
  dateOfBirth
) => {
  console.log(
    documentId,
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth
  );
  const userRef = doc(db, "users", documentId);
  await updateDoc(userRef, {
    firstName,
    lastName,
    email,
  });
};

export { getUserInfo, updateUserInfo };
