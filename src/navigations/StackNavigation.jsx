import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import OnboardingScreen from '../screens/Authscreens/OnboardingScreen';
import SplashScreen from '../screens/Authscreens/SplashScreen';
import LoginScreen from '../screens/Authscreens/LoginScreen';
import OTPScreen from '../screens/Authscreens/OTPScreen';
import RegisterScreen from '../screens/Authscreens/RegisterScreen';
import EditProfileScreen from '../screens/AccountScreens/EditProfileScreen';
import TabNavigations from './TabNavigations';
import KycBankScreen from '../screens/AccountScreens/KycBankScreen';
import SupportCenterScreen from '../screens/AccountScreens/SupportCenterScreen';
import ReportProblemScreen from '../screens/AccountScreens/ReportProblemScreen';
import SettingsScreen from '../screens/AccountScreens/SettingsScreen';
import NotificationsScreen from '../screens/AccountScreens/NotificationsScreen';
import BankDetailsScreen from '../screens/AccountScreens/BankDetailsScreen';
import AddBankAccountScreen from '../screens/AccountScreens/AddBankAccountScreen';
import GiftCardCheckoutScreen from '../screens/TabScreens/GiftCardCheckoutScreen';
import SellConfirmationScreen from '../screens/TabScreens/SellConfirmationScreen';
import SellGiftCardScreen from '../screens/TabScreens/SellGiftCardScreen';
import PurchaseSuccessScreen from '../screens/TabScreens/PurchaseSuccessScreen';
import WalletScreen from '../screens/TabScreens/WalletScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
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
          name="NotificationsScreen"
          component={NotificationsScreen}
        />
        <Stack.Screen name="BankDetailsScreen" component={BankDetailsScreen} />
        <Stack.Screen
          name="AddBankAccountScreen"
          component={AddBankAccountScreen}
        />
        <Stack.Screen
          name="GiftCardCheckoutScreen"
          component={GiftCardCheckoutScreen}
        />
        <Stack.Screen
          name="SellConfirmationScreen"
          component={SellConfirmationScreen}
        />
        <Stack.Screen name="SellGiftCardScreen" component={SellGiftCardScreen} />
        <Stack.Screen
          name="PurchaseSuccessScreen"
          component={PurchaseSuccessScreen}
        />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
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
