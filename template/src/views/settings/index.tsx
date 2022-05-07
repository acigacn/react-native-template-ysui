import React from 'react';
import {View, Text, Image} from 'react-native';
import BasePage from '@views/base/BasePage';
import {styles} from './style';

export default class SettingsPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {};
  }

  moreDesc = '我曾经跨过山和大海，也穿过人山人海，我曾经拥有着的一切，转眼都飘散如烟，我曾经失落失望失掉所有方向，直到看见平凡才是唯一的答案';

  renderContent() {
    const {url, title, description} = this.props.route.params;
    return (
      <View style={styles.itemContainerStyle}>
        <Image style={styles.imageStyle} source={{uri: url}} />
        <View style={styles.textContainerStyle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.moreDesc}>{this.moreDesc}</Text>
        </View>
      </View>
    );
  }
}
