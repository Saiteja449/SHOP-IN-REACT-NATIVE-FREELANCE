import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import GcChevronRight from '../../Icons/GcChevronRight.svg';
import BrandAmazon from '../../Icons/BrandAmazon.svg';
import AccDoc from '../../Icons/AccDoc.svg';
import AccBank from '../../Icons/AccBank.svg';
import { sellGiftCardStyles as styles } from '../../Styles/styles';

const SellGiftCardScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');

  const calculatePayout = amt => {
    const num = parseFloat(amt) || 0;
    return (num * 0.92).toFixed(2); // 8% fee
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader
        title="Sell Gift Card"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.stepHeader}>
          <View style={styles.stepIconBox}>
            <AccDoc width={20} height={20} color="#4338CA" />
          </View>
          <View>
            <Text style={styles.stepTitle}>Sell Instantly</Text>
            <Text style={styles.stepSub}>
              Get the best value for your unused cards
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Select Brand</Text>
        <TouchableOpacity style={styles.brandSelector}>
          <BrandAmazon width={32} height={32} />
          <Text style={styles.brandName}>Amazon Pay</Text>
          <GcChevronRight width={20} height={20} color="#9CA3AF" />
        </TouchableOpacity>

        <Text style={styles.sectionTitleB16}>Card Details</Text>
        <View style={styles.inputGroup}>
          <View>
            <Text style={styles.inputLabel}>Gift Card Code</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. ASDF-1234-QWER"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Card PIN (If applicable)</Text>
            <TextInput
              style={styles.input}
              placeholder="4 or 6 digit PIN"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Card Value (Balance)</Text>
            <View style={styles.currencyInputContainer}>
              <Text style={styles.currencySymbol}>₹</Text>
              <TextInput
                style={styles.currencyInput}
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
              />
            </View>
            <Text style={styles.inputNote}>Min: ₹100, Max: ₹50,000</Text>
          </View>
        </View>

        {amount > 0 && (
          <View style={styles.previewCard}>
            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>Selling Value</Text>
              <Text style={styles.previewValue}>₹{amount}</Text>
            </View>
            <View style={styles.previewRow}>
              <Text style={styles.previewLabel}>Transaction Fee (8%)</Text>
              <Text style={styles.feeValue}>
                - ₹{(amount * 0.08).toFixed(2)}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>You will receive</Text>
              <Text style={styles.totalValue}>₹{calculatePayout(amount)}</Text>
            </View>
          </View>
        )}

        <Text style={styles.sectionTitle}>Payout Method</Text>
        <TouchableOpacity
          style={styles.methodSelector}
          onPress={() => navigation.navigate('BankDetailsScreen')}
        >
          <View style={styles.methodIconBox}>
            <AccBank width={24} height={24} color="#4338CA" />
          </View>
          <View style={styles.methodInfo}>
            <Text style={styles.methodTitle}>Bank Transfer</Text>
            <Text style={styles.methodSub}>HDFC Bank · **** 1234</Text>
          </View>
          <Text style={styles.changeText}>Change</Text>
          <GcChevronRight width={20} height={20} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate('SellConfirmationScreen')}
        >
          <ShieldCheck width={20} height={20} color="#FFFFFF" />
          <Text style={styles.submitBtnText}>Verify & Sell Now</Text>
        </TouchableOpacity>

        <View style={styles.safetyNote}>
          <ShieldCheck width={16} height={16} color="#9CA3AF" />
          <Text style={styles.safetyText}>Secured by SSL Encryption</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SellGiftCardScreen;
