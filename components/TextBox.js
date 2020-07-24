const { Component } = require("react");
import React from 'react';
import {Text,  View } from 'react-native'

export const TextBox = (props) => {
  return (
    <View>     
        <Text style={{fontSize: props.size, color: props.colour}}>{props.text}</Text>
    </View>
  )
}

