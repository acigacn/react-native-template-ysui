import React, {PureComponent} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import PropTypes from 'prop-types';
import AppConfig from '@confs/AppConfig';
import GlobalStyles from '@conts/GlobalStyles';

export default class AppStatusBar extends PureComponent {
  static propTypes = {
    animated: PropTypes.bool,
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string,
    translucent: PropTypes.bool,
    barStyle: PropTypes.string,
    networkActivityIndicatorVisible: PropTypes.bool,
    showHideTransition: PropTypes.string,
  };

  static defaultProps = AppConfig.statusBar;

  render() {
    const {backgroundColor} = this.props as any;
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      return <StatusBar {...this.props} />;
    } else {
      return <View style={[GlobalStyles.statusBar, {backgroundColor: backgroundColor}]} />;
    }
  }
}
