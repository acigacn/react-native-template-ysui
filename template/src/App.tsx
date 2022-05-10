import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavContainer from './AppNavContainer';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavContainer />
    </NavigationContainer>
  );
};

export default App;
