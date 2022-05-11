import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@comms/RootNavigation';
import AppNavContainer from './AppNavContainer';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavContainer />
    </NavigationContainer>
  );
};

export default App;
