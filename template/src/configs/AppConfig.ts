import {Platform} from 'react-native';
import Colors from '@conts/Colors';

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,

  // App StatusBar config here.
  statusBar: {
    animated: false,
    hidden: false,
    backgroundColor: Colors.backgroundColor,
    translucent: false,

    // enum('default', 'light-content', 'dark-content')
    barStyle: 'dark-content',

    networkActivityIndicatorVisible: false,
  },

  // App Navigation config here.
  defaultNavigatorScreenOptions: {
    title: '零洞',
    animationTypeForReplace: 'pop',
    animation: 'slide_from_right',
    presentation: Platform.select({
      ios: 'card',
      android: 'transparentModal',
    }),
    headerShown: false,
    headerTransparent: true,
    headerTintColor: Colors.tintColor,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontSize: 15,
    },
  },
};
