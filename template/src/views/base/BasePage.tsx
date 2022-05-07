import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

export default class BasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 子类去覆盖
   */
  renderContent(): React.ReactNode {
    throw new Error('Method renderContent not implemented.');
  }

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
