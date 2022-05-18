import React from 'react';
import {View} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';
import LocalStorage from '@helps/LocalStorage';

export default class SettingsPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.setOptions({
      title: '设置',
      headerTransparent: false,
    });
  }

  componentDidMount() {
    console.log('initialProps is: ', LocalStorage.getItem('initialProps'));
  }

  renderContent() {
    return <View style={styles.pageContainer} />;
  }
}
