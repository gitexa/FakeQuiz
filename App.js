import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Article from './components/Article/Article.js';
import Swiper from  'react-native-swiper';

export default class App extends React.Component {
  render() {
    return (



      <View style={styles.container}>

        <Text>Open up App.js to start working on your app!</Text>

        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Article artikel={true} artikel2={true} headline="Trump and the Media!" text = "This big fucking thing is actually flying."/>
          </View>
          <View style={styles.slide2}>
            <Article artikel={false} artikel2={true} headline="Football" text = "This big fucking thing is actually flying."/>
          </View>
          <View style={styles.slide3}>
            <Article artikel={false} artikel2={false} headline="Gayparade" text = "This big fucking thing is actually flying."/>
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
