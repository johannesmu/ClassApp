import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextBox} from './components/TextBox';

export default function Game() {
  return (
    <View style={styles.container}>
      <Text>OK, bitches!</Text>
      <StatusBar style="auto" />
      <TextBox text="Hello" colour="red" size={24} />
    </View>
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
