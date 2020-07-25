import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import {TextBox} from './components/TextBox';
import {Welcome} from './components/Welcome';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      time: 15,
      playing: true,
      multiplier: 0
    }
    this.initGame()
  }
  initGame() {
    this.state.multiplier = this.randomInt()
  }
  randomInt() {
    let number = Math.random() * 10
    return Math.round(number)
  }
  render() {
    return (
      <View style={styles.container}>
        <Welcome playing={this.state.playing} text="Multiplication Ninja" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  game: {
    minHeight: 300,
    backgroundColor: 'lightblue',
    minWidth:360
  },
  question: {
    margin: 20
  },
  input: {
    backgroundColor: '#ffffff',
    minWidth: 150,
    padding:5
  }
});
