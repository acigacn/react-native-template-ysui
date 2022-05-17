import React from 'react';
import {View} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';
import {BarHeaderTitle, BarSettingButton} from '@comms/NavigationHeaderBar';

export default class HomePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.setOptions({
      headerTransparent: true,
      headerTitle: this.renderHeaderTitle,
      headerRight: this.renderHeaderRight,
    });
  }

  onHeaderRightPress = () => {
    this.openPage('SettingsPage');
  };

  renderHeaderTitle = (props): React.ReactNode => {
    return <BarHeaderTitle {...props} title={'XX智能设备'} subtitle={'蓝牙已连接'} subTitleStyles={{ color: 'green'}} />;
  };
  renderHeaderRight = (): React.ReactNode => {
    return <BarSettingButton color={'#222'} onPress={this.onHeaderRightPress} />;
  };

  renderContent() {
    return <View style={styles.pageContainer} />;
  }
}
