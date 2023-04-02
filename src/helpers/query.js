import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
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

const getChildProfiles = async (userId) => {
  let childProfiles = [];
  const childProfilesQuery = query(
    collection(db, "child-profiles"),
    where("parentProfileId", "==", userId)
  );
  const querySnapshot = await getDocs(childProfilesQuery);
  querySnapshot.forEach((doc) => {
    childProfiles = [...childProfiles, { ...doc.data(), docId: doc.id }];
  });

  return childProfiles;
};

const addChildProfile = async (
  documentId,
  firstName,
  lastName,
  sex,
  dateOfBirth
) => {
  console.log(documentId, firstName, lastName, sex, dateOfBirth);
  try {
    await addDoc(collection(db, "child-profiles"), {
      parentProfileId: documentId,
      firstName,
      lastName,
      sex,
      dateOfBirth,
    });
  } catch (e) {
    console.error("Error creating child profile: ", e);
  }
};

const updateChildProfile = async (childProfile) => {
  console.log(childProfile);
  const { docId, firstName, lastName, sex, dob } = childProfile;
  const childProfileRef = doc(db, "child-profiles", docId);
  await updateDoc(childProfileRef, {
    firstName,
    lastName,
    sex,
    dateOfBirth: dob,
  });
};

const deleteChildProfile = async (childProfileDocId) => {
  await deleteDoc(doc(db, "child-profiles", childProfileDocId))
    .then(() => console.log("Deleted profile"))
    .catch((e) => console.error("Error deleting profile: ", e));
};

const getPatientAssessments = async (patientId) => {
  let patientAssessments = [];
  const patientAssessmentsQuery = query(
    collection(db, "assessments"),
    where("patientId", "==", patientId)
  );
  const querySnapshot = await getDocs(patientAssessmentsQuery);
  querySnapshot.forEach((doc) => {
    patientAssessments = [
      ...patientAssessments,
      { ...doc.data(), docId: doc.id },
    ];
  });

  return patientAssessments;
};

const addPatientAssessment = async (
  userId,
  patient,
  assessmentType,
  assessmentScores,
  assessmentAnswers
) => {
  const scores = [];
  const answers = [];
  for (let i = 0; i < assessmentScores.length; i++) {
    scores[i] = assessmentScores[i];
  }
  for (let i = 0; i < assessmentAnswers.length; i++) {
    answers[i] = assessmentAnswers[i];
  }

  try {
    await addDoc(collection(db, "assessments"), {
      userId,
      patientId: patient.docId,
      firstName: patient.firstName,
      lastName: patient.lastName,
      assessmentType,
      scores,
      answers,
    });
  } catch (e) {
    console.error("Error creating child profile: ", e);
  }
};

export {
  getUserInfo,
  updateUserInfo,
  getChildProfiles,
  addChildProfile,
  updateChildProfile,
  deleteChildProfile,
  getPatientAssessments,
  addPatientAssessment,
};
