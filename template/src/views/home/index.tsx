import React from 'react';
import {View, Text} from 'react-native';
import BasePage from '@views/BasePage';
import {styles} from './style';

export default class HomePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>this is Home</Text>
      </View>
    );
  }
}
