import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabGift from '../icons/TabGift.svg';
import TabGrid from '../icons/TabGrid.svg';
import TabHome from '../icons/TabHome.svg';
import TabStore from '../icons/TabStore.svg';
import TabUser from '../icons/TabUser.svg';
import AccountScreen from '../screens/tabs/AccountScreen';
import CategoriesScreen from '../screens/tabs/CategoriesScreen';
import GiftCardsScreen from '../screens/tabs/GiftCardsScreen';
import HomeScreen from '../screens/tabs/HomeScreen';
import StoresScreen from '../screens/tabs/StoresScreen';
import { tabNavigationStyles as styles } from '../styles/styles';

const Tab = createBottomTabNavigator();

const renderIcon = (Icon, focused) => (
  <View style={[styles.iconWrap, focused && styles.iconWrapFocused]}>
    <Icon width={20} height={20} color={focused ? '#FFFFFF' : '#6B7280'} />
  </View>
);

const getScreenOptions = ({ route }) => ({
  headerShown: false,
  tabBarStyle: styles.tabBar,
  tabBarLabelStyle: styles.tabLabel,
  tabBarActiveTintColor: '#1F9E43',
  tabBarInactiveTintColor: '#6B7280',
  tabBarIcon: ({ focused }) => {
    if (route.name === 'Home') return renderIcon(TabHome, focused);
    if (route.name === 'Stores') return renderIcon(TabStore, focused);
    if (route.name === 'Categories') return renderIcon(TabGrid, focused);
    if (route.name === 'Gift Cards') return renderIcon(TabGift, focused);
    return renderIcon(TabUser, focused);
  },
  tabBarLabel: ({ focused }) => (
    <Text
      style={[
        styles.tabLabel,
        focused ? styles.tabLabelActive : styles.tabLabelInactive,
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
      <Tab.Screen name="Stores" component={StoresScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Gift Cards" component={GiftCardsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigations;
