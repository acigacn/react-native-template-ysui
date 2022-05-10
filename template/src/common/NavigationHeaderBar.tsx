import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconButton from './widgets/IconButton';
// import PropTypes from 'prop-types';

export const BarHeaderTitle = (props: any) => {
  console.log('BarHeaderTitle props:', props);
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle} numberOfLines={1}>
        卧室温湿度
      </Text>
      <Text style={styles.headerSubtitle}>已连接蓝牙网关</Text>
    </View>
  );
};

export const BarBackButton = (props: any) => {
  return <IconButton name={'ios-arrow-back'} style={styles.backBtn} onPress={props.onPress} />;
};

export const BarSettingButton = (props: any) => {
  return <IconButton name={'ios-arrow-back'} style={styles.setBtn} onPress={props.onPress} />;
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
