import React from 'react';
import Views, {rootPage} from '@views/index';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={rootPage}>
        <Stack.Screen name="HomePage" component={Views.HomePage} />
        <Stack.Screen name="SettingsPage" component={Views.SettingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
