import React from 'react';
import {View, Text} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';

export default class HomePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      title: '这是首页',
      headerTintColor: '#222',
      headerShown: false,
      headerTransparent: true,
      headerTitleStyle: {
        fontSize: 15,
        color: '#222',
      },
    };
  }

  openNativePageTest() {
    this.openPage('SettingsPage', {age: 10, name: 'thomas', region: '中国'}, {native: true});
  }

  onHeaderRightPress = () => {
    this.openPage('SettingsPage');
    // this.openNativePageTest();
  };

  renderContent() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.status}>
          <Text style={styles.tip}>设备状态信息区</Text>
        </View>
        <View style={styles.controlBar}>
          <Text style={styles.tip}>设备状态控制区</Text>
        </View>
      </View>
    );
  }
}
