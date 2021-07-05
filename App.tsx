import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './src/navigation/AppNavigation';
import React from 'react';
import {Column} from './src/view/components/columns/columns';
import {Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {AppNavigation} from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  navigatorAddButton: {
    width: 16,
    height: 16,
    marginRight: 15,
  },
});
