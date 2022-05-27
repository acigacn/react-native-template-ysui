import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconButton from './widgets/IconButton';
import PropTypes from 'prop-types';
import {FontType} from '@conts/IconType';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  titleText: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleText: {
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

export const BarHeaderTitle = (props: any) => {
  const titleStyles = [styles.titleText];
  if (props.titleStyles && typeof props.titleStyles === 'object') {
    titleStyles.push(props.titleStyles);
  }
  const subTitleStyles = [styles.subtitleText];
  if (props.subTitleStyles && typeof props.subTitleStyles === 'object') {
    subTitleStyles.push(props.subTitleStyles);
  }
  return (
    <View style={styles.titleContainer}>
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
  title: '零洞智能',
  subtitle: null,
};

export const BarBackButton = (props: any) => {
  return <IconButton type={FontType.materialIcons} name={'keyboard-backspace'} style={styles.backBtn} {...props} />;
};
BarBackButton.propTypes = {
  ...IconButton.propTypes,
};

export const BarSettingButton = (props: any) => {
  return <IconButton type={FontType.materialCommunityIcons} name={'dots-vertical'} style={styles.setBtn} {...props} />;
};
BarSettingButton.propTypes = {
  ...IconButton.propTypes,
};

export const NavHeaderView = (props: any) => {
  const insets = useSafeAreaInsets();
  const {headerLeft, headerTitle, headerRight} = props.options || {};
  const HeaderLeft = (l: any) => headerLeft(l);
  const HeaderTitle = (t: any) => headerTitle(t);
  const HeaderRight = (r: any) => headerRight(r);
  return (
    <View style={[styles.headerContainer, {marginTop: insets.top, marginBottom: 0}]}>
      <HeaderLeft />
      <HeaderTitle />
      <HeaderRight />
    </View>
  );
};
