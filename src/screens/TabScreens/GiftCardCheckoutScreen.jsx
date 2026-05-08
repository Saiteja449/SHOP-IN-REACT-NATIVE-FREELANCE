import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
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
import UpiGPay from '../../Icons/UpiGPay.svg.jsx';
import UpiPhonePe from '../../Icons/UpiPhonePe.svg.jsx';
import UpiPaytm from '../../Icons/UpiPaytm.svg.jsx';
import UpiBhim from '../../Icons/UpiBhim.svg.jsx';
import UpiAmazon from '../../Icons/UpiAmazon.svg.jsx';
import { checkoutStyles as styles } from '../../Styles/styles';

const GiftCardCheckoutScreen = ({ navigation }) => {
  const [isSelfGift, setIsSelfGift] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('wallet');

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader 
        title="Gift Card Checkout" 
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.productRow}>
            <View style={styles.brandLogoBox}>
              <Image 
                source={require('../../../assets/images/amazon_white.png')} 
                style={{ width: 60, height: 60 }} 
                resizeMode="contain" 
              />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>Amazon Gift Card</Text>
              
              <View style={{ flexDirection: 'row', gap: 10, marginTop: 8 }}>
                <TouchableOpacity 
                  style={[styles.selfGiftBadge, { backgroundColor: isSelfGift ? '#7C3AED' : '#F5F3FF', borderWidth: 1, borderColor: '#7C3AED' }]}
                  onPress={() => setIsSelfGift(true)}
                >
                  <Text style={[styles.selfGiftText, { color: isSelfGift ? '#FFFFFF' : '#7C3AED' }]}>Self Gift</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.selfGiftBadge, { backgroundColor: !isSelfGift ? '#7C3AED' : '#F5F3FF', borderWidth: 1, borderColor: '#7C3AED' }]}
                  onPress={() => setIsSelfGift(false)}
                >
                  <Text style={[styles.selfGiftText, { color: !isSelfGift ? '#FFFFFF' : '#7C3AED' }]}>Send as Gift</Text>
                </TouchableOpacity>
              </View>

              {!isSelfGift && (
                <View style={{ marginTop: 12 }}>
                  <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 4, fontFamily: 'Inter_18pt-Medium' }}>Recipient Email</Text>
                  <TextInput 
                    style={{ 
                      borderWidth: 1, 
                      borderColor: '#D1D5DB', 
                      borderRadius: 8, 
                      paddingHorizontal: 10, 
                      paddingVertical: 6, 
                      fontSize: 14,
                      color: '#111827'
                    }}
                    placeholder="Enter recipient's email"
                    keyboardType="email-address"
                  />
                </View>
              )}

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
        <TouchableOpacity 
          style={[styles.methodCard, paymentMethod === 'wallet' && styles.methodCardActive]}
          onPress={() => setPaymentMethod('wallet')}
        >
          <View style={styles.methodHeader}>
            <Wallet width={24} height={24} color={paymentMethod === 'wallet' ? '#7C3AED' : '#6B7280'} />
            <Text style={styles.methodTitle}>Wallet Balance</Text>
            <Text style={styles.balanceText}>₹1,250.00</Text>
            <View style={{ 
              width: 20, 
              height: 20, 
              borderRadius: 10, 
              borderWidth: paymentMethod === 'wallet' ? 6 : 1, 
              borderColor: paymentMethod === 'wallet' ? '#7C3AED' : '#D1D5DB',
              backgroundColor: '#FFFFFF'
            }} />
          </View>
          
          {paymentMethod === 'wallet' && (
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
          )}
        </TouchableOpacity>

        {/* UPI */}
        <TouchableOpacity 
          style={[styles.methodCard, paymentMethod === 'upi' && styles.methodCardActive]}
          onPress={() => setPaymentMethod('upi')}
        >
          <View style={styles.methodHeader}>
            <AccUpi width={24} height={24} color={paymentMethod === 'upi' ? '#7C3AED' : '#6B7280'} />
            <Text style={styles.methodTitle}>UPI</Text>
            <View style={{ 
              width: 20, 
              height: 20, 
              borderRadius: 10, 
              borderWidth: paymentMethod === 'upi' ? 6 : 1, 
              borderColor: paymentMethod === 'upi' ? '#7C3AED' : '#D1D5DB',
              backgroundColor: '#FFFFFF'
            }} />
          </View>
          {paymentMethod === 'upi' && (
            <View style={styles.upiGrid}>
              {[
                { name: 'Google Pay', Icon: UpiGPay },
              ].map(item => (
                <View key={item.name} style={styles.upiItem}>
                  <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFFFFF', elevation: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <item.Icon width={24} height={24} />
                  </View>
                  <Text style={styles.upiLabel}>{item.name}</Text>
                </View>
              ))}
            </View>
          )}
        </TouchableOpacity>

        {/* Cards */}
        <TouchableOpacity 
          style={[styles.methodCard, paymentMethod === 'cards' && styles.methodCardActive]}
          onPress={() => setPaymentMethod('cards')}
        >
          <View style={styles.methodHeader}>
            <AccPayment width={24} height={24} color={paymentMethod === 'cards' ? '#7C3AED' : '#6B7280'} />
            <Text style={styles.methodTitle}>Cards</Text>
            <View style={{ 
              width: 20, 
              height: 20, 
              borderRadius: 10, 
              borderWidth: paymentMethod === 'cards' ? 6 : 1, 
              borderColor: paymentMethod === 'cards' ? '#7C3AED' : '#D1D5DB',
              backgroundColor: '#FFFFFF'
            }} />
          </View>
          {paymentMethod === 'cards' && (
            <View style={styles.cardLogos}>
              {['VISA', 'Mastercard', 'RuPay', 'AMEX'].map(name => (
                <View key={name} style={styles.logoBadge}>
                  <Text style={{ fontSize: 10, fontFamily: 'Inter_18pt-Bold', color: '#374151' }}>{name}</Text>
                </View>
              ))}
            </View>
          )}
        </TouchableOpacity>

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
        
        <TouchableOpacity 
          style={styles.payBtn}
          onPress={() => navigation.navigate('PurchaseSuccessScreen')}
        >
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
