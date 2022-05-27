import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppStatusBar from '@comms/widgets/AppStatusBar';
import {NavHeaderView, BarBackButton} from '@comms/NavigationHeaderBar';
import {BasePageProps, BasePageState, PageOptions} from './types';
import NavigatorHelper from '@helps/NavigatorHelper';

export default class BasePage extends React.Component<BasePageProps, BasePageState> {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      // header: this.renderCustomizedHeader,
      headerLeft: this.renderHeaderLeft,
    });
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

  // ------------------------ 自定义视图 ----------------------------------------
  renderCustomizedHeader = (props): React.ReactNode => {
    return <NavHeaderView {...props} />;
  };

  renderHeaderLeft = (): React.ReactNode => {
    return <BarBackButton color={'#222'} onPress={this.back} />;
  };

  /**
   * 页面内容渲染，用子类去覆盖。此处勿动！
   */
  renderContent(): React.ReactNode {
    throw new Error('Method renderContent not implemented.');
  }

  render() {
    return (
      <SafeAreaView edges={['top', 'left', 'right']} style={{flex: 1, backgroundColor: '#fff'}}>
        <AppStatusBar barStyle={this.state.statusBarStyle} />
        {this.renderContent()}
      </SafeAreaView>
    );
  }
}
