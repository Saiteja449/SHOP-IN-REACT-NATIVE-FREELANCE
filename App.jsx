import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';

const App = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);

export default App;