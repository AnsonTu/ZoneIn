import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Button, RadioButton, Text } from "react-native-paper";

const questions = [
  {
    id: 1,
    text: "Question 1",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    id: 2,
    text: "Question 2",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    id: 3,
    text: "Question 3",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    id: 4,
    text: "Question 4",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    id: 5,
    text: "Question 5",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    id: 6,
    text: "Question 6",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  {
    id: 7,
    text: "Question 7",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  },
  // Add more questions here
];

const QuizScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // TODO: Submit answers to server or store locally
  };

  const canSubmit = answers.every((answer) => answer !== null);

  return (
    <ScrollView style={styles.container}>
      {questions.slice(page * 5, (page + 1) * 5).map((question, index) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.text}</Text>
          {question.options.map((option, optionIndex) => (
            <View key={optionIndex} style={styles.optionContainer}>
              <RadioButton
                value={optionIndex}
                status={
                  answers[page * 5 + index] === optionIndex
                    ? "checked"
                    : "unchecked"
                }
                onPress={() => handleAnswer(page * 5 + index, optionIndex)}
              />
              <Text style={styles.optionText}>{option}</Text>
            </View>
          ))}
        </View>
      ))}
      <View style={styles.buttonContainer}>
        {page > 0 && (
          <Button style={styles.button} mode="contained" onPress={handlePrev}>
            Previous
          </Button>
        )}
        {page < Math.floor(questions.length / 5) && (
          <Button style={styles.button} mode="contained" onPress={handleNext}>
            Next
          </Button>
        )}
        {page === Math.floor(questions.length / 5) && (
          <Button
            style={styles.button}
            mode="contained"
            disabled={!canSubmit}
            onPress={handleSubmit}
          >
            Submit
          </Button>
        )}
      </View>
    </ScrollView>
  );
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});
export default QuizScreen;
