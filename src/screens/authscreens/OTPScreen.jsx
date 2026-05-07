import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CashNote from '../../icons/CashNote.svg';
import CoinCircle from '../../icons/CoinCircle.svg';
import PercentTag from '../../icons/PercentTag.svg';
import ShieldCheck from '../../icons/ShieldCheck.svg';
import ShoppingBag from '../../icons/ShoppingBag.svg';
import OtpShieldLock from '../../icons/OtpShieldLock.svg';
import Laurel from '../../icons/Laurel.svg';
import Pencil from '../../icons/Pencil.svg';
import { otpStyles as styles } from '../../styles/styles';

const floatingMoney = [
  { top: 50, left: -12, rotate: '-14deg', scale: 0.8, opacity: 0.55 },
  { top: 48, right: -20, rotate: '18deg', scale: 0.8, opacity: 0.55 },
  { top: 300, left: -22, rotate: '-17deg', scale: 0.9, opacity: 0.42 },
  { top: 610, right: -16, rotate: '19deg', scale: 0.84, opacity: 0.45 },
  { top: 865, left: -20, rotate: '-18deg', scale: 0.94, opacity: 0.55 },
];

const floatDecor = [
  { top: 42, left: 128, icon: 'coin' },
  { top: 86, left: 196, icon: 'percent' },
  { top: 188, right: 16, icon: 'bag' },
  { top: 388, right: 14, icon: 'coin' },
  { top: 554, left: 10, icon: 'coin' },
  { top: 780, right: 12, icon: 'percent' },
];

const OTPScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FBF3" />
      <View style={styles.screen}>
        {floatingMoney.map((cash, idx) => (
          <View
            key={`otp-cash-${idx}`}
            style={[
              styles.absCash,
              cash,
              {
                transform: [{ rotate: cash.rotate }, { scale: cash.scale }],
                opacity: cash.opacity,
              },
            ]}
          >
            <CashNote width={92} height={54} />
          </View>
        ))}

        {floatDecor.map((d, idx) => (
          <View key={`otp-decor-${idx}`} style={[styles.absDecor, d]}>
            {d.icon === 'coin' && <CoinCircle width={24} height={24} />}
            {d.icon === 'percent' && <PercentTag width={24} height={24} />}
            {d.icon === 'bag' && <ShoppingBag width={24} height={24} />}
          </View>
        ))}

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.backArrow}>←</Text>

          <View style={styles.brandWrap}>
            <Text style={styles.brandMain}>
              SHOPTO<Text style={styles.brandAccent}>SAVE</Text>
            </Text>
            <Text style={styles.brandSub}>YOUR SAVINGS PARTNER</Text>
          </View>

          <View style={styles.lockWrap}>
            <OtpShieldLock width={124} height={124} />
          </View>

          <Text style={styles.title}>Verify Your Number</Text>
          <Text style={styles.subtitle}>Enter the OTP sent to</Text>
          <View style={styles.phoneRow}>
            <Text style={styles.phoneNumber}>+91 98765 43210</Text>
            <Pencil width={14} height={14} />
          </View>

          <Text style={styles.otpPrompt}>Enter 6-digit OTP</Text>
          <View style={styles.otpRow}>
            <View style={[styles.otpBox, styles.otpBoxActive]}>
              <View style={styles.cursorLine} />
            </View>
            <View style={styles.otpBox} />
            <View style={styles.otpBox} />
            <View style={styles.otpBox} />
            <View style={styles.otpBox} />
            <View style={styles.otpBox} />
          </View>

          <Text style={styles.expireText}>
            OTP will expire in <Text style={styles.timerText}>00:59</Text>
          </Text>
          <Text style={styles.resendText}>
            Didn't receive OTP? <Text style={styles.resendLink}>Resend OTP</Text>
          </Text>

          <View style={styles.securityCard}>
            <View style={styles.securityIconWrap}>
              <ShieldCheck width={22} height={22} />
            </View>
            <View style={styles.securityTextWrap}>
              <Text style={styles.securityTitle}>Your security is our priority.</Text>
              <Text style={styles.securitySub}>We never share your details with anyone.</Text>
            </View>
          </View>

          <LinearGradient
            colors={['#A8D46C', '#7FB045']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.verifyBtn}
          >
            <Text style={styles.verifyText}>Verify & Continue</Text>
            <Text style={styles.verifyArrow}>→</Text>
          </LinearGradient>

          <View style={styles.trustedRow}>
            <Laurel width={18} height={18} />
            <ShieldCheck width={16} height={16} />
            <Text style={styles.trustedText}>
              Trusted by <Text style={styles.trustedBold}>1M+ </Text>Happy Customers
            </Text>
            <Laurel width={18} height={18} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default OTPScreen;
