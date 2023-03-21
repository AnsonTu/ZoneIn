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
const questions1 = [
  {
    id: 1,
    text: "1. Having problems with brothers & sisters",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Causing problems between parents",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Takes time away from family members’ work or activities ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Causing fighting in the family ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Isolating the family from friends and social activities ",
    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Makes it hard for the family to have fun together",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Makes parenting difficult",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Makes it hard to give fair attention to all family members",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Provokes others to hit or scream at him/her ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 10,
    text: "10. Costs the family more money",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];
const questions2 = [
  {
    id: 1,
    text: "1. Having problems with brothers & sisters",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Causing problems between parents",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Takes time away from family members’ work or activities ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Causing fighting in the family ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Causes problems for the teacher in the classroom ",
    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Receives “time-out” or removal from the classroom ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Having problems in the school yard ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Receives detentions (during or after school)  ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Suspended or expelled from school  ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 10,
    text: "10. Misses classes or is late for school",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

const questions3 = [
  {
    id: 1,
    text: "1. Excessive use of TV, computer, or video games",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Keeping clean, brushing teeth, brushing hair, bathing, etc. ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Problems getting ready for school ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Problems getting ready for bed ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Problems with eating (picky eater, junk food)  ",
    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6.Problems with sleeping",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Gets hurt or injured ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Avoids exercise ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Needs more medical care ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 10,
    text: "10. Has trouble taking medication, getting needles or visiting the doctor/dentist    ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

const questions4 = [
  {
    id: 1,
    text: "1. My child feels bad about himself/herself",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. My child does not have enough fun ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. My child is not happy with his/her life",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

const questions5 = [
  {
    id: 1,
    text: "1. Being teased or bullied by other children ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Teases or bullies other children ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Problems getting along with other children ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Problems participating in after-school activities (sports, music, clubs) ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Problems making new friends ",
    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Problems keeping friends",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Difficulty with parties (not invited, avoids them, misbehaves) ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

const questions6 = [
  {
    id: 1,
    text: "1. Easily led by other children (peer pressure) ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Breaking or damaging things ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Doing things that are illegal ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Being involved with the police ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Smoking cigarettes  ",
    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Taking illegal drugs",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Doing dangerous things ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Causes injury to others ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Says mean or inappropriate things ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 10,
    text: "10. Sexually inappropriate behaviour    ",

    options: [
      { text: "Never or not at all", score: 0 },
      { text: "Sometimes or somewhat", score: 1 },
      { text: "Often or much", score: 2 },
      { text: "Very often or very much", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

const WFIRSQuizScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [answers1, setAnswers1] = useState(Array(questions1.length).fill(null));
  const [answers2, setAnswers2] = useState(Array(questions2.length).fill(null));
  const [answers3, setAnswers3] = useState(Array(questions3.length).fill(null));
  const [answers4, setAnswers4] = useState(Array(questions4.length).fill(null));
  const [answers5, setAnswers5] = useState(Array(questions5.length).fill(null));
  const [answers6, setAnswers6] = useState(Array(questions6.length).fill(null));
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
    } else if (page === 2) {
      const newAnswers = [...answers3];
      newAnswers[index] = value;
      setAnswers3(newAnswers);
    } else if (page === 3) {
      const newAnswers = [...answers4];
      newAnswers[index] = value;
      setAnswers4(newAnswers);
    } else if (page === 4) {
      const newAnswers = [...answers5];
      newAnswers[index] = value;
      setAnswers5(newAnswers);
    } else {
      const newAnswers = [...answers6];
      newAnswers[index] = value;
      setAnswers6(newAnswers);
    }
  };

  const calculateScore1 = () => {
    let Score1 = 0;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    let countNA = 0;
    let marked = 0,
      markedNA = 0,
      calc_Score = 0,
      Max_Score = 0;
    for (let i = 0; i < answers1.length; i++) {
      const answerIndex = answers1[i];
      if (answerIndex !== null) {
        console.log("questions1:", questions1);
        console.log("i:", i);
        const selectedOption1 = questions1[i].options[answerIndex];
        if (selectedOption1.score == 0) {
          countA++;
          marked++;
        } else if (selectedOption1.score == 1) {
          countB++;
          marked++;
        } else if (selectedOption1.score == 2) {
          countC++;
          marked++;
        } else if (selectedOption1.score == 3) {
          countD++;
          marked++;
        } else if (selectedOption1.score == 5) {
          countNA++;
          markedNA++;
        }
      }
    }

    calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
    Max_Score = marked * 3;

    Score1 = calc_Score / Max_Score;
    return Score1;
  };

  const calculateScore2 = () => {
    let Score2 = 0;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    let countNA = 0;
    let marked = 0,
      markedNA = 0,
      calc_Score = 0,
      Max_Score = 0;
    for (let i = 0; i < answers2.length; i++) {
      const answerIndex = answers2[i];
      if (answerIndex !== null) {
        console.log("questions2:", questions2);
        console.log("i:", i);
        const selectedOption1 = questions2[i].options[answerIndex];
        if (selectedOption1.score == 0) {
          countA++;
          marked++;
        } else if (selectedOption1.score == 1) {
          countB++;
          marked++;
        } else if (selectedOption1.score == 2) {
          countC++;
          marked++;
        } else if (selectedOption1.score == 3) {
          countD++;
          marked++;
        } else if (selectedOption1.score == 5) {
          countNA++;
          markedNA++;
        }
      }
    }

    calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
    Max_Score = marked * 3;

    Score2 = calc_Score / Max_Score;
    return Score2;
  };

  const calculateScore3 = () => {
    let Score3 = 0;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    let countNA = 0;
    let marked = 0,
      markedNA = 0,
      calc_Score = 0,
      Max_Score = 0;
    for (let i = 0; i < answers3.length; i++) {
      const answerIndex = answers3[i];
      if (answerIndex !== null) {
        console.log("questions3:", questions3);
        console.log("i:", i);
        const selectedOption1 = questions3[i].options[answerIndex];
        if (selectedOption1.score == 0) {
          countA++;
          marked++;
        } else if (selectedOption1.score == 1) {
          countB++;
          marked++;
        } else if (selectedOption1.score == 2) {
          countC++;
          marked++;
        } else if (selectedOption1.score == 3) {
          countD++;
          marked++;
        } else if (selectedOption1.score == 5) {
          countNA++;
          markedNA++;
        }
      }
    }

    calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
    Max_Score = marked * 3;

    Score3 = calc_Score / Max_Score;
    return Score3;
  };

  const calculateScore4 = () => {
    let Score4 = 0;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    let countNA = 0;
    let marked = 0,
      markedNA = 0,
      calc_Score = 0,
      Max_Score = 0;
    for (let i = 0; i < answers4.length; i++) {
      const answerIndex = answers4[i];
      if (answerIndex !== null) {
        console.log("questions4:", questions4);
        console.log("i:", i);
        const selectedOption1 = questions4[i].options[answerIndex];
        if (selectedOption1.score == 0) {
          countA++;
          marked++;
        } else if (selectedOption1.score == 1) {
          countB++;
          marked++;
        } else if (selectedOption1.score == 2) {
          countC++;
          marked++;
        } else if (selectedOption1.score == 3) {
          countD++;
          marked++;
        } else if (selectedOption1.score == 5) {
          countNA++;
          markedNA++;
        }
      }
    }

    calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
    Max_Score = marked * 3;

    Score4 = calc_Score / Max_Score;
    return Score4;
  };

  const calculateScore5 = () => {
    let Score5 = 0;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    let countNA = 0;
    let marked = 0,
      markedNA = 0,
      calc_Score = 0,
      Max_Score = 0;
    for (let i = 0; i < answers5.length; i++) {
      const answerIndex = answers5[i];
      if (answerIndex !== null) {
        console.log("questions5:", questions5);
        console.log("i:", i);
        const selectedOption1 = questions5[i].options[answerIndex];
        if (selectedOption1.score == 0) {
          countA++;
          marked++;
        } else if (selectedOption1.score == 1) {
          countB++;
          marked++;
        } else if (selectedOption1.score == 2) {
          countC++;
          marked++;
        } else if (selectedOption1.score == 3) {
          countD++;
          marked++;
        } else if (selectedOption1.score == 5) {
          countNA++;
          markedNA++;
        }
      }
    }

    calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
    Max_Score = marked * 3;

    Score5 = calc_Score / Max_Score;
    return Score5;
  };

  const calculateScore6 = () => {
    let Score6 = 0;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    let countNA = 0;
    let marked = 0,
      markedNA = 0,
      calc_Score = 0,
      Max_Score = 0;
    for (let i = 0; i < answers6.length; i++) {
      const answerIndex = answers6[i];
      if (answerIndex !== null) {
        console.log("questions6:", questions6);
        console.log("i:", i);
        const selectedOption1 = questions6[i].options[answerIndex];
        if (selectedOption1.score == 0) {
          countA++;
          marked++;
        } else if (selectedOption1.score == 1) {
          countB++;
          marked++;
        } else if (selectedOption1.score == 2) {
          countC++;
          marked++;
        } else if (selectedOption1.score == 3) {
          countD++;
          marked++;
        } else if (selectedOption1.score == 5) {
          countNA++;
          markedNA++;
        }
      }
    }

    calc_Score = countA * 0 + countB * 1 + countC * 2 + countD * 3;
    Max_Score = marked * 3;

    Score6 = calc_Score / Max_Score;
    return Score6;
  };
  const handleSubmit = () => {
    setPage(page + 1);
    const score1 = calculateScore1();
    const score2 = calculateScore2();
    const score3 = calculateScore3();
    const score4 = calculateScore4();
    const score5 = calculateScore5();
    let score6 = calculateScore6();

    let diagnosis6 = "",
      diagnosis_overall = "",
      diagnosis_AE = "";
    // Calculate overall score
    let totalscore = (score1 + score2 + score3 + score4 + score5 + score6) / 6;
    let totalA2E = (score1 + score2 + score3 + score4 + score5) / 5;
    // Calculate sum and count of first five scores
    let scoresFirstFive = [score1, score2, score3, score4, score5];
    let sumFirstFive = scoresFirstFive.reduce((acc, score) => acc + score, 0);
    letcountFirstFive = scoresFirstFive.filter((score) => score > 0).length;

    if (totalscore > 0.65) {
      diagnosis_overall = "Possible chance of ADHD";
    } else if (totalscore > 1.5) {
      diagnosis_overall = "High chance of ADHD";
    }

    if (sumFirstFive > 1.5 && countFirstFive >= 3) {
      diagnosis_AE = "High chance of ADHD";
    }
    if (score6 > 0.5) {
      diagnosis6 = "Concerning";
    }
    // TODO: Submit total score to server or store locally

    score6 = score6.toFixed(2);
    totalscore = totalscore.toFixed(2);
    totalA2E = totalA2E.toFixed(2);
    let id1 = 1,
      id2 = 2,
      id3 = 3;
    const scores = [
      {
        title: "Section F",
        score: score6,
        maxScore: 0.5,
        diagnosis: diagnosis6,
        id: id1,
      },
      {
        title: "Overall Score",
        score: totalscore,
        maxScore: 1.5,
        diagnosis: diagnosis_overall,
        id: id2,
      },
      {
        title: "Sections A to E(3/6)",
        score: totalA2E,
        maxScore: 1.5,
        diagnosis: diagnosis_AE,
        id: id3,
      },
    ];

    navigation.navigate("ResultsPage", { scores });
  };

  const canSubmit =
    answers1.every((answer) => answer !== null) &&
    answers2.every((answer) => answer !== null) &&
    answers3.every((answer) => answer !== null) &&
    answers4.every((answer) => answer !== null) &&
    answers5.every((answer) => answer !== null) &&
    answers6.every((answer) => answer !== null);

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
        <Text style={styles.quizHeading}>Section A: Family</Text>
        {page === 0 &&
          questions1
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
        {page === 1 &&
          questions2
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
        {page === 3 &&
          questions4
            .slice((page - 3) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers4[index] === optionIndex
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
        {page === 4 &&
          questions5
            .slice((page - 4) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers5[index] === optionIndex
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
        {page === 5 &&
          questions6
            .slice((page - 5) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers6[index] === optionIndex
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
          {page !== 0 && page !== 6 && (
            <TouchableOpacity style={styles.button} onPress={handlePrev}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
          )}
          {page !== 5 && page !== 6 && (
            <TouchableOpacity
              style={[styles.button, styles.rightButton]}
              onPress={handleNext}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}

          {page === 5 && (
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
    padding: 20,
  },
  questionContainer: {
    marginBottom: 16,
    padding: 10,
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
    paddingBottom: 30,
  },
  navigationButton: {
    paddingBottom: 30,
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
  rightButton: {
    marginRight: 8,
    marginLeft: "auto",
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
export default WFIRSQuizScreen;
