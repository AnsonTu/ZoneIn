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
import { addPatientAssessment } from "../../helpers/query";
import ProgressBar from "react-native-progress/Bar";
import { darkGreen, green } from "../../components/Constants";

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

const WFIRSQuizScreen = (props) => {
  const { patientInfo } = props.route.params;

  const [page, setPage] = useState(0);
  const [answers1, setAnswers1] = useState(Array(questions1.length).fill(null));
  const [answers2, setAnswers2] = useState(Array(questions2.length).fill(null));
  const [answers3, setAnswers3] = useState(Array(questions3.length).fill(null));
  const [answers4, setAnswers4] = useState(Array(questions4.length).fill(null));
  const [answers5, setAnswers5] = useState(Array(questions5.length).fill(null));
  const [answers6, setAnswers6] = useState(Array(questions6.length).fill(null));
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  let [Score1, setScore1] = useState(0);
  let [Score2, setScore2] = useState(0);
  let [Score3, setScore3] = useState(0);
  let [Score4, setScore4] = useState(0);
  let [Score5, setScore5] = useState(0);
  let [Score6, setScore6] = useState(0);

  const totalQuestions =
    questions1.length +
    questions2.length +
    questions3.length +
    questions4.length +
    questions5.length +
    questions6.length;
  const answeredQuestions =
    answers1.filter((answer) => answer !== null).length +
    answers2.filter((answer) => answer !== null).length +
    answers3.filter((answer) => answer !== null).length +
    answers4.filter((answer) => answer !== null).length +
    answers5.filter((answer) => answer !== null).length +
    answers6.filter((answer) => answer !== null).length;
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
    setScore1(Score1);
    return Score1.toFixed(3);
  };

  const calculateScore2 = () => {
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
    setScore2(Score2);
    return Score2.toFixed(3);
  };

  const calculateScore3 = () => {
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

    setScore3(Score3);
    return Score3.toFixed(3);
  };

  const calculateScore4 = () => {
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
    setScore4(Score4);
    return Score4.toFixed(3);
  };

  const calculateScore5 = () => {
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
    setScore5(Score5);
    return Score5.toFixed(3);
  };

  const calculateScore6 = () => {
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
    setScore6(Score6);
    return Score6.toFixed(3);
  };

  const handleSubmit = async () => {
    setPage(page + 1);
    const diagnosis1 = calculateScore1();
    const diagnosis2 = calculateScore2();
    const diagnosis3 = calculateScore3();
    const diagnosis4 = calculateScore4();
    const diagnosis5 = calculateScore5();
    const diagnosis6 = calculateScore6();

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
      {
        title: "Inattention Subset",
        maxScore: 27,
        diagnosis: diagnosis4,
        score: Score4,

        id: 1,
      },
      {
        title: "Hyperactivity/Impulsivity Subset",
        maxScore: 27,
        diagnosis: diagnosis5,
        score: Score5,

        id: 2,
      },
      {
        title: "ODD (Oppositional Defiant Disorder) Subset",
        maxScore: 24,
        diagnosis: diagnosis6,
        score: Score6,

        id: 3,
      },
    ];
    console.log("this is scote 3:" + Score3);
    props.navigation.navigate("ResultsPage", { scores });
    await addPatientAssessment(
      patientInfo,
      "WFIRS",
      [
        calculateScore1(),
        calculateScore2(),
        calculateScore3(),
        calculateScore4(),
        calculateScore5(),
        calculateScore6(),
      ],
      [
        ...answers1,
        ...answers2,
        ...answers3,
        ...answers4,
        ...answers5,
        ...answers6,
      ]
    );
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
        {page === 0 && (
          <View>
            <Text style={styles.SectionHeader}>Section A: Family</Text>
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
              Section B: School: Learning and Behaviour
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
            <Text style={styles.SectionHeader}>Section C: Life Skills</Text>
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
        {page === 3 && (
          <View>
            <Text style={styles.SectionHeader}>
              Section D: Child’s Self-Concept
            </Text>
            {questions4
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
          </View>
        )}
        {page === 4 && (
          <View>
            <Text style={styles.SectionHeader}>
              Section E: Social Activities
            </Text>
            {questions5
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
          </View>
        )}
        {page === 5 && (
          <View>
            <Text style={styles.SectionHeader}>
              Section F: Risky Activities
            </Text>
            {questions6
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
          </View>
        )}
        <View style={styles.navigationContainerwithProgressBar}>
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

          <ProgressBar
            style={{ backgroundColor: "white" }}
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
    fontFamily: "Open Sans",
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
    fontFamily: "Open Sans",
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
    fontFamily: "Open Sans",
  },
  disabledButton: {
    backgroundColor: "#D3D3D3", // change the background color for disabled button
    borderColor: "#D3D3D3", // change the border color for disabled button
  },
});
export default WFIRSQuizScreen;
