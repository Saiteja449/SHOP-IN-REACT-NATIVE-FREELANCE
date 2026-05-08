import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
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
  { top: 50, left: -12, rotate: '-14deg', scale: 0.8, opacity: 0.45 },
  { top: 48, right: -20, rotate: '18deg', scale: 0.8, opacity: 0.45 },
  { top: 300, left: -22, rotate: '-17deg', scale: 0.9, opacity: 0.35 },
  { top: 610, right: -16, rotate: '19deg', scale: 0.84, opacity: 0.38 },
  { top: 865, left: -20, rotate: '-18deg', scale: 0.94, opacity: 0.45 },
];

const floatDecor = [
  { top: 42, left: 128, icon: 'coin' },
  { top: 86, left: 196, icon: 'percent' },
  { top: 188, right: 16, icon: 'bag' },
  { top: 388, right: 14, icon: 'coin' },
  { top: 554, left: 10, icon: 'coin' },
  { top: 780, right: 12, icon: 'percent' },
];

const RegisterScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FBF3" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.screen}>
          {floatingMoney.map((cash, idx) => (
            <View
              key={`reg-cash-${idx}`}
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

          {floatDecor.map((d, idx) => {
            const size = 24;
            return (
              <View key={`reg-decor-${idx}`} style={[styles.absDecor, d]}>
                {d.icon === 'coin' && <CoinCircle width={size} height={size} color="#8A9F7F" />}
                {d.icon === 'percent' && <PercentTag width={size} height={size} color="#8A9F7F" />}
                {d.icon === 'bag' && <ShoppingBag width={size} height={size} color="#8A9F7F" />}
              </View>
            );
          })}

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >

            <View style={styles.brandWrap}>
              <Text style={styles.brandMain}>
                SHOPTO<Text style={styles.brandAccent}>SAVE</Text>
              </Text>
              <Text style={styles.brandSub}>YOUR SAVINGS PARTNER</Text>
              <Image
                source={require('../../../assets/images/app icon.png')}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.welcomeTitle}>Create Account</Text>
            <Text style={styles.welcomeSub}>Join the community of savers</Text>

            <View style={styles.inputCard}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor="#A0A0A0"
              />
            </View>

            <View style={styles.inputCard}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputCard}>
              <Text style={styles.inputLabel}>Mobile Number</Text>
              <View style={styles.phoneInput}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                  style={styles.phoneTextInput}
                  placeholder="Enter mobile number"
                  placeholderTextColor="#A0A0A0"
                  keyboardType="number-pad"
                  maxLength={10}
                />
              </View>
            </View>

            <LinearGradient
              colors={['#A6D36A', '#7DAF43']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 12, marginTop: 12 }}
            >
              <TouchableOpacity
                style={styles.continueBtn}
                onPress={() => navigation.navigate('OTPScreen')}
              >
                <Text style={styles.continueText}>Register Now</Text>
                <Text style={styles.continueArrow}>→</Text>
              </TouchableOpacity>
            </LinearGradient>

            <TouchableOpacity 
              style={{ marginTop: 20, alignItems: 'center' }}
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Text style={styles.welcomeSub}>
                Already have an account? <Text style={{ color: '#4B9139', fontFamily: 'Inter_18pt-Bold' }}>Login</Text>
              </Text>
            </TouchableOpacity>


            <View style={styles.trustedRow}>
              <ShieldCheck width={16} height={16} />
              <Text style={styles.trustedText}>
                Trusted by <Text style={styles.trustedBold}>1M+ </Text>Happy Users
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterScreen;
