import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { RadioButton, Card } from "react-native-paper";
import TermsAndConditions from "./TermsScreen";
import { addPatientAssessment } from "../../helpers/query";
import ProgressBar from "react-native-progress/Bar";
import { darkGreen, green } from "../../components/Constants";
const questions1 = [
  {
    id: 1,
    text: "1. Often fails to give close attention to details or makes careless mistakes in schoolwork or tasks",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 2,
    text: "2. Often has difficulty sustaining attention in tasks or play activities.",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 3,
    text: "3. Often does not seem to listen when spoken to directly",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 4,
    text: "4. Often does not follow through on instructions and fails to finish schoolwork, chores, or duties",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 5,
    text: "5. Often has difficulty organizing tasks and activities",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 6,
    text: "6. Often avoids, dislikes, or reluctantly engages in tasks requiring sustained mental effort.",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 7,
    text: "7. Often loses things necessary for activities (e.g., toys, school assignments, pencils, or books ",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 8,
    text: "8. Often is distracted by extraneous stimuli",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 9,
    text: "9. Often is forgetful in daily activities",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
];

const questions2 = [
  {
    id: 1,
    text: "10. Often fidgets with hands or feet or squirms in seat",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 2,
    text: "11. Often leaves seat in classroom or in other situations in which remaining seated is expected ",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 3,
    text: "12. Often runs about or climbs excessively in situations which it is inappropriate",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 4,
    text: "13. Often has difficulty playing or engaging in leisure activities quietly",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 5,
    text: "14. Often is “on the go” or often acts as if “driven by a motor”",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 6,
    text: "15. Often talks excessively",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 7,
    text: "16. Often blurts out answers before questions have been completed ",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 8,
    text: "17. Often has difficulty awaiting turn",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 9,
    text: "18. Often interrupts or intrudes on others (e.g. butts into conversations/ games)",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
];

const questions3 = [
  {
    id: 1,
    text: "19. Often loses temper",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 2,
    text: "20. Often argues with adults ",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 3,
    text: "21. Often runs about or climbs excessively in situations which it is inappropriate",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 4,
    text: "22. Often has difficulty playing or engaging in leisure activities quietly",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 5,
    text: "23. Often is “on the go” or often acts as if “driven by a motor”",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 6,
    text: "24. Often talks excessively",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 7,
    text: "25. Often blurts out answers before questions have been completed ",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
  {
    id: 8,
    text: "26. Often has difficulty awaiting turn",

    options: [
      { text: "Not at all", score: 0 },
      { text: "Just a little bit", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Very much", score: 3 },
    ],
  },
];

const SNAPQuizScreen = (props) => {
  const { userId, patientInfo } = props.route.params;

  const [page, setPage] = useState(0);
  let [Score1, setScore1] = useState(0);
  let [Score2, setScore2] = useState(0);
  let [Score3, setScore3] = useState(0);
  const [answers1, setAnswers1] = useState(Array(questions1.length).fill(null));
  const [answers2, setAnswers2] = useState(Array(questions2.length).fill(null));
  const [answers3, setAnswers3] = useState(Array(questions3.length).fill(null));
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const totalQuestions =
    questions1.length + questions2.length + questions3.length;
  const answeredQuestions =
    answers1.filter((answer) => answer !== null).length +
    answers2.filter((answer) => answer !== null).length +
    answers3.filter((answer) => answer !== null).length;
  const progress = answeredQuestions / totalQuestions;

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
    } else {
      const newAnswers = [...answers3];
      newAnswers[index] = value;
      setAnswers3(newAnswers);
    }
  };

  const calculateScore1 = () => {
    for (let i = 0; i < answers1.length; i++) {
      const answerIndex = answers1[i];
      if (answerIndex !== null) {
        const selectedOption1 = questions1[i].options[answerIndex];
        Score1 += selectedOption1.score;
      }
    }
    setScore1(Score1);
    if (Score1 < 13) {
      return "Symptoms not clinically significant";
    } else if (Score1 < 18) {
      return "Mild symptoms";
    } else if (Score1 < 23) {
      return "Moderate symptoms";
    } else {
      return "Severe symptoms";
    }
  };

  const calculateScore2 = () => {
    for (let i = 0; i < answers2.length; i++) {
      const answerIndex2 = answers2[i];
      if (answerIndex2 !== null) {
        const selectedOption2 = questions2[i].options[answerIndex2];
        Score2 += selectedOption2.score;
      }
    }
    setScore2(Score2);
    if (Score2 < 8) {
      return "Symptoms not clinically significant";
    } else if (Score2 < 14) {
      return "Mild symptoms";
    } else if (Score2 < 19) {
      return "Moderate symptoms";
    } else {
      return "Severe symptoms";
    }
  };

  const calculateScore3 = () => {
    for (let i = 0; i < answers3.length; i++) {
      const answerIndex = answers3[i];
      if (answerIndex !== null) {
        const selectedOption3 = questions3[i].options[answerIndex];
        Score3 += selectedOption3.score;
      }
    }
    setScore3(Score3);
    if (Score3 > 8) {
      return "ODD present";
    } else {
      return "ODD not present";
    }
  };

  const handleSubmit = async (patientInfo) => {
    setPage(page + 1);
    const diagnosis1 = calculateScore1();
    const diagnosis2 = calculateScore2();
    const diagnosis3 = calculateScore3();

    const scores = [
      {
        title: "Inattention Subset",
        maxScore: 27,
        diagnosis: diagnosis1,
        score: Score1,
        id: 1,
      },
      {
        title: "Hyperactivity/Impulsivity Subset",
        maxScore: 27,
        diagnosis: diagnosis2,
        score: Score2,
        id: 2,
      },
      {
        title: "ODD (Oppositional Defiant Disorder) Subset",
        maxScore: 24,
        diagnosis: diagnosis3,
        score: Score3,
        id: 3,
      },
    ];

    props.navigation.navigate("ResultsPage", { scores });
    await addPatientAssessment(
      userId,
      patientInfo,
      "SNAPIV",
      [calculateScore1(), calculateScore2(), calculateScore3()],
      [...answers1, ...answers2, ...answers3]
    );
  };

  const canSubmit =
    answers1.every((answer) => answer !== null) &&
    answers2.every((answer) => answer !== null) &&
    answers3.every((answer) => answer !== null);

  function handleAgree(checked) {
    if (checked) {
      setTermsAgreed(true);
    }
  }

  if (!termsAgreed) {
    return <TermsAndConditions onAgree={handleAgree} />;
  } else if (!quizStarted) {
    return (
      <ScrollView style={styles.container}>
        {page === 0 && (
          <View>
            <Text style={styles.SectionHeader}>
              Section A: Inattention Subset
            </Text>
            {questions1
              .slice(page * 9, (page + 1) * 9)
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
              Section B: Hyperactivity/Impulsivity Subset
            </Text>
            {questions2
              .slice((page - 1) * 9, page * 9)
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
            <Text style={styles.SectionHeader}>
              Section C: ODD (Oppositional Defiant Disorder) Subset
            </Text>
            {questions3
              .slice((page - 2) * 10, page * 10)
              .map((question, index) => (
                <View key={question.id} style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question.text}</Text>
                  {question.options.map((option, optionIndex) => (
                    <View key={optionIndex} style={styles.optionContainer}>
                      <RadioButton
                        value={optionIndex}
                        status={
                          answers3[index] === optionIndex
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
        <View style={styles.navigationContainerwithProgressBar}>
          <View style={styles.navigationContainer}>
            {page !== 0 && page !== 3 && (
              <TouchableOpacity style={styles.button} onPress={handlePrev}>
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            )}
            {page !== 2 && page !== 3 && (
              <TouchableOpacity
                style={[styles.button, styles.rightButton]}
                onPress={handleNext}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
            {page === 2 && (
              <TouchableOpacity
                style={[styles.button, !canSubmit && styles.disabledButton]}
                onPress={() => handleSubmit(patientInfo)}
                disabled={!canSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
          <ProgressBar
            style={{ backgroundColor: "white", color: green }}
            progress={progress}
            width={null}
          />
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },
  cardContainer: {
    padding: 15,
  },
  questionContainer: {
    marginBottom: 16,
  },
  SectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "300",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingBottom: 20,
  },
  navigationContainerwithProgressBar: {
    paddingBottom: 100,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
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
    width: "30%",
    backgroundColor: green,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#BFDCE5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#686A6C",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#D3D3D3", // change the background color for disabled button
    borderColor: "#D3D3D3", // change the border color for disabled button
  },
});
export default SNAPQuizScreen;
