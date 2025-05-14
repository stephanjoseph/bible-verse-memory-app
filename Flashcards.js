import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const initialFlashcards = [
  { id: 1, front: 'John 3:16', back: 'For God so loved the world...' },
  { id: 2, front: 'Psalm 23:1', back: 'The Lord is my shepherd...' }
];

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const handleNext = () => {
    setShowBack(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          {showBack ? flashcards[currentIndex].back : flashcards[currentIndex].front}
        </Text>
      </View>
      <Button title="Flip" onPress={() => setShowBack(!showBack)} />
      <Button title="Next" onPress={handleNext} />
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
  card: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Flashcards;
