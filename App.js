import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VerseOfTheDay from './VerseOfTheDay';
import Flashcards from './Flashcards';
import Quiz from './Quiz';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Verse of the Day" component={VerseOfTheDay} />
        <Tab.Screen name="Flashcards" component={Flashcards} />
        <Tab.Screen name="Quiz" component={Quiz} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
