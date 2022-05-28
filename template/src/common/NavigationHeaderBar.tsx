import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import AppConfig from '@confs/AppConfig';
import CommonStyles from '@comms/CommonStyles';

/**
 * 导航按钮
 * @param props {renderView: func}
 * @returns React.ReactNode
 */
export const BarButtonView = (props: any) => {
  let leftBar = props.renderView();
  if (!leftBar) {
    leftBar = <View style={CommonStyles.navHeader.barBtn} />;
  }
  return leftBar;
};
BarButtonView.propTypes = {
  renderView: PropTypes.func,
};

/**
 * 自定义的导航标题视图
 * @param props {title: string, subtitle: string, titleStyles: object, subtitleStyles: object}
 * @returns React.ReactNode
 */
export const HeaderTitleBarView = (props: any) => {
  const titleStyles = [CommonStyles.navHeader.titleText];
  if (props.titleStyles && typeof props.titleStyles === 'object') {
    titleStyles.push(props.titleStyles);
  }
  const subTitleStyles = [CommonStyles.navHeader.subtitleText];
  if (props.subTitleStyles && typeof props.subTitleStyles === 'object') {
    subTitleStyles.push(props.subTitleStyles);
  }
  return (
    <View style={CommonStyles.navHeader.titleContainer}>
      <Text style={titleStyles} numberOfLines={1}>
        {props.title}
      </Text>
      {props.subtitle ? <Text style={subTitleStyles}>{props.subtitle}</Text> : null}
    </View>
  );
};
HeaderTitleBarView.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleStyles: PropTypes.object,
  subTitleStyles: PropTypes.object,
};
HeaderTitleBarView.defaultProps = {
  title: '零洞智能设备',
  subtitle: null,
};

/**
 * 自定义导航
 * @param props {leftBar: object, rightBar: object, titleBar: object, backgroundColor: string}
 * @returns React.ReactNode
 */
export const NavigationHeaderBar = (props: any) => {
  if (AppConfig.defaultNavigatorScreenOptions.headerShown || !props.headerBarShown) {
    // 使用系统自带的导航栏就不用自定义导航栏了
    return null;
  }
  return (
    <View style={[CommonStyles.navHeader.headerContainer, {backgroundColor: props.backgroundColor}]}>
      <BarButtonView renderView={props.renderLeftBar} />
      <HeaderTitleBarView {...props.titleBar} />
      <BarButtonView renderView={props.renderRightBar} />
    </View>
  );
};
NavigationHeaderBar.propTypes = {
  /**
   * 标题组件属性集
   */
  titleBar: PropTypes.shape({...HeaderTitleBarView.propTypes}),
  /**
   * 导航背景色，默认为白色
   */
  backgroundColor: PropTypes.string,
  /**
   * 自定义导航栏是否可见。默认为true
   */
  headerBarShown: PropTypes.bool,
  /**
   * 自定义返回按钮组件
   */
  renderLeftBar: PropTypes.func,
  /**
   * 自定义右边按钮组件
   */
  renderRightBar: PropTypes.func,
};
NavigationHeaderBar.defaultProps = {
  backgroundColor: AppConfig.mainBgColor,
  headerBarShown: true,
  renderLeftBar: null,
  renderRightBar: null,
};
