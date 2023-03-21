import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import TermsAndConditions from "./TermsScreen";
import ResultsPage from "./ResultsPage";
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

const SNAPQuizScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [answers1, setAnswers1] = useState(Array(questions1.length).fill(null));
  const [answers2, setAnswers2] = useState(Array(questions2.length).fill(null));
  const [answers3, setAnswers3] = useState(Array(questions3.length).fill(null));
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

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
    let Score1 = 0;
    for (let i = 0; i < answers1.length; i++) {
      const answerIndex = answers1[i];
      if (answerIndex !== null) {
        console.log("questions1:", questions1);
        console.log("i:", i);
        const selectedOption1 = questions1[i].options[answerIndex];
        Score1 += selectedOption1.score;
      }
    }

    return Score1;
  };

  const calculateScore2 = () => {
    let Score2 = 0;
    for (let i = 0; i < answers2.length; i++) {
      const answerIndex2 = answers2[i];
      if (answerIndex2 !== null) {
        console.log("questions2:", questions2);
        console.log("i:", i);
        const selectedOption2 = questions2[i].options[answerIndex2];
        Score2 += selectedOption2.score;
      }
    }
    return Score2;
  };

  const calculateScore3 = () => {
    let Score3 = 0;
    for (let i = 0; i < answers3.length; i++) {
      const answerIndex = answers3[i];
      if (answerIndex !== null) {
        console.log("questions1:", questions3);
        console.log("i:", i);
        const selectedOption3 = questions3[i].options[answerIndex];
        Score3 += selectedOption3.score;
      }
    }

    return Score3;
  };

  const handleSubmit = () => {
    setPage(page + 1);
    const score1 = calculateScore1();
    const score2 = calculateScore2();
    const score3 = calculateScore3();
    let diagnosis1 = "";
    let diagnosis2 = "";
    let diagnosis3 = "";
    let id1 = 1,
      id2 = 2,
      id3 = 3;
    if (score1 < 13) {
      diagnosis1 = "Symptoms not clinically significant";
    } else if (score1 < 18) {
      diagnosis1 = "Mild symptoms";
    } else if (score1 < 23) {
      diagnosis1 = "Moderate symptoms";
    } else {
      diagnosis1 = "Severe symptoms";
    }

    if (score2 < 8) {
      diagnosis2 = "Symptoms not clinically significant";
    } else if (score2 < 14) {
      diagnosis2 = "Mild symptoms";
    } else if (score2 < 19) {
      diagnosis2 = "Moderate symptoms";
    } else {
      diagnosis2 = "Severe symptoms";
    }

    if (score3 > 8) {
      diagnosis3 = "ODD present";
    } else {
      diagnosis3 = "ODD not present";
    }

    const scores = [
      {
        title: "Inattention Subset",
        score: score1,
        maxScore: 27,
        minScore: 0,
        diagnosis: diagnosis1,
        id: id1,
      },
      {
        title: "Hyperactivity/Impulsivity Subset",
        score: score2,
        maxScore: 27,
        minScore: 0,
        diagnosis: diagnosis2,
        id: id2,
      },
      {
        title: "ODD (Oppositional Defiant Disorder) Subset",
        score: score3,
        maxScore: 24,
        minScore: 0,
        diagnosis: diagnosis3,
        id: id3,
      },
    ];
    navigation.navigate("ResultsPage", { scores });
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
  const scores = {
    score1: calculateScore1(),
    score2: calculateScore2(),
    score3: calculateScore3(),
  };

  if (!termsAgreed) {
    return <TermsAndConditions onAgree={handleAgree} />;
  } else if (!quizStarted) {
    return (
      <ScrollView style={styles.container}>
        {page === 0 &&
          questions1.slice(page * 9, (page + 1) * 9).map((question, index) => (
            <View key={question.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{question.text}</Text>
              {question.options.map((option, optionIndex) => (
                <View key={optionIndex} style={styles.optionContainer}>
                  <RadioButton
                    value={optionIndex}
                    status={
                      answers1[index] === optionIndex ? "checked" : "unchecked"
                    }
                    onPress={() => handleAnswer(index, optionIndex)}
                  />
                  <Text style={styles.optionText}>{option.text}</Text>
                </View>
              ))}
            </View>
          ))}
        {page === 1 &&
          questions2.slice((page - 1) * 9, page * 9).map((question, index) => (
            <View key={question.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{question.text}</Text>
              {question.options.map((option, optionIndex) => (
                <View key={optionIndex} style={styles.optionContainer}>
                  <RadioButton
                    value={optionIndex}
                    status={
                      answers2[index] === optionIndex ? "checked" : "unchecked"
                    }
                    onPress={() => handleAnswer(index, optionIndex)}
                  />
                  <Text style={styles.optionText}>{option.text}</Text>
                </View>
              ))}
            </View>
          ))}
        {page === 2 &&
          questions3
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
              onPress={handleSubmit}
              disabled={!canSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
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
    backgroundColor: "#BFDCE5",
    borderWidth: 2,
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
