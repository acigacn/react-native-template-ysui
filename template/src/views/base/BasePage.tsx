import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BasePageProps, BasePageState} from './types';
import AppStatusBar from '@comms/widgets/AppStatusBar';
import {BarHeaderTitle, BarBackButton, BarSettingButton} from '@comms/NavigationHeaderBar';

export default class BasePage extends React.Component<BasePageProps, BasePageState> {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.setOptions({
      headerTitle: this.renderHeaderTitle,
      headerLeft: this.renderHeaderLeft,
      headerRight: this.renderHeaderRight,
    });
  }

  // ------------------------ 统一处理页面返回 ----------------------------------------
  /**
   * 返回上一级页面，如果RN栈返回到根了，则直接退出RN插件
   */
  back = () => {
    if (this.props.navigation.canGoBack()) {
      return this.props.navigation.goBack();
    }
    // TODO. 调用原生返回
    console.log('原生返回,退出RCTViewController');
  };
  /**
   * 返回至RN栈根
   */
  backToRoot = () => {
    this.props.navigation.popToTop();
  };
  onHeaderRightPress = () => {
    alert('设置页还没开发');
  };

  // ------------------------ 统一处理页面打开 ----------------------------------------
  openPage = (name: string, params?: object | undefined, multimes?: boolean) => {
    this.openPageFromUrl(name, params, multimes);
  };
  openPageFromUrl = (url: string, params?: object | undefined, multimes?: boolean) => {
    if (multimes) {
      return this.props.navigation.navigate('', params);
    }
    return this.props.navigation.push('', params);
  };

  // ------------------------ 统一处理页面替换 ----------------------------------------
  replacePage = (name: string, params?: object | undefined) => {
    this.replacePageFromUrl(name, params);
  };
  replacePageFromUrl = (url: string, params?: object | undefined) => {
    this.props.navigation.replace(url, params);
  };

  // ------------------------ 自定义视图 ----------------------------------------
  renderHeaderTitle = (props): React.ReactNode => {
    return <BarHeaderTitle {...props} />;
  };
  renderHeaderLeft = (): React.ReactNode => {
    return <BarBackButton onPress={this.back} />;
  };
  renderHeaderRight = (): React.ReactNode => {
    return <BarSettingButton onPress={this.onHeaderRightPress} />;
  };

  /**
   * 页面内容渲染，用子类去覆盖。此处勿动！
   */
  renderContent(): React.ReactNode {
    throw new Error('Method renderContent not implemented.');
  }

  render() {
    return (
      <>
        <AppStatusBar />
        <View style={styles.container}>{this.renderContent()}</View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
