const { Component } = require("react");
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View, TouchableWithoutFeedback} from 'react-native'

export const ClickMeBro = (props) => {
  return (
    <View>
      <TouchableHighlight style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: 200,
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
})