import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Article from './components/Article/Article.js';
import Swiper from  'react-native-swiper';
import TinderSwiper from 'react-native-swiper-animated';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <TinderSwiper style={styles.wrapper} smoothTransition={false} loop={false} loopJump={0} backPressToBack={false}>
            <View style={styles.slide1}>
              <Article artikel={true} artikel2={true} headline="Trump and the Media!" text = "This big fucking thing is actually flying."/>
            </View>
            <View style={styles.slide2}>
              <Article artikel={false} artikel2={true} headline="Football" text = "This big fucking thing is actually flying."/>
            </View>
            <View style={styles.slide3}>
              <Article artikel={false} artikel2={false} headline="Gayparade" text = "This big fucking thing is actually flying."/>
            </View>
        </TinderSwiper>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {

  },

  slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }

});
