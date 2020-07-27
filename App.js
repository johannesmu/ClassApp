import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// custom component
import { TextBox } from './components/TextBox';
import { ClickCounter } from './components/ClickCounter';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.greeting}>Hello World!</Text>
//       <Button title="Click me" color="blue"/>
//       <StatusBar style="auto" />
//       <TextBox color="green" size={24} text="Custom Component" />
//       <TextBox color="purple" size={18} text="Custom Text 2" />
//       {/* click counter component */}
//       <ClickCounter/>
//       <ClickCounter/>
//     </View>
//   );
// }

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      secret: 0
    }
  }
  render() {
    return (
      <View>
        <Text>Guessing Game</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: 'red',
    fontSize: 36
  }
});
