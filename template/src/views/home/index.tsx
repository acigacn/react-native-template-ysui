import React from 'react';
import {FlatList, Text, View, Image, TouchableHighlight} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';

import mockData from '@mock/mock';

export default class HomePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress(data) {
    console.log('onPress', data.item);
    this.props.navigation.navigate('SettingsPage', data.item);
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

  render() {
    console.log('数据长度：', mockData.length);
    return <FlatList style={{flex: 1}} data={mockData} windowSize={3} initialNumToRender={10} renderItem={this.renderItem} />;
  }
}
