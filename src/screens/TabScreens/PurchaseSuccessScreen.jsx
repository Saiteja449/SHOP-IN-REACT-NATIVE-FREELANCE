import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import AccCheck from '../../Icons/AccCheck.svg';
import AccGiftRef from '../../Icons/AccGiftRef.svg';
import AccPayment from '../../Icons/AccPayment.svg';
import AccRupee from '../../Icons/AccRupee.svg';
import BrandAmazon from '../../Icons/BrandAmazon.svg';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import StoreCart from '../../Icons/StoreCart.svg';
import Wallet from '../../Icons/Wallet.svg';
import { purchaseStyles as styles } from '../../Styles/styles';

const PurchaseSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader title="Purchase Success" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.successHeader}>
          <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#22C55E', alignItems: 'center', justifyContent: 'center' }}>
            <AccCheck width={32} height={32} color="#FFFFFF" />
          </View>
          <Text style={styles.successTitle}>Purchase Successful!</Text>
          <Text style={styles.successSub}>Your Amazon Gift Card has been purchased successfully.</Text>
        </View>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.logoBox}>
            <BrandAmazon width={40} height={40} />
          </View>
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryTitle}>Amazon Gift Card</Text>
            <Text style={styles.summarySub}>Self Gift</Text>
          </View>

          <View style={styles.amountBox}>
            <Text style={styles.amountText}>₹5,000</Text>
            <Text style={styles.amountLabel}>Amount</Text>
          </View>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoCard}>
          <View style={styles.promoContent}>
            <Text style={styles.promoText}>Shop on our app &</Text>
            <Text style={styles.cashbackText}>EARN UP TO 2% CASHBACK</Text>
            <Text style={styles.promoText}>on your order value!</Text>
            <Text style={styles.promoSub}>
              Use this gift card to shop on our app and get up to 2% cashback on every order.
            </Text>
          </View>
        </View>


        {/* Process Grid */}
        <View style={styles.processGrid}>
          <View style={styles.processItem}>
            <View style={styles.processIconBox}>
              <StoreCart width={20} height={20} color="#4338CA" />
            </View>
            <Text style={styles.processTitle}>Shop on our app</Text>
            <Text style={styles.processDesc}>Wide range of products</Text>
          </View>

          <View style={styles.processItem}>
            <View style={styles.processIconBox}>
              <AccPayment width={20} height={20} color="#4338CA" />
            </View>
            <Text style={styles.processTitle}>Pay using your Amazon Gift Card</Text>
            <Text style={styles.processDesc}>At secure checkout</Text>
          </View>

          <View style={styles.processItem}>
            <View style={styles.processIconBox}>
              <AccRupee width={20} height={20} color="#4338CA" />
            </View>
            <Text style={styles.processTitle}>Earn up to 2% Cashback</Text>
            <Text style={styles.processDesc}>On your order value</Text>
          </View>

          <View style={styles.processItem}>
            <View style={styles.processIconBox}>
              <Wallet width={20} height={20} color="#4338CA" />
            </View>
            <Text style={styles.processTitle}>Cashback added to your wallet</Text>
            <Text style={styles.processDesc}>Within 24-48 hours</Text>
          </View>
        </View>

        {/* Gift Card Code */}
        <View style={styles.codeSection}>
          <View style={styles.codeHeader}>
            <AccGiftRef width={20} height={20} color="#4338CA" />
            <Text style={styles.codeTitle}>Your Gift Card Code</Text>
          </View>
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>AQZD-P5NK-7G8H-L2TM</Text>
            <TouchableOpacity style={styles.copyBtn}>
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.codeNote}>ⓘ This is a secure 16-digit gift card code.</Text>
        </View>

        {/* Reminder */}
        <View style={styles.reminderCard}>
          <Text style={{ fontSize: 16 }}>💡</Text>
          <Text style={styles.reminderText}>
            Remember: You will earn up to <Text style={{ fontFamily: 'Inter_18pt-Bold' }}>2% cashback</Text> when you shop on our app using this gift card.
          </Text>
        </View>

        {/* Actions */}
        <TouchableOpacity style={styles.shopBtn}>
          <StoreCart width={20} height={20} color="#FFFFFF" />
          <Text style={styles.shopBtnText}>Start Shopping & Earn Cashback</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18 }}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewCardsBtn}>
          <AccGiftRef width={20} height={20} color="#4338CA" />
          <Text style={styles.viewCardsText}>View My Gift Cards</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footerSafe}>
          <ShieldCheck width={16} height={16} color="#16A34A" />
          <Text style={styles.footerSafeText}>Safe & Secure Transaction</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PurchaseSuccessScreen;
