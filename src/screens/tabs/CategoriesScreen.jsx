import React from 'react';
import { Text, View } from 'react-native';

import { homeStyles as styles } from '../../styles/styles';

const CategoriesScreen = () => {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderTitle}>Categories</Text>
      <Text style={styles.placeholderSub}>Browse cashback categories and curated collections here.</Text>
    </View>
  );
};

export default CategoriesScreen;
