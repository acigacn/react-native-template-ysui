import Colors from '@conts/Colors';

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,

  // App StatusBar config here.
  statusBar: {
    animated: false,
    hidden: false,
    backgroundColor: Colors.tintColor,
    translucent: false,

    // enum('default', 'light-content', 'dark-content')
    barStyle: 'dark-content',

    networkActivityIndicatorVisible: false,
  },
};
