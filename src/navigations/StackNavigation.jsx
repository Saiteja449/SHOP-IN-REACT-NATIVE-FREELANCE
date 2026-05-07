import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import LoginScreen from '../screens/authscreens/LoginScreen';
import OTPScreen from '../screens/authscreens/OTPScreen';
import TabNavigations from './TabNavigations';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MainTabs"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigations} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FBF3',
  },
});

export default StackNavigation;
