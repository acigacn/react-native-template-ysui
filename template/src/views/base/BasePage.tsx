import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppConfig from '@confs/AppConfig';
import AppStatusBar from '@comms/widgets/AppStatusBar';
import {NavigationHeaderBar} from '@comms/NavigationHeaderBar';
import {BasePageProps, BasePageState, PageOptions} from './types';
import NavigatorHelper from '@helps/NavigatorHelper';
import {BackBarButton} from '@comms/NavigationBarButton';

export default class BasePage extends React.Component<BasePageProps, BasePageState> {
  constructor(props) {
    super(props);
  }

  // ------------------------ 统一处理页面溃退、打开、替换 --------------------------------------
  back = () => {
    NavigatorHelper.backPage();
  };
  backToRoot = () => {
    NavigatorHelper.backToRootPage();
  };
  openPage = (page: string, params?: object, options?: PageOptions) => {
    NavigatorHelper.openPage(page, params, options);
  };
  replacePage = (page: string, params?: object) => {
    NavigatorHelper.replacePage(page, params);
  };

  // ------------------------ 自定义导航栏组件 开始------------------------------//
  renderHeaderLeftBar = (): React.ReactNode => {
    return <BackBarButton onPress={this.back} />;
  };
  renderHeaderRightBar = (): React.ReactNode => {
    return null;
  };
  renderCustomizedHeader = (): React.ReactNode => {
    const {headerBarShown, backgroundColor, titleBar} = this.state;
    return <NavigationHeaderBar headerBarShown={headerBarShown} backgroundColor={backgroundColor} titleBar={titleBar} renderLeftBar={this.renderHeaderLeftBar} renderRightBar={this.renderHeaderRightBar} />;
  };
  // ------------------------ 自定义导航栏组件 结束------------------------------//

  /**
   * 页面内容渲染，用子类去覆盖。此处勿动！
   */
  renderContent(): React.ReactNode {
    throw new Error('Method renderContent not implemented.');
  }

  render() {
    const {backgroundColor, statusBarStyle} = this.state;
    return (
      <SafeAreaView edges={['top', 'left', 'right']} style={{flex: 1, backgroundColor: backgroundColor || AppConfig.mainBgColor}}>
        <AppStatusBar barStyle={statusBarStyle} />
        {this.renderCustomizedHeader()}
        {this.renderContent()}
      </SafeAreaView>
    );
  }
}
