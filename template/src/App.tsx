import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from '@comms/RootNavigation';
import StorageManager from '@helps/StorageManager';
import AppNavContainer from './AppNavContainer';

/**
 * 缓存初始化数据
 * @param props 客户端传递的初始化数据
 */
const prepareAppData = (props: any) => {
  try {
    if (props && (typeof props === 'object' || typeof props === 'string')) {
      StorageManager.setItem('initialProps', props);
    }
  } catch (error) {
    console.log('prepareAppData', error);
  }
};

const App = (props: any) => {
  prepareAppData(props);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <AppNavContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
