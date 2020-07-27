import React, { useState } from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native';

export const ClickCounter = (props) => {
  const [click,updateClick] = useState(0)
  return (
    <View>
      <TouchableOpacity onPress={ () => {updateClick(click+1)} } style={styles.button}>
        <Text style={styles.text}>I have been clicked {click} { click > 1 ? 'times' : 'time'} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ff3366',
    minWidth: 300
  },
  text: {
    color: '#ffffdd',
    textAlign: 'center'
  }
})