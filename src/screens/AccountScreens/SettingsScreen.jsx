import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AccBell from '../../Icons/AccBell.svg';
import AccDoc from '../../Icons/AccDoc.svg';
import AccLock from '../../Icons/AccLock.svg';
import AccLogout from '../../Icons/AccLogout.svg';
import AccMoon from '../../Icons/AccMoon.svg';
import GcBack from '../../Icons/GcBack.svg';
import GcChevronRight from '../../Icons/GcChevronRight.svg';
import CustomHeader from '../../Components/CustomHeader';
import {
  accountStyles as commonStyles,
  settingsStyles as styles,
} from '../../Styles/styles';


const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <CustomHeader title="Settings" onBackPress={() => navigation.goBack()} />


      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingIconBox}>
              <AccBell width={22} height={22} color="#4B5563" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>Notifications</Text>
              <Text style={styles.settingSub}>
                Manage notification preferences
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#E5E7EB', true: '#16A34A' }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingIconBox}>
              <AccMoon width={22} height={22} color="#4B5563" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>Dark Mode</Text>
              <Text style={styles.settingSub}>
                Switch between light and dark theme
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#E5E7EB', true: '#16A34A' }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        {/* Privacy & Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy & Security</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconBox}>
              <AccDoc width={22} height={22} color="#4B5563" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>Privacy Policy</Text>
              <Text style={styles.settingSub}>Read our privacy policy</Text>
            </View>
            <GcChevronRight width={18} height={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconBox}>
              <AccDoc width={22} height={22} color="#4B5563" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>Terms & Conditions</Text>
              <Text style={styles.settingSub}>
                Read our terms and conditions
              </Text>
            </View>
            <GcChevronRight width={18} height={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconBox}>
              <AccLock width={22} height={22} color="#4B5563" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>Data & Security</Text>
              <Text style={styles.settingSub}>
                Learn how we protect your data
              </Text>
            </View>
            <GcChevronRight width={18} height={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Logout Section */}
        <TouchableOpacity style={[styles.logoutItem, { marginTop: 30 }]}>
          <View style={[styles.settingIconBox, { backgroundColor: '#FEF2F2' }]}>
            <AccLogout width={22} height={22} color="#EF4444" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.logoutLabel}>Logout</Text>
            <Text style={styles.logoutSub}>Logout from your account</Text>
          </View>
          <GcChevronRight width={18} height={18} color="#EF4444" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
