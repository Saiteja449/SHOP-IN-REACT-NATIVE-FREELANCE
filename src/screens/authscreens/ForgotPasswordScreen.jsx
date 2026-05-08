import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CashNote from '../../Icons/CashNote.svg';
import CoinCircle from '../../Icons/CoinCircle.svg';
import PercentTag from '../../Icons/PercentTag.svg';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import ShoppingBag from '../../Icons/ShoppingBag.svg';
import { loginStyles as styles } from '../../Styles/styles';

const floatingMoney = [
  { top: 14, left: -4, rotate: '-18deg', scale: 0.88, opacity: 0.6 },
  { top: 18, right: -14, rotate: '20deg', scale: 0.9, opacity: 0.55 },
  { top: 150, right: -24, rotate: '-26deg', scale: 0.9, opacity: 0.4 },
];

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FBF3" />
      <View style={styles.screen}>
        {floatingMoney.map((cash, idx) => (
          <View
            key={`cash-${idx}`}
            style={[
              styles.absCash,
              cash,
              {
                transform: [{ rotate: cash.rotate }, { scale: cash.scale }],
                opacity: cash.opacity,
              },
            ]}
          >
            <CashNote width={68} height={40} />
          </View>
        ))}

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{ marginTop: 20 }}
          >
            <Text style={{ fontSize: 24, color: '#111410' }}>←</Text>
          </TouchableOpacity>

          <View style={[styles.brandWrap, { marginTop: 10 }]}>
            <Text style={styles.brandMain}>
              SHOPTO<Text style={styles.brandAccent}>SAVE</Text>
            </Text>
          </View>

          <View style={{ height: 60 }} />

          <Text style={styles.welcomeTitle}>Forgot Password?</Text>
          <Text style={styles.welcomeSub}>
            Don't worry! Enter your registered mobile number to reset your password.
          </Text>

          <View style={[styles.phoneInput, { marginTop: 20 }]}>
            <Text style={styles.countryCode}>+91</Text>
            <Text style={styles.dropdown}>⌄</Text>
            <View style={styles.verticalDivider} />
            <TextInput
              style={styles.phoneTextInput}
              placeholder="Mobile Number"
              placeholderTextColor="#8A8F88"
              keyboardType="phone-pad"
            />
          </View>

          <LinearGradient
            colors={['#A6D36A', '#7DAF43']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 12, marginTop: 24 }}
          >
            <TouchableOpacity
              style={styles.continueBtn}
              onPress={() => navigation.navigate('OTPScreen')}
            >
              <Text style={styles.continueText}>Send OTP</Text>
              <Text style={styles.continueArrow}>→</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={[styles.trustedRow, { marginTop: 40 }]}>
            <ShieldCheck width={18} height={18} />
            <Text style={styles.trustedText}>
              Secure Verification
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ForgotPasswordScreen;
