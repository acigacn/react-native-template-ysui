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
      headerTitle: this.renderHeaderTitle,
      headerRight: this.renderHeaderRight,
    });
  }

  onHeaderRightPress = () => {
    // this.openPage('');
    this.props.navigation.push('SettingsPage');
  };

  renderHeaderTitle = (props): React.ReactNode => {
    return <BarHeaderTitle {...props} />;
  };
  renderHeaderRight = (): React.ReactNode => {
    return <BarSettingButton onPress={this.onHeaderRightPress} />;
  };

  renderContent() {
    return <View style={styles.pageContainer} />;
  }
}
