import React from 'react';
import {FontType} from '@conts/IconType';
import CommonStyles from '@comms/CommonStyles';
import IconButton from './widgets/IconButton';

/**
 * 导航返回按钮
 */
export const BackBarButton = (props: any) => {
  return <IconButton type={FontType.materialIcons} name={props.name || 'keyboard-backspace'} style={CommonStyles.navHeader.barBtn} {...props} />;
};

/**
 * 导航设置按钮
 */
export const SettingBarButton = (props: any) => {
  return <IconButton type={FontType.materialCommunityIcons} name={props.name || 'dots-vertical'} style={CommonStyles.navHeader.barBtn} {...props} />;
};
