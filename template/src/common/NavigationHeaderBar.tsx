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
      {props.subtitle ? <Text style={styles.headerSubtitle}>{props.subtitle}</Text> : null}
    </View>
  );
};

export const BarBackButton = (props: any) => {
  return <IconButton type={FontType.materialIcons} name={'keyboard-backspace'} style={styles.backBtn} {...props} />;
};

export const BarSettingButton = (props: any) => {
  return <IconButton type={FontType.materialCommunityIcons} name={'dots-vertical'} style={styles.setBtn} {...props} />;
};

BarHeaderTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

BarHeaderTitle.defaultProps = {
  title: '零洞智能',
  subtitle: null,
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
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#888',
    fontSize: 11,
    fontWeight: 'normal',
  },
  backBtn: {
    marginLeft: 5,
  },
  setBtn: {
    marginRight: 5,
  },
});
