import React, {PureComponent} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import PropTypes from 'prop-types';
import AppConfig from '@confs/AppConfig';
import CommonStyles from '@comms/CommonStyles';

export default class AppStatusBar extends PureComponent {
  static propTypes = {
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string,
    translucent: PropTypes.bool,
    barStyle: PropTypes.string,
    networkActivityIndicatorVisible: PropTypes.bool,
  };

  static defaultProps = AppConfig.statusBar;

  render() {
    const {backgroundColor} = this.props as any;
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      return <StatusBar {...this.props} />;
    } else {
      return <View style={[CommonStyles.statusBar, {backgroundColor: backgroundColor}]} />;
    }
  }
}
