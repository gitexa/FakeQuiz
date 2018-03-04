import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Article from './components/Article/Article.js';
import HotNews from './components/HotNews/HotNews.js'
import Swiper from  'react-native-swiper';
import TinderSwiper from 'react-native-swiper-animated';

const image1 = require('./article1.png')
const image2 = require('./article2.png')
const image3 = require('./article3.png')

const data = [
    {
      name: 'Artikel_1',
      image: image2,
    },
    {
      name: 'Artikel_2',
      image: image1,
      subtitle: ' '
    },
    {
      name: 'Artikel_3',
      image: image3,
      subtitle: ' '
    }
]




export default class App extends React.Component {

  render() {

    return (


      <View style={styles.container}>

        <HotNews daten={data}/>

      </View >

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
