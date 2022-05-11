import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconButton from './widgets/IconButton';
import PropTypes from 'prop-types';
import {FontType} from '@conts/IconType';

export const BarHeaderTitle = (props: any) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle} numberOfLines={1}>
        {props.title}
      </Text>
      <Text style={styles.headerSubtitle}>{props.subtitle}</Text>
    </View>
  );
};

export const BarBackButton = (props: any) => {
  return <IconButton type={FontType.materialIcons} name={'keyboard-backspace'} style={styles.backBtn} onPress={props.onPress} />;
};

export const BarSettingButton = (props: any) => {
  return <IconButton type={FontType.materialCommunityIcons} name={'dots-vertical'} style={styles.setBtn} onPress={props.onPress} />;
};

BarHeaderTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

BarHeaderTitle.defaultProps = {
  title: '卧室温湿度',
  subtitle: '已连接蓝牙网关',
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#e5e5e5',
    fontSize: 11,
    fontWeight: 'normal',
  },
  backBtn: {
    marginLeft: 13,
  },
  setBtn: {
    marginRight: 13,
  },
});
