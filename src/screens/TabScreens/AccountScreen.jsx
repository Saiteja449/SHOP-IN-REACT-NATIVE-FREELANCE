import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AccCheck from '../../icons/AccCheck.svg';
import AccClock from '../../icons/AccClock.svg';
import AccFlag from '../../icons/AccFlag.svg';
import AccGear from '../../icons/AccGear.svg';
import AccGiftRef from '../../icons/AccGiftRef.svg';
import AccHeadset from '../../icons/AccHeadset.svg';
import AccHistory from '../../icons/AccHistory.svg';
import AccLogout from '../../icons/AccLogout.svg';
import AccRupee from '../../icons/AccRupee.svg';
import AccShieldKyc from '../../icons/AccShieldKyc.svg';
import GcBack from '../../icons/GcBack.svg';
import GcChevronRight from '../../icons/GcChevronRight.svg';
import { accountStyles as styles } from '../../Styles/styles';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <GcBack width={24} height={24} color="#059669" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <AccGear width={24} height={24} color="#059669" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'file:///C:/Users/LENOVO/.gemini/antigravity/brain/d678fa07-7066-471f-bafb-b432047fc1a4/user_avatar_rahul_1778147535554.png',
              }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>Rahul Sharma</Text>
          <View style={styles.verifiedBadge}>
            <AccCheck width={14} height={14} color="#16A34A" />
            <Text style={styles.verifiedText}>Verified</Text>
          </View>
          <Text style={styles.userPhone}>+91 98765 43210</Text>
          <Text style={styles.userEmail}>rahul.sharma@email.com</Text>

          <TouchableOpacity style={styles.editProfileBtn}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
            <Text style={{ color: '#059669' }}>✎</Text>
          </TouchableOpacity>
        </View>

        {/* Earnings Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Earnings Overview</Text>
          <View style={styles.earningsCard}>
            <TouchableOpacity style={styles.earningItem}>
              <View style={styles.earningIconBox}>
                <AccRupee width={22} height={22} color="#059669" />
              </View>
              <View style={styles.earningInfo}>
                <Text style={styles.earningLabel}>Total Cashback Earned</Text>
                <Text style={styles.earningValue}>₹2,450.75</Text>
              </View>
              <GcChevronRight width={18} height={18} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.earningItem}>
              <View
                style={[styles.earningIconBox, { backgroundColor: '#FFFBEB' }]}
              >
                <AccClock width={22} height={22} color="#F59E0B" />
              </View>
              <View style={styles.earningInfo}>
                <Text style={styles.earningLabel}>Pending Cashback</Text>
                <Text style={[styles.earningValue, styles.pendingValue]}>
                  ₹420.00
                </Text>
              </View>
              <GcChevronRight width={18} height={18} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.earningItem, { borderBottomWidth: 0 }]}
            >
              <View
                style={[styles.earningIconBox, { backgroundColor: '#EEF2FF' }]}
              >
                <AccGiftRef width={22} height={22} color="#6366F1" />
              </View>
              <View style={styles.earningInfo}>
                <Text style={styles.earningLabel}>Referral Earnings</Text>
                <Text style={[styles.earningValue, styles.referralValue]}>
                  ₹320.00
                </Text>
              </View>
              <GcChevronRight width={18} height={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          <View style={styles.menuList}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('KycBankScreen')}
            >
              <View style={styles.menuIconBox}>
                <AccShieldKyc width={24} height={24} color="#4B5563" />
              </View>
              <View style={styles.menuTextContent}>
                <Text style={styles.menuLabel}>KYC & Bank Details</Text>
                <Text style={styles.menuSub}>
                  Verify your identity & bank details
                </Text>
              </View>
              <GcChevronRight width={20} height={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                <AccHistory width={24} height={24} color="#4B5563" />
              </View>
              <View style={styles.menuTextContent}>
                <Text style={styles.menuLabel}>Transaction History</Text>
                <Text style={styles.menuSub}>
                  View all your wallet transactions
                </Text>
              </View>
              <GcChevronRight width={20} height={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('SupportCenterScreen')}
            >
              <View style={styles.menuIconBox}>
                <AccHeadset width={24} height={24} color="#4B5563" />
              </View>
              <View style={styles.menuTextContent}>
                <Text style={styles.menuLabel}>Support Center</Text>
                <Text style={styles.menuSub}>FAQs, tickets & more</Text>
              </View>
              <GcChevronRight width={20} height={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('ReportProblemScreen')}
            >
              <View style={styles.menuIconBox}>
                <AccFlag width={24} height={24} color="#4B5563" />
              </View>
              <View style={styles.menuTextContent}>
                <Text style={styles.menuLabel}>Report Problem</Text>
                <Text style={styles.menuSub}>
                  Tell us if something went wrong
                </Text>
              </View>
              <GcChevronRight width={20} height={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomWidth: 0 }]}
              onPress={() => navigation.navigate('SettingsScreen')}
            >
              <View style={styles.menuIconBox}>
                <AccGear width={24} height={24} color="#4B5563" />
              </View>
              <View style={styles.menuTextContent}>
                <Text style={styles.menuLabel}>Settings</Text>
                <Text style={styles.menuSub}>Manage app preferences</Text>
              </View>
              <GcChevronRight width={20} height={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <AccLogout width={20} height={20} color="#EF4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;
