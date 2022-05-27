import React from 'react';
import {Platform} from 'react-native';
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
        headerTintColor: '#222',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
        animationTypeForReplace: 'pop',
        animation: 'slide_from_right',
        presentation: Platform.select({
          ios: 'card',
          android: 'transparentModal',
        }),
      }}
      initialRouteName={rootPage}>
      {generateStackScreens()}
    </Stack.Navigator>
  );
};

export default AppNavContainer;
