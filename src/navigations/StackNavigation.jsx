import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import OnboardingScreen from '../screens/Authscreens/OnboardingScreen';
import LoginScreen from '../screens/Authscreens/LoginScreen';
import OTPScreen from '../screens/Authscreens/OTPScreen';
import TabNavigations from './TabNavigations';
import KycBankScreen from '../screens/AccountScreens/KycBankScreen';
import SupportCenterScreen from '../screens/AccountScreens/SupportCenterScreen';
import ReportProblemScreen from '../screens/AccountScreens/ReportProblemScreen';
import SettingsScreen from '../screens/AccountScreens/SettingsScreen';
import CashbackHistoryScreen from '../screens/AccountScreens/CashbackHistoryScreen';
import NotificationsScreen from '../screens/AccountScreens/NotificationsScreen';
import BankDetailsScreen from '../screens/AccountScreens/BankDetailsScreen';
import AddBankAccountScreen from '../screens/AccountScreens/AddBankAccountScreen';



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
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigations} />
        <Stack.Screen name="KycBankScreen" component={KycBankScreen} />
        <Stack.Screen
          name="SupportCenterScreen"
          component={SupportCenterScreen}
        />
        <Stack.Screen
          name="ReportProblemScreen"
          component={ReportProblemScreen}
        />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen
          name="CashbackHistoryScreen"
          component={CashbackHistoryScreen}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
        />
        <Stack.Screen name="BankDetailsScreen" component={BankDetailsScreen} />
        <Stack.Screen
          name="AddBankAccountScreen"
          component={AddBankAccountScreen}
        />
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
