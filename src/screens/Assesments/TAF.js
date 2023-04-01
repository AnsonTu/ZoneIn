import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button, RadioButton } from "react-native-paper";
import CheckBox from "react-native-checkbox";
import TermsAndConditions from "./TermsScreen";
import Btn from "../../components/Btn";
import { darkGreen, green } from "../../components/Constants";
import { TextInput } from "react-native";
import { addPatientAssessment } from "../../helpers/query";
import { PieChart } from "react-native-chart-kit";
import { Table, Row, Rows } from "react-native-table-component";

const questions1 = [
  {
    id: 1,
    text: "1. Decoding",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 2,
    text: "2. Comprehension",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 3,
    text: "3. Fluency",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 4,
    text: "4. Handwriting",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 5,
    text: "5. Spelling",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 6,
    text: "6. Written syntax (sentence level) ",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 7,
    text: "7. Written composition (text level)",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 8,
    text: "8. Computation (accuracy)",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 9,
    text: "9. Computation (fluency)",

    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
  {
    id: 10,
    text: "10. Applied mathematical reasoning",
    options: [
      { text: "Well below grade level" },
      { text: "Somewhat below grade level" },
      { text: "At grade level" },
      { text: "Somewhat above grade level" },
      { text: "Well above grade level" },
      { text: "N/A" },
    ],
  },
];

const questions2 = [
  {
    id: 1,
    text: "1. Following directions/instructions",

    options: [
      { text: "Well below average" },
      { text: "Below average" },
      { text: "Average" },
      { text: "Above average" },
      { text: "Well above average" },
      { text: "N/A" },
    ],
  },
  {
    id: 2,
    text: "2. Organizational skills",

    options: [
      { text: "Well below average" },
      { text: "Below average" },
      { text: "Average" },
      { text: "Above average" },
      { text: "Well above average" },
      { text: "N/A" },
    ],
  },
  {
    id: 3,
    text: "3. Assignment completion",
    options: [
      { text: "Well below average" },
      { text: "Below average" },
      { text: "Average" },
      { text: "Above average" },
      { text: "Well above average" },
      { text: "N/A" },
    ],
  },
  {
    id: 4,
    text: "4. Peer relationships",
    options: [
      { text: "Well below average" },
      { text: "Below average" },
      { text: "Average" },
      { text: "Above average" },
      { text: "Well above average" },
      { text: "N/A" },
    ],
  },
  {
    id: 5,
    text: "5. Classroom behaviour",
    options: [
      { text: "Well below average" },
      { text: "Below average" },
      { text: "Average" },
      { text: "Above average" },
      { text: "Well above average" },
      { text: "N/A" },
    ],
  },
];
const questions3 = [
  {
    id: 1,
    text: "1. Strengths: What are this student’s strengths?",
  },
  {
    id: 2,
    text: "2. Education Plan: If this student has an education plan, what are the recommendations? Do they work?",
  },
  {
    id: 3,
    text: "3. Accommodations: What accommodations are in place? Are they effective?",
  },
  {
    id: 4,
    text: "4. Class Instructions: How well does this student handle large-group instruction? Do they follow instructions well? Can they wait for a turn to respond? Would they stand out from same-sex peers? In what way?",
  },
  {
    id: 5,
    text: "5. Individual Seatwork: How well does this student self-regulate attention and behaviour during assignments to be completed as individual seat work? Is the work generally completed? Would they stand out from same-sex peers? In what way?",
  },
  {
    id: 6,
    text: "6. Transitions: How does this student handle transitions such as going in and out for recess, changing classes or changing activities? Do they follow routines well? What amount of supervision or reminders do they need?    ",
  },
  {
    id: 7,
    text: "7. Impact on peer relations: How does this student get along with others? Does this student have friends that seek them out? Do they initiate play successfully?",
  },
  {
    id: 8,
    text: "8. Conflict and Aggression: Is this student often in conflict with adults or peers? How do they resolve arguments? Is the student verbally aggressive? Are they the target of verbal or physical aggression by peers?    ",
  },
  {
    id: 9,
    text: "9. Academic Abilities: We would like to know about this student's general abilities and academic skills. Does this student appear to learn at a similar rate to others? Does this student appear to have specific weaknesses in learning?    ",
  },
  {
    id: 10,
    text: "10. Self-Help Skills: Independence, problem solving, activities of daily living    ",
  },
];

const questions4 = [
  {
    id: 1,
    text: "11. Motor Skills (gross/fine): Does this student have problems with gym, sports, writing? If so, please describe.",
  },
  {
    id: 2,
    text: "12. Written Output: Does this student have problems putting ideas down in writing? If so, please describe",
  },
  {
    id: 3,
    text: "13. Primary Areas of Concern: What are your major areas of concern/worry for this student? How long has this/these been a concern for you?",
  },
  {
    id: 4,
    text: "14. Impact on Student: To what extent are these difficulties for the student upsetting or distressing to the student, to you and/or the other students?",
  },
  {
    id: 5,
    text: "15. Impact on the class: Does this student make it difficult for you to teach the class?",
  },
  {
    id: 6,
    text: "16. Medications: If this student is on medication, is there anything you would like to highlight about the differences when they are on medication compared to off?",
  },
  {
    id: 7,
    text: "17. Parent Involvement: What has been the involvement of the parent(s)/guardians?",
  },
  {
    id: 8,
    text: "18. Are the problems with attention and/or hyperactivity interfering with the student's learning? Peer relationships? ",
  },
  {
    id: 9,
    text: "19. Has the student had any problems with homework or handing in assignments? ",
  },
  {
    id: 10,
    text: "20. Is there anything else you would like us to know? If you feel the need to contact the student's clinician during this assessment, please feel free to do so  ",
  },
];

const TAFQuizScreen = (props) => {
  const { patientInfo } = props.route.params;

  const [page, setPage] = useState(0);
  const [answers1, setAnswers1] = useState(Array(questions1.length).fill(null));
  const [answers2, setAnswers2] = useState(Array(questions2.length).fill(null));
  const [answers3, setAnswers3] = useState(Array(questions3.length).fill(null));
  const [answers4, setAnswers4] = useState(Array(questions4.length).fill(null));
  const [scores, setScores] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  let noSym = 0;
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleAnswer = (index, value) => {
    if (page === 0) {
      const newAnswers = [...answers1];
      newAnswers[index] = value;
      setAnswers1(newAnswers);
    } else if (page === 1) {
      const newAnswers = [...answers2];
      newAnswers[index] = value;
      setAnswers2(newAnswers);
    }
  };

  const handleAnswer1 = (index, text) => {
    if (page === 2) {
      const newAnswers = [...answers3];
      newAnswers[index] = text;
      setAnswers3(newAnswers);
    } else if (page === 3) {
      const newAnswers = [...answers4];
      newAnswers[index] = text;
      setAnswers4(newAnswers);
    }
  };

  const handleSubmit = async (patientInfo) => {
    setIsLoading(true);
    const formattedTextInputs = [
      {
        question: 1,
        response: answers3[0],
      },
      {
        question: 2,
        response: answers3[3],
      },
      {
        question: 3,
        response: answers3[4],
      },
      {
        question: 4,
        response: answers3[5],
      },
      {
        question: 5,
        response: answers3[6],
      },
      {
        question: 6,
        response: answers3[7],
      },
      {
        question: 7,
        response: answers3[8],
      },
      {
        question: 8,
        response: answers3[9],
      },
      {
        question: 9,
        response: answers4[0],
      },
      {
        question: 10,
        response: answers4[1],
      },
      {
        question: 11,
        response: answers4[2],
      },
      {
        question: 12,
        response: answers4[3],
      },
      {
        question: 13,
        response: answers4[4],
      },
      {
        question: 14,
        response: answers4[7],
      },
      {
        question: 15,
        response: answers4[8],
      },
      {
        question: 16,
        response: answers4[9],
      },
    ];

    await fetch("https://ZoneIn.sarahlong4.repl.co/assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedTextInputs),
    })
      .then((res) => res.json())
      .then((res) => {
        setScores(res[0]);
        console.log(res[0]);
        noSym = res[0].inattentive + res[0].hyperactive === 0 ? 1 : 0;

        addPatientAssessment(patientInfo, "TAF", res, [
          ...answers1,
          ...answers2,
          ...answers3,
          ...answers4,
        ]);
      })
      .catch((e) => console.error(e));
    setIsLoading(false);
    setPage(page + 1);
  };

  const canSubmit =
    answers1.every((answer) => answer !== null) &&
    answers2.every((answer) => answer !== null) &&
    answers3.every((answer) => answer !== null) &&
    answers4.every((answer) => answer !== null);

  function handleAgree(checked) {
    if (checked) {
      setTermsAgreed(true);
    }
  }
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  console.log("Scores", scores);

  const data = [
    {
      name: "Inattentive",
      score: scores.inattentive,
      color:
        scores.inattentive === 0 && scores.hyperactive === 0
          ? "#007aff"
          : darkGreen,
      legendFontSize: 10,
      legendFontColor: "#7F7F7F",
    },
    {
      name: "Hyperactive",
      score: scores.hyperactive,
      color:
        scores.inattentive === 0 && scores.hyperactive === 0
          ? "#007aff"
          : green,

      legendFontSize: 10,
      legendFontColor: "#7F7F7F",
    },
  ];

  const tableWidthArr = [182, 150];
  if (!termsAgreed) {
    return <TermsAndConditions onAgree={handleAgree} />;
  } else if (!quizStarted) {
    return (
      <ScrollView style={styles.container}>
        {page === 0 && (
          <View>
            <Text style={styles.SectionHeader}>
              Section 1: Academic Performance(Reading, Writing and Mathematics)
            </Text>
            {questions1
              .slice(page * 10, (page + 1) * 10)
              .map((question, index) => (
                <View key={question.id} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  {question.options.map((option, optionIndex) => (
                    <View key={optionIndex} style={styles.optionContainer}>
                      <RadioButton
                        value={optionIndex}
                        status={
                          answers1[index] === optionIndex
                            ? "checked"
                            : "unchecked"
                        }
                        onPress={() => handleAnswer(index, optionIndex)}
                      />
                      <Text style={styles.optionText}>{option.text}</Text>
                    </View>
                  ))}
                </View>
              ))}
          </View>
        )}
        {page === 1 && (
          <View>
            <Text style={styles.SectionHeader}>
              Section 2: Classroom Performance
            </Text>
            {questions2
              .slice((page - 1) * 10, page * 10)
              .map((question, index) => (
                <View key={question.id} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  {question.options.map((option, optionIndex) => (
                    <View key={optionIndex} style={styles.optionContainer}>
                      <RadioButton
                        value={optionIndex}
                        status={
                          answers2[index] === optionIndex
                            ? "checked"
                            : "unchecked"
                        }
                        onPress={() => handleAnswer(index, optionIndex)}
                      />
                      <Text style={styles.optionText}>{option.text}</Text>
                    </View>
                  ))}
                </View>
              ))}
          </View>
        )}
        {page === 2 && (
          <View>
            <Text style={styles.SectionHeader}>Section 3: TAF</Text>
            {questions3
              .slice((page - 2) * 10, page * 10)
              .map((question, index) => (
                <View key={question.id} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  <TextInput
                    style={styles.textInput}
                    value={answers3[index] || ""}
                    onChangeText={(text) => handleAnswer1(index, text)}
                  />
                </View>
              ))}
          </View>
        )}
        {page === 3 && (
          <View>
            <Text style={styles.SectionHeader}>Section 3 - Part 2: TAF</Text>
            {questions4
              .slice((page - 3) * 10, page * 10)
              .map((question, index) => (
                <View key={question.id} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  <TextInput
                    style={styles.textInput}
                    value={answers4[index] || ""}
                    onChangeText={(text) => handleAnswer1(index, text)}
                  />
                </View>
              ))}
          </View>
        )}

        <View style={styles.navigationContainer}>
          {page > 0 && page < 4 && (
            <TouchableOpacity style={styles.button} onPress={handlePrev}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
          )}
          {page < 3 && (
            <TouchableOpacity
              style={[styles.button, styles.rightButton]}
              onPress={handleNext}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
          {page === 3 && (
            <TouchableOpacity
              style={[styles.button, !canSubmit && styles.disabledButton]}
              onPress={() => handleSubmit(patientInfo)}
              disabled={!canSubmit || isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? "Processing..." : "Submit"}
              </Text>
            </TouchableOpacity>
          )}
          {page === 4 && (
            <View style={styles.container}>
              <ScrollView>
                <Text style={styles.header}>Results Page</Text>

                <View style={styles.chartContainer}>
                  <PieChart
                    data={data}
                    width={screenWidth}
                    height={180}
                    chartConfig={chartConfig}
                    accessor={"score"}
                    backgroundColor={"transparent"}
                    paddingLeft={"20"}
                    center={[10, 10]}
                  />
                </View>
                <View style={styles.table}>
                  <Table
                    borderStyle={{ borderWidth: 2, borderColor: darkGreen }}
                  >
                    <Row
                      data={["Name", "Score"]}
                      widthArr={tableWidthArr}
                      textStyle={[styles.tableHeader, styles.headerText]}
                    />
                    <Rows
                      data={data.map((item) => Object.values(item))}
                      widthArr={tableWidthArr}
                      textStyle={styles.cellText}
                    />
                  </Table>
                </View>
                <TouchableOpacity
                  style={styles.buttonNav}
                  onPress={() => props.navigation.navigate("Dashboard")}
                >
                  <Text style={styles.buttonText}>Go to Dashboard</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
    width: "100%",
    height: 100,
    fontFamily: "Open Sans",
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    fontFamily: "Open Sans",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  SectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  optionText: {
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "300",
    fontFamily: "Open Sans",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingBottom: 100,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
  table: {
    paddingTop: 50,
  },

  tableHeader: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    paddingVertical: 10,
    backgroundColor: "#00bcd4",
  },
  headerText: {
    margin: 6,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#7F7F7F",
  },
  cellText: {
    margin: 6,
    fontSize: 16,
    textAlign: "center",
  },
  chartContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  chart: {
    borderRadius: 10,
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
    flexDirection: "row",
    width: "38%",
    backgroundColor: green,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#BFDCE5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonNav: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: green,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#BFDCE5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 30,
  },
  buttonText: {
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Open Sans",
  },
  disabledButton: {
    backgroundColor: green, // change the background color for disabled button
    borderColor: "#D3D3D3", // change the border color for disabled button
  },
});
export default TAFQuizScreen;
