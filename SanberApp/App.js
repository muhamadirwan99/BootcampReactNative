import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Telegram from './Tugas/Tugas12/Telegram';
import Login from './Tugas/Tugas16/LoginScreen';
import About from './Tugas/Tugas16/AboutScreen';

export default function App() {
  return (
   // <Login />
   <About />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
