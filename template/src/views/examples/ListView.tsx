import React from 'react';
import {FlatList, Text, View, Image, TouchableHighlight, StyleSheet} from 'react-native';
import BasePage from '@views/base/BasePage';

import mockData from '@mock/mock';

export default class ListViewDemo extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress(data) {
    console.log('onPress', data.item);
    this.props.navigation.push('ListDetailDemo', data.item);
  }

  renderItem = data => {
    const {item, index} = data;
    const {url, title, description} = item;
    return (
      <TouchableHighlight
        key={`cl-${index}`}
        underlayColor={'#FFF'}
        onPress={() => {
          this.onPress(data);
        }}>
        <View style={styles.itemContainerStyle}>
          <Image style={styles.imageStyle} source={{uri: url}} />
          <View style={styles.textContainerStyle}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  renderContent() {
    return <FlatList data={mockData} windowSize={3} initialNumToRender={10} renderItem={this.renderItem} />;
  }
}

const styles = StyleSheet.create({
  itemContainerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    height: 90,
  },
  textContainerStyle: {
    flex: 1,
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: 65,
    height: 65,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginTop: 8,
  },
  description: {
    fontSize: 15,
    color: 'blue',
    marginTop: 12,
  },
});
