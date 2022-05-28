import React from 'react';
import {View} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';

export default class SettingsPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      titleBar: {
        title: '设置',
      },
    };
  }

  renderContent() {
    return <View style={styles.pageContainer} />;
  }
}
