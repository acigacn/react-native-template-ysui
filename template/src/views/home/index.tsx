import React from 'react';
import {View, Text} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';
import {SettingBarButton} from '@comms/NavigationBarButton';

export default class HomePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      titleBar: {
        title: '主标题（页面名称）',
        subtitle: '副标题（设备状态）',
      },
    };
  }

  onSettingBarPress = () => {
    // this.openPage('SettingsPage', {age: 10, name: 'thomas', region: '中国'}, {native: true});
    this.openPage('SettingsPage');
  };
  renderHeaderRightBar = () => {
    return <SettingBarButton onPress={this.onSettingBarPress} />;
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
