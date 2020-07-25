const { Component } = require("react");
import React, { useState } from 'react';
import {Text,  View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'

export const Welcome = (props) => {
  const [multiplication, setMultiplication] = useState(15)
  const [level, setLevel] = useState('slow')
  const isPlaying = props.playing
  if(isPlaying) {
    return (
      <View style={styles.welcomeView}>     
          <Text style={styles.title}>{props.text}</Text>
          <Image 
          style={styles.image} 
          source={require('../assets/icon_nj_8.png')} 
          resizeMethod="auto"
          resizeMode="contain"
          />
          <Text>Choose your multiplication</Text>
          <View style={styles.row}>
            <Button title="25" onPress={() => setMultiplication(25)} />
            <Button title="50" onPress={() => setMultiplication(50)} />
            <Button title="75" onPress={() => setMultiplication(75)} />
          </View>
          <Text>Choose your brain reflex</Text>
          <View style={styles.row}>
            <Button title="slow" onPress={() => setLevel('slow')} />
            <Button title="medium" onPress={() => setLevel('medium')} />
            <Button title="fast" onPress={() => setLevel('fast')} />
            <Button title="lightning" onPress={() => setLevel('lightning')} />
          </View>
          <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Play {multiplication} Multiplication {level}</Text>
          </TouchableOpacity>
      </View>
    )
  }
  else {
    return null
  }
  
}

const styles = StyleSheet.create({
  welcomeView: {
    minHeight: 300,
    backgroundColor: 'hsl(201, 87%, 85%)',
    minWidth: 360,
    display: 'flex',
    alignItems: 'center',
    padding: 5
  },
  title: {
    fontSize: 32,
    padding: 5
  },
  image: {
    maxWidth: 150
  },
  button: {
    minWidth: 150,
    backgroundColor: 'hsl(185, 84%, 38%)',
    padding: 10
  },
  buttonText: {
    color: 'black',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row'
  }

})

/*
--viridian-green: hsla(185, 84%, 38%, 1);
--uranian-blue: hsla(201, 87%, 85%, 1);
--bittersweet: hsla(3, 92%, 69%, 1);
--isabelline: hsla(40, 33%, 96%, 1);
--medium-champagne: hsla(48, 67%, 79%, 1);
*/