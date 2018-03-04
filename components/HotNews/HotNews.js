import React, { Component } from 'react';
import  { AppRegistry, StyleSheet, Text, View, Image , FlatList, List, Dimensions } from 'react-native';
import GridLayout from 'react-native-layout-grid';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

class HotNews extends React.Component {

  state = {
    selected: (new Map(): Map<string, boolean>),
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

   _onPressItem = (id: string) => {
     // updater functions are preferred for transactional updates
     this.setState((state) => {
       // copy the map rather than modifying state.
       const selected = new Map(state.selected);
       selected.set(id, !selected.get(id)); // toggle
       return {selected};
     });
   };

   _renderItem = ({item}) => (
     <MyListItem
       id={item.id}
       onPressItem={this._onPressItem}
       selected={!!this.state.selected.get(item.id)}
       title={item.title}
     />
   );

   _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {

    return (
      <View>
        <Text size={30} Hot Stories />
        
        <FlatList

          data = {this.props.daten}

          renderItem={({item}) => (
            <View>
              <Image style={{width: 350, height: 200}} source={item.image}/>
              <Text style={styles.listText}> {item.subtitle}</Text>
            </View>
          )}
        />
      </View>
    );
   }
}

export default HotNews;

const styles = StyleSheet.create({
  listItem: {
    fontSize: 400,
    flex: 0.7,
    justifyContent: 'center',
  },
  listText: {
    fontSize: 20,
    flex: 0.7,
    textAlign: 'center'
  }
});
