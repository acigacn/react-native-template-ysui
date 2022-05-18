import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@comms/RootNavigation';
import LocalStorage from '@helps/LocalStorage';
import AppNavContainer from './AppNavContainer';

/**
 * 缓存初始化数据
 * @param props 客户端传递的初始化数据
 */
const prepareAppData = (props: any) => {
  try {
    LocalStorage.setItem('initialProps', JSON.stringify(props));
  } catch (error) {
    console.log(error);
  }
};

const App = (props: any) => {
  prepareAppData(props);
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavContainer />
    </NavigationContainer>
  );
};

export default App;
