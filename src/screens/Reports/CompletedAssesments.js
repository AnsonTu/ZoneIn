import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { useIsFocused } from "@react-navigation/native";
import { auth } from "../../../firebaseConfig";
import {
  getUserInfo,
  getChildProfiles,
  getPatientAssessments,
} from "../../helpers/query";

const CompletedAssessments = (props) => {
  const patientId = props.route.params.selectedPatientId;

  const isFocused = useIsFocused();
  const [patients, setPatients] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(patientId);

  useEffect(() => {
    const getCurrentAccountInfo = async () => {
      let formattedProfiles = [];
      const userInfo = await getUserInfo(auth.currentUser.uid);
      const childProfiles = await getChildProfiles(userInfo.userId);
      for (let i = 0; i < childProfiles.length; i++) {
        formattedProfiles[i] = {
          docId: childProfiles[i].docId,
          id: childProfiles[i].firstName + childProfiles[i].lastName + i,
          firstName: childProfiles[i].firstName,
          lastName: childProfiles[i].lastName,
          sex: childProfiles[i].sex,
          dob: childProfiles[i].dateOfBirth,
          label: `${childProfiles[i].firstName} ${childProfiles[i].lastName}`,
          value: childProfiles[i].docId,
        };
      }
      setPatients(formattedProfiles);
    };
    if (isFocused) {
      getCurrentAccountInfo();
    }
  }, [isFocused]);

  const onValueChange = async (value) => {
    setSelectedPatient(value);
    if (!!selectedPatient) {
      const patientAssessments = await getPatientAssessments(selectedPatient);
      console.log(patientAssessments.length);
      setAssessments(patientAssessments);
    }
  };

  const formattedScores = (assessment) => {
    let scores = [];
    if (assessment.assessmentType === "SNAPIV") {
      let score1 = 0;
      let score2 = 0;
      let score3 = 0;
      for (let i = 0; i < 9; i++) {
        score1 += assessment.answers[i];
      }
      for (let i = 9; i < 18; i++) {
        score2 += assessment.answers[i];
      }
      for (let i = 18; i < 26; i++) {
        score3 += assessment.answers[i];
      }

      scores = [
        {
          diagnosis: assessment.scores[0],
          id: 1,
          maxScore: 27,
          score: score1,
          title: "Inattention Subset",
        },
        {
          diagnosis: assessment.scores[1],
          id: 2,
          maxScore: 27,
          score: score2,
          title: "Hyperactivity/Impulsivity Subset",
        },
        {
          diagnosis: assessment.scores[2],
          id: 3,
          maxScore: 24,
          score: score3,
          title: "ODD (Oppositional Defiant Disorder) Subset",
        },
      ];
      props.navigation.navigate("ResultsPage", { scores });
    } else if (assessment.assessmentType === "WFIRS") {
      let score1, score2, score3, score4, score5, score6;
      let countA = 0,
        countB = 0,
        countC = 0,
        countD = 0,
        countNA = 0,
        marked = 0,
        markedNA = 0,
        calc_Score = 0,
        Max_Score = 0;
      for (let i = 0; i < 10; i++) {
        if (assessment.answers[i] === 0) {
          countA++;
          marked++;
        } else if (assessment.answers[i] === 1) {
          countB++;
          marked++;
        } else if (assessment.answers[i] === 2) {
          countC++;
          marked++;
        } else if (assessment.answers[i] === 3) {
          countD++;
          marked++;
        } else if (assessment.answers[i] === 5) {
          countNA++;
          markedNA++;
        }
      }
      calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
      Max_Score = marked * 3;
      score1 = (calc_Score / Max_Score).toFixed(3);
      countA = 0;
      countB = 0;
      countC = 0;
      countD = 0;
      countNA = 0;
      marked = 0;
      markedNA = 0;
      calc_Score = 0;
      Max_Score = 0;
      for (let i = 10; i < 20; i++) {
        if (assessment.answers[i] === 0) {
          countA++;
          marked++;
        } else if (assessment.answers[i] === 1) {
          countB++;
          marked++;
        } else if (assessment.answers[i] === 2) {
          countC++;
          marked++;
        } else if (assessment.answers[i] === 3) {
          countD++;
          marked++;
        } else if (assessment.answers[i] === 5) {
          countNA++;
          markedNA++;
        }
      }
      calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
      Max_Score = marked * 3;
      score2 = (calc_Score / Max_Score).toFixed(3);
      countA = 0;
      countB = 0;
      countC = 0;
      countD = 0;
      countNA = 0;
      marked = 0;
      markedNA = 0;
      calc_Score = 0;
      Max_Score = 0;
      for (let i = 20; i < 30; i++) {
        if (assessment.answers[i] === 0) {
          countA++;
          marked++;
        } else if (assessment.answers[i] === 1) {
          countB++;
          marked++;
        } else if (assessment.answers[i] === 2) {
          countC++;
          marked++;
        } else if (assessment.answers[i] === 3) {
          countD++;
          marked++;
        } else if (assessment.answers[i] === 5) {
          countNA++;
          markedNA++;
        }
      }
      calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
      Max_Score = marked * 3;
      score3 = (calc_Score / Max_Score).toFixed(3);
      countA = 0;
      countB = 0;
      countC = 0;
      countD = 0;
      countNA = 0;
      marked = 0;
      markedNA = 0;
      calc_Score = 0;
      Max_Score = 0;
      for (let i = 30; i < 33; i++) {
        if (assessment.answers[i] === 0) {
          countA++;
          marked++;
        } else if (assessment.answers[i] === 1) {
          countB++;
          marked++;
        } else if (assessment.answers[i] === 2) {
          countC++;
          marked++;
        } else if (assessment.answers[i] === 3) {
          countD++;
          marked++;
        } else if (assessment.answers[i] === 5) {
          countNA++;
          markedNA++;
        }
      }
      calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
      Max_Score = marked * 3;
      score4 = (calc_Score / Max_Score).toFixed(3);
      countA = 0;
      countB = 0;
      countC = 0;
      countD = 0;
      countNA = 0;
      marked = 0;
      markedNA = 0;
      calc_Score = 0;
      Max_Score = 0;
      for (let i = 33; i < 40; i++) {
        if (assessment.answers[i] === 0) {
          countA++;
          marked++;
        } else if (assessment.answers[i] === 1) {
          countB++;
          marked++;
        } else if (assessment.answers[i] === 2) {
          countC++;
          marked++;
        } else if (assessment.answers[i] === 3) {
          countD++;
          marked++;
        } else if (assessment.answers[i] === 5) {
          countNA++;
          markedNA++;
        }
      }
      calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
      Max_Score = marked * 3;
      score5 = (calc_Score / Max_Score).toFixed(3);
      countA = 0;
      countB = 0;
      countC = 0;
      countD = 0;
      countNA = 0;
      marked = 0;
      markedNA = 0;
      calc_Score = 0;
      Max_Score = 0;
      for (let i = 40; i < 50; i++) {
        if (assessment.answers[i] === 0) {
          countA++;
          marked++;
        } else if (assessment.answers[i] === 1) {
          countB++;
          marked++;
        } else if (assessment.answers[i] === 2) {
          countC++;
          marked++;
        } else if (assessment.answers[i] === 3) {
          countD++;
          marked++;
        } else if (assessment.answers[i] === 5) {
          countNA++;
          markedNA++;
        }
      }
      calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
      Max_Score = marked * 3;
      score6 = (calc_Score / Max_Score).toFixed(3);
      scores = [
        {
          title: "Section A: Family",
          maxScore: 27,
          diagnosis: score1,
          score: score1,
          id: 1,
        },
        {
          title: "Section B: School",
          maxScore: 27,
          diagnosis: score2,
          score: score2,
          id: 2,
        },
        {
          title: "Section C: Life Skills",
          maxScore: 27,
          diagnosis: score3,
          score: score3,
          id: 3,
        },
        {
          title: "Section D: Child’s Self-Concept",
          maxScore: 27,
          diagnosis: score4,
          score: score4,
          id: 4,
        },
        {
          title: "Section E: Social Activities",
          maxScore: 27,
          diagnosis: score5,
          score: score5,
          id: 5,
        },
        {
          title: "Section F: Risky Activities",
          maxScore: 27,
          diagnosis: score6,
          score: score6,
          id: 6,
        },
      ];
      props.navigation.navigate("ResultsPage", { scores });
    } else if (assessment.assessmentType === "TAF") {
      props.navigation.navigate("TAFQuizScreen", {
        score: {
          inattentive: assessment.scores[0].inattentive,
          hyperactive: assessment.scores[0].hyperactive,
        },
        pageNum: 4,
      });
    } else {
      scores = [{ id: 1, score: 4, maxScore: 10, title: "s", diagnosis: "rt" }];
      props.navigation.navigate("ResultsPage", { scores });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 10,
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              width: 150,
            }}
          >
            <RNPickerSelect
              style={{
                paddingHorizontal: 20,
                fontSize: 20,
                height: "45%",
                width: "78%",
                backgroundColor: "rgb(220,220, 220)",
                marginVertical: 20,
                marginBottom: 10,
              }}
              items={patients}
              placeholder={{
                label: "Select Patient",
                value: null,
              }}
              onValueChange={onValueChange}
              value={selectedPatient}
            />
          </View>
          <View style={styles.assessmentsContainer}>
            {assessments.map((assessment, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => formattedScores(assessment)}
              >
                <View style={styles.assessment}>
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={40}
                    color="#83C5BE"
                  />
                  <Text style={styles.assessmentName}>
                    {assessment.assessmentType}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingTop: 30,

    paddingBottom: 20,
  },
  assessmentsContainer: {
    paddingTop: 30,
    width: "100%",
  },
  assessment: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  assessmentName: {
    marginLeft: 20,
    fontSize: 18,
    color: "#333",
  },
});

export default CompletedAssessments;
