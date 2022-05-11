import React from 'react';
import Pages, {rootPage} from '@views/index';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const generateStackScreens = () => {
  return Object.keys(Pages).map(name => {
    return <Stack.Screen key={name} name={name} component={Pages[name]} />;
  });
};

const AppNavContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '零洞',
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          // fontSize: 16,
        },
      }}
      initialRouteName={rootPage}>
      {generateStackScreens()}
    </Stack.Navigator>
  );
};

export default AppNavContainer;