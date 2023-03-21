import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { RadioButton } from "react-native-paper";
import TermsAndConditions from "./TermsScreen";
// 1. Attention
const questions1 = [
  {
    id: 1,
    text: "1. Attention to details or makes careless mistakes",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Holding attention or remaining focused",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Listening or mind seems elsewhere",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Instructions or finishing work",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Organizing (e.g. time, messy, deadlines)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Avoids or dislikes activities requiring effort",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Loses or misplaces things",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Easily distracted",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Forgetful (e.g. chores, bills, appointments)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 2. Hyperactivity and Impulsivity
const questions2 = [
  {
    id: 1,
    text: "10. Fidgets or squirms",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "11. Trouble staying seated",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "12. Runs about or feels restless inside",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "13. Loud or difficulty being quiet",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "14. Often On the go",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "15. Talks too much",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "16. Blurts out comments",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "17. Dislikes waiting (e.g. taking turns or in line)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "18. Interrupts or intrudes on others (e.g. butting in)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 3. Oppositional
const questions3 = [
  {
    id: 1,
    text: "1. Loses temper",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Almost always", score: 4 },
    ],
  },
  {
    id: 2,
    text: "2. Easily annoyed",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Almost always", score: 4 },
    ],
  },
  {
    id: 3,
    text: "3. Angry and resentful",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Almost always", score: 4 },
    ],
  },
  {
    id: 4,
    text: "4. Argues",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Almost always", score: 4 },
    ],
  },
  {
    id: 5,
    text: "5. Defiant",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Almost always", score: 4 },
    ],
  },
  {
    id: 6,
    text: "6. Deliberately annoys other people",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Almost always", score: 4 },
    ],
  },
  {
    id: 7,
    text: "7. Blames other people rather than themselves",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Almost always", score: 4 },
    ],
  },
  {
    id: 8,
    text: "8. Spiteful",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Almost always", score: 4 },
    ],
  },
];

// 4. Developmental and Learning
const questions4 = [
  {
    id: 1,
    text: "1. Wetting, (after age 5)",
    options: [
      { text: "Never", score: 0 },
      { text: "Occasionally", score: 1 },
      { text: "Frequently", score: 2 },
      { text: "Always", score: 3 },
    ],
  },
  {
    id: 2,
    text: "2. Soiling (after age 4)",
    options: [
      { text: "Never", score: 0 },
      { text: "Occasionally", score: 1 },
      { text: "Frequently", score: 2 },
      { text: "Always", score: 3 },
    ],
  },
  {
    id: 3,
    text: "3. Reading",
    options: [
      { text: "No difficulty", score: 0 },
      { text: "Mild difficulty", score: 1 },
      { text: "Moderate difficulty", score: 2 },
      { text: "Severe difficulty", score: 3 },
    ],
  },
  {
    id: 4,
    text: "4. Spelling",
    options: [
      { text: "No difficulty", score: 0 },
      { text: "Mild difficulty", score: 1 },
      { text: "Moderate difficulty", score: 2 },
      { text: "Severe difficulty", score: 3 },
    ],
  },
  {
    id: 5,
    text: "5. Math",
    options: [
      { text: "No difficulty", score: 0 },
      { text: "Mild difficulty", score: 1 },
      { text: "Moderate difficulty", score: 2 },
      { text: "Severe difficulty", score: 3 },
    ],
  },
  {
    id: 6,
    text: "6. Writing",
    options: [
      { text: "No difficulty", score: 0 },
      { text: "Mild difficulty", score: 1 },
      { text: "Moderate difficulty", score: 2 },
      { text: "Severe difficulty", score: 3 },
    ],
  },
];

