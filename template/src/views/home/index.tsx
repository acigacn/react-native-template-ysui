import React from 'react';
import {View, Text} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';
import {BarHeaderTitle, BarSettingButton} from '@comms/NavigationHeaderBar';

export default class HomePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.setOptions({
      headerTitle: this.renderHeaderTitle,
      headerRight: this.renderHeaderRight,
    });
  }

  openNativePageTest() {
    this.openPage('SettingsPage', {age: 10, name: 'thomas', region: '中国'}, {native: true});
  }

  onHeaderRightPress = () => {
    this.openPage('SettingsPage');
    // this.openNativePageTest();
  };

  renderHeaderTitle = (props): React.ReactNode => {
    return <BarHeaderTitle {...props} title={'XX智能设备'} subtitle={'蓝牙已连接'} subTitleStyles={{color: 'green'}} />;
  };
  renderHeaderRight = (): React.ReactNode => {
    return <BarSettingButton color={'#222'} onPress={this.onHeaderRightPress} />;
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
