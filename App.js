import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { TextBox } from './components/TextBox';
import { ClickCounter } from './components/ClickCounter';

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      secret: 0,
      guess: 0,
      feedback: ''
    }
  }
  setSecret() {
    let random = Math.round( Math.random()*100 )
    this.setState( { secret: random } )
  }
  componentDidMount() {
    this.setSecret()
  }
  render () {
    return (
      <View style={styles.container}>
        <TextBox color="blue" size={24} text="Guess my number!" />
        <TextInput style={styles.input} onChangeText={this.updateGuess} />
        <Button title="check guess" />
        <Text>{this.state.feedback}</Text>
      </View>
    )
  }
  // updateGuess( userInput ) {
  //   this.setState( {guess: userInput} )
  // }
  updateGuess = ( userInput ) => {
    this.setState( {guess: userInput} )
  }
  checkGuess = () => {
    const userGuess = parseInt( this.state.guess )
    if( this.state.guess == this.state.secret ) {
      this.setState({ feedback: "You guessed right!"})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: 'red',
    fontSize: 36
  },
  input: {
    minWidth: 200,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'white'
  }
});
