import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useIsFocused } from "@react-navigation/native";
import { auth } from "../../../firebaseConfig";
import {
  getUserInfo,
  getChildProfiles,
  addPatientReport,
} from "../../helpers/query";
import { green } from "../../components/Constants";

const CreateReport = (props) => {
  const isFocused = useIsFocused();
  const [patients, setPatients] = useState([]);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const onValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleFormSubmit = async () => {
    const formattedTextInputs = [
      {
        question: 1,
        response: question1,
      },
      {
        question: 2,
        response: question2,
      },
      {
        question: 3,
        response: question3,
      },
    ];
    setIsLoading(true);
    await fetch("https://ZoneIn.sarahlong4.repl.co/assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedTextInputs),
    })
      .then((res) => res.json())
      .then((res) => {
        addPatientReport(auth.currentUser.uid, selectedValue, res, [
          question1,
          question2,
          question3,
        ]);
        props.navigation.navigate("TAFQuizScreen", {
          score: {
            inattentive: res[0].inattentive,
            hyperactive: res[0].hyperactive,
          },
          pageNum: 4,
        });
      })
      .catch((e) => console.error(e));
    setIsLoading(false);
  };

  const onQuestion1Change = (question1) => {
    setQuestion1(question1);
  };

  const onQuestion2Change = (question2) => {
    setQuestion2(question2);
  };

  const onQuestion3Change = (question3) => {
    setQuestion3(question3);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 30,
            paddingTop: 50,
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
              style={{ color: "black" }}
              items={patients}
              placeholder={{ label: "Select Patient", value: null }}
              onValueChange={onValueChange}
              value={selectedValue}
            />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              Question 1: What was the setting/environment the child was in?
            </Text>
            <TextInput
              multiline
              numberOfLines={10}
              value={question1}
              onChangeText={onQuestion1Change}
              style={styles.textInput}
            />
            <Text style={styles.questionText}>
              Question 2: What did the child do?
            </Text>
            <TextInput
              multiline
              numberOfLines={10}
              value={question2}
              onChangeText={onQuestion2Change}
              style={styles.textInput}
            />
            <Text style={styles.questionText}>
              Question 3: What was the impact of the child’s actions?
            </Text>
            <TextInput
              multiline
              numberOfLines={10}
              value={question3}
              onChangeText={onQuestion3Change}
              style={styles.textInput}
            />
            <TouchableOpacity
              style={styles.button}
              disabled={isLoading || !selectedValue}
              onPress={handleFormSubmit}
            >
              <Text style={styles.buttonText}>
                {isLoading ? "Loading..." : "Submit"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 0, // remove border to avoid overlapping with box
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // add width and height to create a box
    width: 330,
    height: 100,
    paddingBottom: 20,
  },

  questionText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    marginTop: 10,
  },

  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingBottom: 100,
  },

  questionContainer: {
    marginTop: 18,
  },
  navigationButtonText: {
    paddingBottom: 50,
  },
  navigationButton: {
    paddingBottom: 50,
  },
  rightButton: {
    marginRight: 8,
    marginLeft: "auto",
  },
  button: {
    marginHorizontal: "35%",
    display: "flex",
    width: "50%",
    backgroundColor: green,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    padding: 10,

    marginTop: 20,
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CreateReport;
