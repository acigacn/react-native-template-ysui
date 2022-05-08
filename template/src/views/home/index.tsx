import React from 'react';
import {View} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';

export default class HomePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderContent() {
    return <View style={styles.pageContainer} />;
  }
}
