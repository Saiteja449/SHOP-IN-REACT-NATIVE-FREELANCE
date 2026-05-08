import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BadgeStar from '../../Icons/BadgeStar.svg';
import Cart from '../../Icons/Cart.svg';
import CashNote from '../../Icons/CashNote.svg';
import CoinCircle from '../../Icons/CoinCircle.svg';
import PercentTag from '../../Icons/PercentTag.svg';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import ShoppingBag from '../../Icons/ShoppingBag.svg';
import Truck from '../../Icons/Truck.svg';
import { loginStyles as styles } from '../../Styles/styles';

const floatingMoney = [
  { top: 14, left: -4, rotate: '-18deg', scale: 0.88, opacity: 0.6 },
  { top: 18, right: -14, rotate: '20deg', scale: 0.9, opacity: 0.55 },
  { top: 150, right: -24, rotate: '-26deg', scale: 0.9, opacity: 0.4 },
  { top: 100, left: -18, rotate: '12deg', scale: 0.95, opacity: 0.6 },
  { top: 634, right: -10, rotate: '-24deg', scale: 0.82, opacity: 0.45 },
  { bottom: 20, left: -10, rotate: '-24deg', scale: 0.82, opacity: 0.45 },
];

const floatDecor = [
  { top: 58, left: 170, icon: 'percent' },
  { top: 88, left: 94, icon: 'bag' },
  { top: 130, right: 28, icon: 'percent' },
  { top: 194, left: 16, icon: 'coin' },
  { top: 320, right: 20, icon: 'cart' },
  { top: 560, left: 16, icon: 'coin' },
];

const featureData = [
  { title: 'Instant', subtitle: 'Shopping Savings', icon: Truck },
  { title: 'Huge', subtitle: 'Savings', icon: PercentTag },
  { title: 'Top 250+', subtitle: 'Brands', icon: BadgeStar },
];

const LoginScreen = ({ navigation }) => {
  return (
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

      {floatDecor.map((d, idx) => {
        const size = 24;
        return (
          <View key={`decor-${idx}`} style={[styles.absDecor, d]}>
            {d.icon === 'percent' && (
              <PercentTag width={size} height={size} color="#8A9F7F" />
            )}
            {d.icon === 'bag' && <ShoppingBag width={size} height={size} color="#8A9F7F" />}
            {d.icon === 'cart' && <Cart width={size} height={size} color="#8A9F7F" />}
            {d.icon === 'coin' && <CoinCircle width={size} height={size} color="#8A9F7F" />}
          </View>
        );
      })}

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.brandWrap}>
          <Text style={styles.brandMain}>
            SHOPTO<Text style={styles.brandAccent}>SAVE</Text>
          </Text>
          <Text style={styles.brandSub}>YOUR SAVINGS PARTNER</Text>
          <Image
            source={require('../../../assets/images/app icon.png')}
            style={{ width: 120, height: 120, alignSelf: 'center', }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.featuresCard}>
          {featureData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <View key={item.title} style={styles.featureCol}>
                <View style={styles.featureIconCircle}>
                  <Icon width={20} height={20} />
                </View>
                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureSub}>{item.subtitle}</Text>
                {idx < featureData.length - 1 && (
                  <View style={styles.featureDivider} />
                )}
              </View>
            );
          })}
        </View>

        <Text style={styles.welcomeTitle}>Welcome Back!</Text>
        <Text style={styles.welcomeSub}>
          Enter your mobile number to continue
        </Text>

        <View style={styles.phoneInput}>
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

        <TouchableOpacity
          style={{ alignSelf: 'flex-end', marginTop: 8 }}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={[styles.welcomeSub, { marginBottom: 0 }]}>Forgot Password?</Text>
        </TouchableOpacity>

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
            <Text style={styles.continueText}>Continue</Text>
            <Text style={styles.continueArrow}>→</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity
          style={{ marginTop: 20, alignItems: 'center' }}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={styles.welcomeSub}>
            Don't have an account? <Text style={{ color: '#4B9139', fontFamily: 'Inter_18pt-Bold' }}>Register</Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.trustedRow}>
          <ShieldCheck width={18} height={18} />
          <Text style={styles.trustedText}>
            Trusted by <Text style={styles.trustedBold}>1M+ </Text>Happy
            Customers
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
