import {StyleSheet} from 'react-native';
import Colors from '@conts/Colors';
import Layout from '@conts/Layout';

const CommonStyles = {
  //状态栏样式定义
  statusBar: {
    width: Layout.window.width,
    height: 20,
    backgroundColor: Colors.tintColor,
  },
  // 导航栏样式定义
  navHeader: StyleSheet.create({
    headerContainer: {
      width: '100%',
      height: 44,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    titleContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      color: '#222',
      fontSize: 15,
      textAlign: 'center',
    },
    subtitleText: {
      color: '#888',
      fontSize: 11,
      fontWeight: 'normal',
    },
    barBtn: {
      width: 48,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
};

export default CommonStyles;
