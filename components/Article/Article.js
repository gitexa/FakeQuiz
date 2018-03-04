import React, { Component } from 'react';
import  { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

class Article extends React.Component {

  render() {

    let a = (this.props.artikel) ? require("./article1.png") : (this.props.artikel2) ? require("./article2.png") : require("./article3.png");

    /*if(this.props.artikel = "2") {
      a = "./article2.png";
    } else if (this.props.artikel = "3") {
      a = "./article3.png";
    }*/

    /*switch (s) {
      case "1": a = './article1.png'; break;
      case "2": a = './article2.png'; break;
      case "3": a = './article3.png'; break;
    }*/

    return (
      <View>
        <Image
          style={{width: 350, height: 300}}
          source={a} />
        <Text style = {styles.headline}> {this.props.headline} </Text>
        <Text style = {styles.summary}> {this.props.text} </Text>
      </View>
     );
   }
}

export default Article;

const styles = StyleSheet.create({
  headline: {
    fontSize: 40,
    flex: 0.7,
    textAlign: 'center',
    justifyContent: 'center',
  },
  summary: {
    fontSize: 30,
    flex: 2,
    textAlign: 'center',
    justifyContent: 'center',
  }


});
