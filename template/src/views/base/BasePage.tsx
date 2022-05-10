import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BasePageProps, BasePageState} from './types';
// import {SafeAreaView} from 'react-native-safe-area-context';

export default class BasePage extends React.Component<BasePageProps, BasePageState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // ------------------------ 统一处理页面返回 ----------------------------------------
  /**
   * 返回上一级页面，如果RN栈返回到根了，则直接退出RN插件
   */
  back() {
    if (this.props.navigation.canGoBack()) {
      return this.props.navigation.goBack();
    }
    // TODO. 调用原生返回
    console.log('原生返回,退出RCTViewController');
  }
  /**
   * 返回至RN栈根
   */
  backToRoot() {
    this.props.navigation.popToTop();
  }

  // ------------------------ 统一处理页面打开 ----------------------------------------
  openPage(name: string, params?: object | undefined, multimes?: boolean) {
    this.openPageFromUrl(name, params, multimes);
  }
  openPageFromUrl(url: string, params?: object | undefined, multimes?: boolean) {
    if (multimes) {
      return this.props.navigation.navigate('', params);
    }
    return this.props.navigation.push('', params);
  }

  // ------------------------ 统一处理页面替换 ----------------------------------------
  replacePage(name: string, params?: object | undefined) {
    this.replacePageFromUrl(name, params);
  }
  replacePageFromUrl(url: string, params?: object | undefined) {
    this.props.navigation.replace(url, params);
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
