import React from 'react';
import { Text, View } from 'react-native';

import { homeStyles as styles } from '../../styles/styles';

const AccountScreen = () => {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderTitle}>Account</Text>
      <Text style={styles.placeholderSub}>Profile, settings, payment methods and support will be shown here.</Text>
    </View>
  );
};

export default AccountScreen;
