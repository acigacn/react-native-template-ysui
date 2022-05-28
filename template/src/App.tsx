import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '@comms/RootNavigation';
import StorageManager from '@helps/StorageManager';
import AppConfig from '@confs/AppConfig';
import Pages, {rootPage} from '@views/index';

/**
 * 缓存初始化数据
 * @param props 客户端传递的初始化数据
 */
const prepareAppData = async (props: any) => {
  try {
    if (props && (typeof props === 'object' || typeof props === 'string')) {
      StorageManager.setItem('initialProps', props);
    }
  } catch (error) {
    console.log('prepareAppData', error);
  }
};

/**
 * 创建栈导航器
 */
const Stack = createNativeStackNavigator();
const generateStackScreens = () => {
  return Object.keys(Pages).map(name => {
    return <Stack.Screen key={name} name={name} component={Pages[name]} />;
  });
};

const App = (props: any) => {
  prepareAppData(props);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={rootPage} screenOptions={AppConfig.defaultNavigatorScreenOptions as any}>
          {generateStackScreens()}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
