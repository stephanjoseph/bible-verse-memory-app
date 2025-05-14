import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const questions = [
  {
    question: 'What is the reference for "For God so loved the world..."?',
    options: ['John 3:16', 'Psalm 23:1', 'Philippians 4:13'],
    answer: 'John 3:16',
  },
  {
    question: 'Complete the verse: "The Lord is my shepherd..."',
    options: ['I shall not want.', 'He strengthens me.', 'He loves me.'],
    answer: 'I shall not want.',
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Quiz Complete!</Text>
        <Text style={styles.text}>Your Score: {score}/{questions.length}</Text>
      </View>
    );
  }

  const question = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question.question}</Text>
      {question.options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleAnswer(option)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Quiz;
