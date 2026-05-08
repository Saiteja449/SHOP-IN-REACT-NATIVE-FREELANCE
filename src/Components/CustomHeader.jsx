import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GcBack from '../Icons/GcBack.svg';
import AccBell from '../Icons/AccBell.svg';
import { headerStyles as styles } from '../Styles/styles';


const CustomHeader = ({ 
  title, 
  onBackPress, 
  showBack = true, 
  showNotificationBell = false,
  RightComponent 
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity onPress={onBackPress}>
            <GcBack width={24} height={24} color="#059669" />
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>
        {RightComponent ? (
          <RightComponent />
        ) : (
          showNotificationBell && (
            <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
              <AccBell width={24} height={24} color="#059669" />
            </TouchableOpacity>
          )
        )}
      </View>

    </View>
  );
};

export default CustomHeader;
