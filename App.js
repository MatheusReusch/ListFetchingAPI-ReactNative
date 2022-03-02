import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ToDoList from './ToDoList';
import listContext from './listContext';
import Cocktail from './Cocktail';

export default function App() {
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tarefas</Text>
      <TextInput style={styles.input} value={input} onChangeText={ setInput } />
      <listContext.Provider value={ { input, setInput } }>
      <ToDoList />
      </listContext.Provider>
      <Cocktail />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20%',
    marginLeft: '37%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginRight: '27%',
    marginLeft: '-30%'
  },
  title: {
    fontSize: 32,
    marginLeft: '-18%'
  }
});
