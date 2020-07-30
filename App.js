import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import { TextBox } from './components/TextBox';
import { Start } from './components/Start';

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      secret: 0,
      guess: 0,
      feedback: '',
      correct: false,
      textValue: ''
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
        <TextBox color="#336633" size={24} text="Guess my number!" />
        <TextInput 
        style={styles.input} 
        onChangeText={(text) => this.updateGuess(text)} 
        autoFocus={true}
        ref={(comp) => this._textInput = comp }
         />
        <TouchableOpacity style={styles.check} onPress={this.checkGuess} >
          <Text style={styles.checkText} >Check</Text>
        </TouchableOpacity>
        <TextBox style={styles.feedback} color="#8f0e00" size={14} text={this.state.feedback}/>
        <Start correct={this.state.correct} handler={this.restartGame} />
      </View>
    )
  }
  restartGame = () => {
    this.setSecret()
    this.setState({correct: false})
  }
  updateGuess = ( userInput ) => {
    this.setState( {guess: userInput} )
  }
  checkGuess = () => {
    const userGuess = parseInt( this.state.guess )
    this.setState({textValue: ''})
    if( this.state.guess == this.state.secret ) {
      this.setState({ feedback: "You guessed right!"})
      this.setState({correct : true})
    }
    else if( this.state.guess > this.state.secret ) {
      this.setState( { feedback: 'The number is smaller than \n' + userGuess })
    }
    else if( this.state.guess < this.state.secret ) {
      this.setState( { feedback: 'The number is larger than ' + userGuess } )
    }
    // clear the TextInput component, see the ref in the <TextInput/>
    this._textInput.clear()
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
    minWidth: 150,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    fontSize: 20
  },
  check: {
    backgroundColor: '#336633',
    padding: 15,
    minWidth: 150,
    borderRadius: 6
  },
  checkText: {
    textAlign: 'center',
    color: 'white'
  },
  feedback: {
    textAlign: 'center',
    marginTop: 10
  }
});
