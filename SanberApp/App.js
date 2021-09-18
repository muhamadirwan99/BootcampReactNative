import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import Telegram from './Tugas/Tugas12/Telegram';
import Login from './Tugas/Tugas16/LoginScreen';
import About from './Tugas/Tugas16/AboutScreen';
import RestApi from './Tugas/Tugas17/RestApi';
import Tugas15 from './Tugas/Tugas15/index';
import Tugas18 from './Tugas/Tugas18/index';
import Quiz3 from './Tugas/Quiz3/index';

export default function App() {
  return (
   // <Login />
   //<About />
   //<RestApi />
   // <Tugas15 />
   // <Tugas18 />
   <Quiz3 />
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
