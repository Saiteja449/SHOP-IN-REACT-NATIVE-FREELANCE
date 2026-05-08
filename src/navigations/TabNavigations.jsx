import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabGift from '../Icons/TabGift.svg';
import TabGrid from '../Icons/TabGrid.svg';
import TabHome from '../Icons/TabHome.svg';
import TabStore from '../Icons/TabStore.svg';
import TabUser from '../Icons/TabUser.svg';
import AccRupee from '../Icons/AccRupee.svg';
import AccountScreen from '../screens/TabScreens/AccountScreen';
import CashbackScreen from '../screens/TabScreens/CashbackScreen';

import GiftCardsScreen from '../screens/TabScreens/GiftCardsScreen';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import { tabNavigationStyles as styles } from '../Styles/styles';

const Tab = createBottomTabNavigator();

const renderIcon = (Icon, focused, isCashback = false) => (
  <View style={[styles.iconWrap, focused && styles.iconWrapFocused]}>
    <Icon width={24} height={24} color={focused ? (isCashback ? '#16A34A' : '#FF5A00') : '#374151'} />
  </View>
);

const getScreenOptions = ({ route }) => ({
  headerShown: false,
  tabBarStyle: styles.tabBar,
  tabBarLabelStyle: styles.tabLabel,
  tabBarActiveTintColor: route.name === 'Cashback' ? '#16A34A' : '#FF5A00',
  tabBarInactiveTintColor: '#374151',
  tabBarIcon: ({ focused }) => {
    if (route.name === 'Home') return renderIcon(TabHome, focused);
    if (route.name === 'Cashback') return renderIcon(AccRupee, focused, true);

    if (route.name === 'Gift Cards') return renderIcon(TabGift, focused);
    return renderIcon(TabUser, focused);
  },
  tabBarLabel: ({ focused }) => (
    <Text
      style={[
        styles.tabLabel,
        focused ? (route.name === 'Cashback' ? { color: '#16A34A', fontFamily: 'Inter_18pt-Bold' } : styles.tabLabelActive) : styles.tabLabelInactive,
      ]}
    >
      {route.name}
    </Text>
  ),
});

const TabNavigations = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={getScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cashback" component={CashbackScreen} />
      <Tab.Screen name="Gift Cards" component={GiftCardsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>

  );
};

export default TabNavigations;
