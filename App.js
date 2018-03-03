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

        <Swiper style={styles.wrapper} showsButtons={true}>
  <View style={styles.slide1}>
    <Text style={styles.text}>Hello Swiper</Text>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>Beautiful</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>And simple</Text>
  </View>
</Swiper>
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
