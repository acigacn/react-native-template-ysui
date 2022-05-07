import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme, View} from 'react-native';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'green',
  },
});

export default App;
