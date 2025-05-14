import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import verses from './verses.json';

const VerseOfTheDay = () => {
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    const today = new Date();
    const index = today.getDate() % verses.length;
    setVerse(verses[index]);
  }, []);

  return (
    <View style={styles.container}>
      {verse ? (
        <>
          <Text style={styles.reference}>{verse.reference}</Text>
          <Text style={styles.text}>{verse.text}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
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
  reference: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default VerseOfTheDay;
