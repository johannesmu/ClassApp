import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import {TextBox} from './components/TextBox';
import {Welcome} from './components/Welcome';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      time: 15,
      playing: false,
      multiplier: 0
    }
  }
  startGame() {
    this.state.playing = true
    console.log('bro')
  }
  stopGame() {
    this.state.playing = false;
  }
  render() {
    return (
      <View style={styles.container}>
        <Welcome 
        playing={this.state.playing} 
        text="Multiplication Ninja" 
        handler={this.startGame.bind(this)} />
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
