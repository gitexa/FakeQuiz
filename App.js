import React from 'react';
import   {
  AppRegistry,
  StyleSheet,
  Text,
  View } from 'react-native';

import Swiper from  'react-native-swiper';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Finally!</Text>

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
});
