import React, { Component } from 'react';
import {Text,  View } from 'react-native'

export class Game extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: this.props.playing
    }
  }
  render() {
    if( this.state.isPlaying ) {
      <View>
        <Text>The Game is playing</Text>
      </View>
    }
  }
}

const styles = StyleSheet.create({
  game: {

  }
})