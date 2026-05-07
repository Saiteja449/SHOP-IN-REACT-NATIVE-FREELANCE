import React from 'react';
import { Text, View } from 'react-native';

import { homeStyles as styles } from '../../styles/styles';

const StoresScreen = () => {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderTitle}>Stores</Text>
      <Text style={styles.placeholderSub}>All store listings and brand filters will appear here.</Text>
    </View>
  );
};

export default StoresScreen;
