import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { TextBox } from './components/TextBox';
import { ClickCounter } from './components/ClickCounter';
import { Start } from './components/Start';

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      secret: 0,
      guess: 0,
      feedback: '',
      correct: false
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
        <Button title="check guess" onPress={this.checkGuess} />
        <Text>{this.state.feedback}</Text>
        <Start correct={this.state.correct} />
      </View>
    )
  }
  updateGuess = ( userInput ) => {
    this.setState( {guess: userInput} )
  }
  checkGuess = () => {
    const userGuess = parseInt( this.state.guess )
    if( this.state.guess == this.state.secret ) {
      this.setState({ feedback: "You guessed right!"})
      this.setState({correct : true})
    }
    else if( this.state.guess > this.state.secret ) {
      this.setState( { feedback: 'The number is smaller than ' + userGuess })
    }
    else if( this.state.guess < this.state.secret ) {
      this.setState( { feedback: 'The number is larger than ' + userGuess } )
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
