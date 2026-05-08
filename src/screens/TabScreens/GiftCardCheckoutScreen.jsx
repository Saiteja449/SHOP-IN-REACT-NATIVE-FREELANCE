import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import BrandAmazon from '../../Icons/BrandAmazon.svg';
import Wallet from '../../Icons/Wallet.svg';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import AccPayment from '../../Icons/AccPayment.svg';
import AccUpi from '../../Icons/AccUpi.svg';
import AccClock from '../../Icons/AccClock.svg';
import AccCheck from '../../Icons/AccCheck.svg';
import { checkoutStyles as styles } from '../../Styles/styles';

const GiftCardCheckoutScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader 
        title="Gift Card Checkout" 
        onBackPress={() => navigation.goBack()}
        RightComponent={() => (
          <View style={{ backgroundColor: '#F5F3FF', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <ShieldCheck width={14} height={14} color="#7C3AED" />
            <Text style={{ fontSize: 10, color: '#7C3AED', fontFamily: 'Inter_18pt-Bold' }}>100% Secure</Text>
          </View>
        )}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.productRow}>
            <View style={styles.brandLogoBox}>
              <BrandAmazon width={50} height={50} />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>Amazon Gift Card</Text>
              <View style={styles.selfGiftBadge}>
                <Text style={styles.selfGiftText}>Self Gift</Text>
              </View>
              <View style={styles.priceGrid}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Gift Card Amount</Text>
                  <Text style={styles.priceValue}>₹5,000</Text>
                </View>
                <View style={styles.priceRow}>
                  <Text style={styles.priceLabel}>Extra Cashback</Text>
                  <Text style={[styles.priceValue, styles.cashbackValue]}>₹100 (2%)</Text>
                </View>
                <View style={[styles.priceRow, { marginTop: 4 }]}>
                  <Text style={styles.priceLabel}>Total Payable</Text>
                  <Text style={[styles.priceValue, styles.totalValue]}>₹5,000</Text>
                </View>
              </View>
            </View>
          </View>
          
          <View style={styles.earnBanner}>
            <AccCheck width={16} height={16} color="#7C3AED" />
            <Text style={styles.earnText}>You will earn ₹100 cashback in your wallet</Text>
            <Text style={{ fontSize: 12, color: '#7C3AED' }}>ⓘ</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Select Payment Method</Text>

        {/* Wallet Balance */}
        <View style={[styles.methodCard, styles.methodCardActive]}>
          <View style={styles.methodHeader}>
            <Wallet width={24} height={24} color="#7C3AED" />
            <Text style={styles.methodTitle}>Wallet Balance</Text>
            <Text style={styles.balanceText}>₹1,250.00</Text>
            <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#7C3AED', alignItems: 'center', justify: 'center' }}>
              <Text style={{ color: '#FFFFFF', fontSize: 12 }}>✓</Text>
            </View>
          </View>
          
          <View style={styles.walletBreakdown}>
            <View style={styles.breakdownRow}>
              <Text style={styles.breakdownLabel}>Amount to be paid</Text>
              <Text style={styles.breakdownValue}>₹5,000</Text>
            </View>
            <View style={styles.breakdownRow}>
              <Text style={styles.breakdownLabel}>Wallet will be used</Text>
              <Text style={styles.breakdownValue}>- ₹1,250</Text>
            </View>
            <View style={[styles.breakdownRow, { borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingTop: 8 }]}>
              <Text style={[styles.breakdownLabel, { fontFamily: 'Inter_18pt-Bold', color: '#111827' }]}>Remaining amount</Text>
              <Text style={[styles.breakdownValue, styles.remainingValue]}>₹3,750</Text>
            </View>
          </View>
        </View>

        {/* UPI */}
        <View style={styles.methodCard}>
          <View style={styles.methodHeader}>
            <AccUpi width={24} height={24} color="#6B7280" />
            <Text style={styles.methodTitle}>UPI</Text>
            <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#D1D5DB' }} />
          </View>
          <View style={styles.upiGrid}>
            {['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay'].map(name => (
              <View key={name} style={styles.upiItem}>
                <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#F3F4F6' }} />
                <Text style={styles.upiLabel}>{name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Cards */}
        <View style={styles.methodCard}>
          <View style={styles.methodHeader}>
            <AccPayment width={24} height={24} color="#6B7280" />
            <Text style={styles.methodTitle}>Cards</Text>
            <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#D1D5DB' }} />
          </View>
          <View style={styles.cardLogos}>
            {['VISA', 'Mastercard', 'RuPay', 'AMEX'].map(name => (
              <View key={name} style={styles.logoBadge}>
                <Text style={{ fontSize: 10, fontFamily: 'Inter_18pt-Bold', color: '#374151' }}>{name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Safe Banner */}
        <View style={styles.safeBanner}>
          <ShieldCheck width={32} height={32} color="#4338CA" />
          <View style={styles.safeContent}>
            <Text style={styles.safeTitle}>Safe & Secure Transaction</Text>
            <Text style={styles.safeDesc}>Your payment information is encrypted and secure with us.</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.payableRow}>
          <View>
            <Text style={styles.payableLabel}>Amount Payable</Text>
            <Text style={styles.payableAmount}>₹3,750</Text>
          </View>
          <Text style={styles.savingsText}>You Save ₹100 (2% Cashback)</Text>
        </View>
        
        <TouchableOpacity style={styles.payBtn}>
          <ShieldCheck width={20} height={20} color="#FFFFFF" />
          <Text style={styles.payBtnText}>Pay ₹3,750 Securely</Text>
        </TouchableOpacity>
        
        <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <AccPayment width={14} height={14} color="#9CA3AF" />
            <Text style={styles.featureText}>Secure Payments</Text>
          </View>
          <View style={{ width: 1, height: 12, backgroundColor: '#E5E7EB' }} />
          <View style={styles.featureItem}>
            <AccClock width={14} height={14} color="#9CA3AF" />
            <Text style={styles.featureText}>Instant Delivery</Text>
          </View>
          <View style={{ width: 1, height: 12, backgroundColor: '#E5E7EB' }} />
          <View style={styles.featureItem}>
            <AccCheck width={14} height={14} color="#9CA3AF" />
            <Text style={styles.featureText}>100% Safe & Trusted</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GiftCardCheckoutScreen;
