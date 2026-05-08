import React, { useRef, useState } from 'react';
import {
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
import OtpShieldLock from '../../Icons/OtpShieldLock.svg';
import Laurel from '../../Icons/Laurel.svg';
import Pencil from '../../Icons/Pencil.svg';
import { otpStyles as styles } from '../../Styles/styles';

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

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length !== 0 && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputs.current[index - 1].focus();
    }
  };

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
              <CashNote width={68} height={40} />
            </View>
          ))}

          {floatDecor.map((d, idx) => (
            <View key={`otp-decor-${idx}`} style={[styles.absDecor, d]}>
              {d.icon === 'coin' && <CoinCircle width={24} height={24} />}
              {d.icon === 'percent' && <PercentTag width={24} height={24} />}
              {d.icon === 'bag' && <ShoppingBag width={24} height={24} />}
            </View>
          ))}

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>

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

            <Text style={styles.otpPrompt}>Enter 4-digit OTP</Text>
            <View style={styles.otpRow}>
              {otp.map((digit, idx) => (
                <TextInput
                  key={`otp-${idx}`}
                  ref={ref => (inputs.current[idx] = ref)}
                  style={[
                    styles.otpBox,
                    digit ? styles.otpBoxActive : null,
                    { color: '#1B3528', fontSize: 20, textAlign: 'center' },
                  ]}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={text => handleChangeText(text, idx)}
                  onKeyPress={e => handleKeyPress(e, idx)}
                  value={digit}
                />
              ))}
            </View>

            <Text style={styles.expireText}>
              OTP will expire in <Text style={styles.timerText}>00:59</Text>
            </Text>
            <Text style={styles.resendText}>
              Didn't receive OTP?{' '}
              <Text style={styles.resendLink}>Resend OTP</Text>
            </Text>

            <View style={styles.securityCard}>
              <View style={styles.securityIconWrap}>
                <ShieldCheck width={22} height={22} />
              </View>
              <View style={styles.securityTextWrap}>
                <Text style={styles.securityTitle}>
                  Your security is our priority.
                </Text>
                <Text style={styles.securitySub}>
                  We never share your details with anyone.
                </Text>
              </View>
            </View>

            <LinearGradient
              colors={['#A8D46C', '#7FB045']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 12, marginTop: 24 }}
            >
              <TouchableOpacity
                style={styles.verifyBtn}
                onPress={() => console.log('Verified', otp.join(''))}
              >
                <Text style={styles.verifyText}>Verify & Continue</Text>
                <Text style={styles.verifyArrow}>→</Text>
              </TouchableOpacity>
            </LinearGradient>

            <View style={styles.trustedRow}>
              <Laurel width={18} height={18} />
              <ShieldCheck width={16} height={16} />
              <Text style={styles.trustedText}>
                Trusted by <Text style={styles.trustedBold}>1M+ </Text>Happy
                Customers
              </Text>
              <Laurel width={18} height={18} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default OTPScreen;