// 5. Autism Spectrum
const questions5 = [
  {
    id: 1,
    text: "1. Difficulty with talking back and forth",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Unusual eye contact or body language",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Speech is odd (monotone, unusual words)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Restricted, fixed, intense interests",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Odd, repetitive movements (e.g. flapping)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Does not easily 'chit chat'",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 6. Motor Disorders
const questions6 = [
  {
    id: 1,
    text: "1. Repetitive noises (e.g. sniffing, throat clearing)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Repetitive movements (e.g. blinking, shurggin)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Clumsy",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 7. Psychosis
const questions7 = [
  {
    id: 1,
    text: "1. Hearing voices that are not there",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Seeing things that are not there",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Scrambled thinking",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Paranoia (feeling people are against you)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 8. Depression
const questions8 = [
  {
    id: 1,
    text: "1. Sad or depressed most of the day",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Lack of interest or pleasure most of the day",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Weight loss, weight gain, or change in appetite",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Difficulty sleeping or sleeping too much",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Agitated",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Slowed down",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Feels Worthless",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Tired, no energy",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Hopeless, pessimistic",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 10,
    text: "10. Withdrawal from usual interests/people",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 11,
    text: "11. Decrease in concentration",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 9. Mood Regulation
const questions9 = [
  {
    id: 1,
    text: "1. Distinct period(s) of intense excitement",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Distinct period(s) of inflated self-esteem, grandiose",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Distinct period(s) of increased energy",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Distinct period(s) of decreased need for sleep",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Distinct period(s) of racing thoughts or speech",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Irritable behaviour that is out of character",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Rage attacks, anger outbursts, hostility",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 10. Suicide
const questions10 = [
  {
    id: 1,
    text: "1. Suicidal thoughts",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Suicide attempt(s) or a plan",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 11. Anxiety
const questions11 = [
  {
    id: 1,
    text: "1. Intense fears (e.g. heights, crowds, spiders)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Fear of social situations or performing",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Panic attacks",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Fear of leaving e.g. the house, public transportation.",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Worrying and/or anxious most days",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Nervous, can't relax",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Obsessive thoughts (e.g. germs, perfectionism)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Compulsive rituals (e.g. checking, hand washing)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Hair pulling, nail biting or skin picking",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 10,
    text: "10. Preoccupation with physical complaints",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 11,
    text: "11. Chronic pain",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 12. Stress Related Disorders
const questions12 = [
  {
    id: 1,
    text: "1. Physical abuse",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Sexual abuse",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Neglect",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Other severe trauma",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 13. PTSD
const questions13 = [
  {
    id: 1,
    text: "1. Flashbacks or nightmares",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Avoidance",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Intrusive thoughts of traumatic events",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 14. Sleep
const questions14 = [
  {
    id: 1,
    text: "1. Trouble falling asleep or staying asleep",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Excessive daytime sleepiness",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Snoring or stops breathing during sleep",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 15. Eating
const questions15 = [
  {
    id: 1,
    text: "1. Distorted body image",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Underweight",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Binge eating",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Overweight",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Eating too little or refusing to eat",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 16. Conduct
const questions16 = [
  {
    id: 1,
    text: "1. Verbal aggression",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Physical aggression",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Used a weapon against people (stones, sticks etc.)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Cruel to animals",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Physically cruel to people",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Stealing or shoplifting",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Deliberately sets fires",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Deliberately destroys property",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Frequent lying",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 10,
    text: "10. Lack of remorse or guilt",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 11,
    text: "11. Lack of empathy or concern for others",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 17. Substance Use
const questions17 = [
  {
    id: 1,
    text: "1. Misuse of prescription drugs",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Alcohol > 14 drinks/week or 4 drinks at once",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Smoking or tobacco use",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Marijuana",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Other street drugs",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Excessive over the counter medications",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Excessive caffeine (colas, coffee, tea, pills)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 18. Addictions
const questions18 = [
  {
    id: 1,
    text: "1. Gambling",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Excessive Internet, gaming or screen time",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Other addiction(s)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

// 19. Personality
const questions19 = [
  {
    id: 1,
    text: "1. Self-Destructive",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 2,
    text: "2. Stormy, conflicted relationships",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 3,
    text: "3. Self-injurious behaviour (e.g. cutting)",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 4,
    text: "4. Low self-esteem",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 5,
    text: "5. Manipulative",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 6,
    text: "6. Self-centered",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 7,
    text: "7. Arrogant",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 8,
    text: "8. Suspicious",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 9,
    text: "9. Deceitful with no remorse",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 10,
    text: "10. Breaking the law or antisocial behaviour",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
  {
    id: 11,
    text: "10. Tends to be a loner",

    options: [
      { text: "None", score: 0 },
      { text: "Mild", score: 1 },
      { text: "Moderate", score: 2 },
      { text: "Severe", score: 3 },
      { text: "N/A", score: 5 },
    ],
  },
];

const WSRQuizScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [answers1, setAnswers1] = useState(Array(questions1.length).fill(null));
  const [answers2, setAnswers2] = useState(Array(questions2.length).fill(null));
  const [answers3, setAnswers3] = useState(Array(questions3.length).fill(null));
  const [answers4, setAnswers4] = useState(Array(questions4.length).fill(null));
  const [answers5, setAnswers5] = useState(Array(questions5.length).fill(null));
  const [answers6, setAnswers6] = useState(Array(questions6.length).fill(null));
  const [answers7, setAnswers7] = useState(Array(questions7.length).fill(null));
  const [answers8, setAnswers8] = useState(Array(questions8.length).fill(null));
  const [answers9, setAnswers9] = useState(Array(questions9.length).fill(null));
  const [answers10, setAnswers10] = useState(
    Array(questions10.length).fill(null)
  );
  const [answers11, setAnswers11] = useState(
    Array(questions11.length).fill(null)
  );
  const [answers12, setAnswers12] = useState(
    Array(questions12.length).fill(null)
  );
  const [answers13, setAnswers13] = useState(
    Array(questions13.length).fill(null)
  );
  const [answers14, setAnswers14] = useState(
    Array(questions14.length).fill(null)
  );
  const [answers15, setAnswers15] = useState(
    Array(questions15.length).fill(null)
  );
  const [answers16, setAnswers16] = useState(
    Array(questions16.length).fill(null)
  );
  const [answers17, setAnswers17] = useState(
    Array(questions17.length).fill(null)
  );
  const [answers18, setAnswers18] = useState(
    Array(questions18.length).fill(null)
  );
  const [answers19, setAnswers19] = useState(
    Array(questions19.length).fill(null)
  );

  const [termsAgreed, setTermsAgreed] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };
  const canSubmit =
    answers1.every((answer) => answer !== null) &&
    answers2.every((answer) => answer !== null) &&
    answers3.every((answer) => answer !== null) &&
    answers4.every((answer) => answer !== null) &&
    answers5.every((answer) => answer !== null) &&
    answers6.every((answer) => answer !== null) &&
    answers7.every((answer) => answer !== null) &&
    answers8.every((answer) => answer !== null) &&
    answers9.every((answer) => answer !== null) &&
    answers10.every((answer) => answer !== null) &&
    answers11.every((answer) => answer !== null) &&
    answers12.every((answer) => answer !== null) &&
    answers13.every((answer) => answer !== null) &&
    answers14.every((answer) => answer !== null) &&
    answers15.every((answer) => answer !== null) &&
    answers16.every((answer) => answer !== null) &&
    answers17.every((answer) => answer !== null) &&
    answers18.every((answer) => answer !== null) &&
    answers19.every((answer) => answer !== null);

  function handleAgree(checked) {
    if (checked) {
      setTermsAgreed(true);
    }
  }

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
    } else if (page === 5) {
      const newAnswers = [...answers6];
      newAnswers[index] = value;
      setAnswers6(newAnswers);
    } else if (page === 6) {
      const newAnswers = [...answers7];
      newAnswers[index] = value;
      setAnswers7(newAnswers);
    } else if (page === 7) {
      const newAnswers = [...answers8];
      newAnswers[index] = value;
      setAnswers8(newAnswers);
    } else if (page === 8) {
      const newAnswers = [...answers9];
      newAnswers[index] = value;
      setAnswers9(newAnswers);
    } else if (page === 9) {
      const newAnswers = [...answers10];
      newAnswers[index] = value;
      setAnswers10(newAnswers);
    } else if (page === 10) {
      const newAnswers = [...answers11];
      newAnswers[index] = value;
      setAnswers11(newAnswers);
    } else if (page === 11) {
      const newAnswers = [...answers12];
      newAnswers[index] = value;
      setAnswers12(newAnswers);
    } else if (page === 12) {
      const newAnswers = [...answers13];
      newAnswers[index] = value;
      setAnswers13(newAnswers);
    } else if (page === 13) {
      const newAnswers = [...answers14];
      newAnswers[index] = value;
      setAnswers14(newAnswers);
    } else if (page === 14) {
      const newAnswers = [...answers15];
      newAnswers[index] = value;
      setAnswers15(newAnswers);
    } else if (page === 15) {
      const newAnswers = [...answers16];
      newAnswers[index] = value;
      setAnswers16(newAnswers);
    } else if (page === 16) {
      const newAnswers = [...answers17];
      newAnswers[index] = value;
      setAnswers17(newAnswers);
    } else if (page == 17) {
      const newAnswers = [...answers18];
      newAnswers[index] = value;
      setAnswers18(newAnswers);
    } else if (page == 18) {
      const newAnswers = [...answers19];
      newAnswers[index] = value;
      setAnswers19(newAnswers);
    }
  };

  //ADHD-Inattentive Type
  const calculateScore1 = () => {
    let markedCD = 0;

    for (let i = 0; i < answers1.length; i++) {
      const answerIndex = answers1[i];
      if (answerIndex !== null) {
        const selectedOption1 = questions1[i].options[answerIndex];
        if (selectedOption1.score == 2 || selectedOption1.score == 3) {
          markedCD++;
        }
      }
    }

    return markedCD;
  };

  //ADHD-Hyperactive/Impulsive
  const calculateScore2 = () => {
    let markedCD = 0;
    for (let i = 0; i < answers2.length; i++) {
      const answerIndex = answers2[i];
      if (answerIndex !== null) {
        const selectedOption1 = questions2[i].options[answerIndex];
        if (selectedOption1.score == 2 || selectedOption1.score == 3) {
          markedCD++;
        }
      }
    }

    return markedCD;
  };

  //ODD (Oppositional Defiant Disorder)
  const calculateScore3 = () => {
    let markedCD = 0;

    for (let i = 0; i < answers3.length; i++) {
      const answerIndex = answers3[i];
      if (answerIndex !== null) {
        const selectedOption1 = questions3[i].options[answerIndex];
        if (selectedOption1.score == 2 || selectedOption1.score == 3) {
          markedCD++;
        }
      }
    }

    return markedCD;
  };

  //Conduct Disorder
  const calculateScore16 = () => {
    let markedCD = 0;

    for (let i = 0; i < answers16.length; i++) {
      const answerIndex = answers16[i];
      if (answerIndex !== null) {
        const selectedOption1 = questions16[i].options[answerIndex];
        if (selectedOption1.score == 2 || selectedOption1.score == 3) {
          markedCD++;
        }
      }
    }

    return markedCD;
  };

  //Depressive Disorder
  const calculateScore8 = () => {
    let markedCD = 0;

    for (let i = 0; i < answers8.length; i++) {
      const answerIndex = answers8[i];
      if (answerIndex !== null) {
        const selectedOption1 = questions8[i].options[answerIndex];
        if (selectedOption1.score == 2 || selectedOption1.score == 3) {
          markedCD++;
        }
      }
    }

    return markedCD;
  };

  //Manic Depression (Bipolar Depressive Disorder)
  const calculateScore9 = () => {
    let markedCD = 0;

    for (let i = 0; i < answers9.length; i++) {
      const answerIndex = answers9[i];
      if (answerIndex !== null) {
        const selectedOption1 = questions9[i].options[answerIndex];
        if (selectedOption1.score == 2 || selectedOption1.score == 3) {
          markedCD++;
        }
      }
    }
    return markedCD;
  };

  //PERSONALITY
  const calculateScore19 = () => {
    let markedCD = 0;

    for (let i = 0; i < answers19.length; i++) {
      const answerIndex = answers19[i];
      if (answerIndex !== null) {
        const selectedOption1 = questions19[i].options[answerIndex];
        if (selectedOption1.score == 2 || selectedOption1.score == 3) {
          markedCD++;
        }
      }
    }

    return markedCD;
  };

  //ADHD-Combined20
  const calculateScore20 = () => {
    let markedCD = 0;

    for (let i = 0; i < answers1.length; i++) {
      const answerIndex = answers1[i];
      const answerIndex2 = answers2[i];
      if (answerIndex !== null && answerIndex2 !== 0) {
        const selectedOption1 = questions1[i].options[answerIndex];
        const selectedOption2 = questions2[i].options[answerIndex];
        if (
          selectedOption1.score == 2 ||
          selectedOption1.score == 3 ||
          selectedOption2.score == 2 ||
          selectedOption2.score == 3
        ) {
          markedCD++;
        }
      }
    }

    return markedCD;
  };
  const handleSubmit = () => {
    setPage(page + 1);
    const score1 = calculateScore1();
    const score2 = calculateScore2();
    const score3 = calculateScore3();
    const score16 = calculateScore16();
    const score8 = calculateScore8();
    const score9 = calculateScore9();
    const score19 = calculateScore19();
    const score20 = calculateScore20();
    let diagnosis20 = " ";
    let diagnosis19 = " ";
    let diagnosis9 = " ";
    let diagnosis8 = " ";
    let diagnosis16 = " ";
    let diagnosis3 = " ";
    let diagnosis2 = " ";
    let diagnosis1 = " ";
    let id1 = 1,
      id2 = 2,
      id3 = 3;
    (id4 = 4), (id5 = 5), (id6 = 6), (id7 = 7), (id8 = 8);
    if (score20 >= 6) diagnosis20 = "ADHD-Combined";
    else diagnosis20 = "No ADHD-Combined symptoms";

    if (score1 >= 6) diagnosis1 = "ADHD Inattentive Type";
    else diagnosis1 = "No Inattentive symptoms";

    if (score2 >= 6) diagnosis2 = "ADHD-Hyperactive/Impulsive Type";
    else diagnosis2 = "No Hyperactive/Impulsive symptoms";

    if (score3 >= 4) diagnosis3 = "ADHD Inattentive Type";
    else diagnosis3 = "No Inattentive symptoms";
    if (score16 >= 3) diagnosis16 = "Conduct Disorder";
    else diagnosis16 = "No Conduct Disorder symptoms";
    if (score19 >= 5) diagnosis19 = "Borderline Personality Disorder";
    else diagnosis19 = "No Borderline Personality Disorder symptoms";

    if (score9 >= 5)
      diagnosis9 = "Manic Depression (Bipolar Depressive Disorder)";
    else
      diagnosis9 = "No Manic Depression (Bipolar Depressive Disorder) symptoms";

    if (score8 >= 5) diagnosis8 = "Depressive Disorder";
    else diagnosis8 = "No Depressive Disorder symptoms";

    const scores = [
      {
        title: "Attention",
        score: score1,
        maxScore: 9,
        diagnosis: diagnosis1,
        id: id1,
      },
      {
        title: "Hyperactivity and Impulsivity",
        score: score2,
        maxScore: 9,
        diagnosis: diagnosis2,
        id: id2,
      },
      {
        title: "ADHD-Combined",
        score: score20,
        maxScore: 18,
        diagnosis: diagnosis20,
        id: id3,
      },
      {
        title: "ODD (Oppositional Defiant Disorder)",
        score: score3,
        maxScore: 8,
        diagnosis: diagnosis3,
        id: id4,
      },
      {
        title: "Conduct Disorder",
        score: score16,
        maxScore: 11,
        diagnosis: diagnosis16,
        id: id5,
      },
      {
        title: "Depressive Disorder",
        score: score8,
        maxScore: 11,
        diagnosis: diagnosis8,
        id: id6,
      },
      {
        title: "Manic Depression",
        score: score9,
        maxScore: 7,
        diagnosis: diagnosis9,
        id: id7,
      },
      {
        title: "Borderline Personality Disorder",
        score: score19,
        maxScore: 11,
        diagnosis: diagnosis19,
        id: id8,
      },
    ];

    navigation.navigate("ResultsPage", { scores });
  };

  if (!termsAgreed) {
    return <TermsAndConditions onAgree={handleAgree} />;
  } else if (!quizStarted) {
    return (
      <ScrollView style={styles.container}>
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
        {page === 6 &&
          questions7
            .slice((page - 6) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers7[index] === optionIndex
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
        {page === 7 &&
          questions8
            .slice((page - 7) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers8[index] === optionIndex
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
        {page === 8 &&
          questions9
            .slice((page - 8) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers9[index] === optionIndex
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
        {page === 9 &&
          questions10
            .slice((page - 9) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers10[index] === optionIndex
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
        {page === 10 &&
          questions11
            .slice((page - 10) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers11[index] === optionIndex
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
        {page === 11 &&
          questions12
            .slice((page - 11) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers12[index] === optionIndex
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
        {page === 12 &&
          questions13
            .slice((page - 12) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers13[index] === optionIndex
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
        {page === 13 &&
          questions14
            .slice((page - 13) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers14[index] === optionIndex
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
        {page === 14 &&
          questions15
            .slice((page - 14) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers15[index] === optionIndex
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
        {page === 15 &&
          questions16
            .slice((page - 15) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers16[index] === optionIndex
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
        {page === 16 &&
          questions17
            .slice((page - 16) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers17[index] === optionIndex
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
        {page === 17 &&
          questions18
            .slice((page - 17) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers18[index] === optionIndex
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
        {page === 18 &&
          questions19
            .slice((page - 18) * 10, page * 10)
            .map((question, index) => (
              <View key={question.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                {question.options.map((option, optionIndex) => (
                  <View key={optionIndex} style={styles.optionContainer}>
                    <RadioButton
                      value={optionIndex}
                      status={
                        answers19[index] === optionIndex
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
          {page !== 0 && page !== 19 && (
            <TouchableOpacity style={styles.button} onPress={handlePrev}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
          )}
          {page !== 19 && page !== 18 && (
            <TouchableOpacity
              style={[styles.button, styles.rightButton]}
              onPress={handleNext}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}

          {page === 18 && (
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
export default WSRQuizScreen;
