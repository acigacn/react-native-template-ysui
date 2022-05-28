import React from 'react';
import {View, Text} from 'react-native';
import IconButton from './widgets/IconButton';
import PropTypes from 'prop-types';
import {FontType} from '@conts/IconType';
import CommonStyles from '@comms/CommonStyles';

export const BarHeaderTitle = (props: any) => {
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
BarHeaderTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleStyles: PropTypes.object,
  subTitleStyles: PropTypes.object,
};
BarHeaderTitle.defaultProps = {
  title: '零洞智能设备',
  subtitle: '蓝牙设备已连接',
};

export const BarBackButton = (props: any) => {
  return <IconButton type={FontType.materialIcons} name={'keyboard-backspace'} style={CommonStyles.navHeader.barBtn} {...props} />;
};
BarBackButton.propTypes = {
  ...IconButton.propTypes,
};

export const BarSettingButton = (props: any) => {
  return <IconButton type={FontType.materialCommunityIcons} name={'dots-vertical'} style={CommonStyles.navHeader.barBtn} {...props} />;
};
BarSettingButton.propTypes = {
  ...IconButton.propTypes,
};

export const NavHeaderView = (props: any) => {
  console.log('NavHeaderView props', props);
  return (
    <View style={[CommonStyles.navHeader.headerContainer, {marginTop: 0}]}>
      <BarBackButton />
      <BarHeaderTitle />
      <BarSettingButton />
    </View>
  );
};
