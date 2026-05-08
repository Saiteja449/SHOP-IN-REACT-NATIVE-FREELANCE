import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import AccBank from '../../Icons/AccBank.svg';
import AccCheck from '../../Icons/AccCheck.svg';
import AccDoc from '../../Icons/AccDoc.svg';
import AccHistory from '../../Icons/AccHistory.svg';
import AccRupee from '../../Icons/AccRupee.svg';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import AccClock from '../../Icons/AccClock.svg';
import { confirmationStyles as styles } from '../../Styles/styles';

const SellConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader title="Sell Confirmation" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.successCard}>
          <View style={styles.checkCircle}>
            <AccCheck width={32} height={32} color="#FFFFFF" />
          </View>
          <Text style={styles.successTitle}>Your Gift Card Sale is Confirmed!</Text>
          <Text style={styles.successSubtitle}>
            We've received your gift card details. Your payout will be processed within{' '}
            <Text style={styles.payoutHighlight}>up to 48 hours.</Text>
          </Text>
        </View>

        <View style={styles.trustBanner}>
          <ShieldCheck width={18} height={18} color="#16A34A" />
          <Text style={styles.trustText}>Your transaction is 100% secure and safe with us.</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <AccDoc width={20} height={20} color="#4338CA" />
            <Text style={styles.sectionTitle}>Transaction Summary</Text>
          </View>
          
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Brand</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={styles.dataValue}>Amazon</Text>
            </View>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Card Number</Text>
            <Text style={styles.dataValue}>***** **** ***** 1234</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Gift Card Amount (Entered)</Text>
            <Text style={styles.dataValue}>₹5,000</Text>
          </View>
          
          <View style={{ height: 1, backgroundColor: '#F3F4F6', marginVertical: 10 }} />
          
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Card Value</Text>
            <Text style={styles.dataValue}>₹5,000</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={[styles.dataLabel, { color: '#16A34A', fontFamily: 'Inter_18pt-Bold' }]}>Payout Amount</Text>
            <Text style={[styles.dataValue, styles.payoutValue]}>₹4,600</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Fees (8%)</Text>
            <Text style={[styles.dataValue, styles.feeValue]}>- ₹400</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <AccBank width={20} height={20} color="#4338CA" />
            <Text style={styles.sectionTitle}>Payout Method</Text>
          </View>
          
          <View style={styles.methodBox}>
            <View style={styles.bankIconBox}>
              <AccBank width={24} height={24} color="#4338CA" />
            </View>
            <View style={styles.bankInfo}>
              <Text style={styles.bankTitle}>Bank Transfer (IMPS)</Text>
              <Text style={styles.bankSub}>HDFC Bank · A/c No. **** 1234</Text>
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>✓ Verified</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoBanner}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <AccClock width={14} height={14} color="#4338CA" />
              <Text style={styles.infoTitle}>Payout will be completed within up to 48 hours</Text>
            </View>
            <Text style={styles.infoDesc}>You will receive an SMS/Email once the amount is credited.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.stepperHeader}>What happens next?</Text>
          <View style={styles.stepper}>
            <View style={styles.stepperLine} />
            
            <View style={styles.stepItem}>
              <View style={styles.stepIconBox}>
                <AccDoc width={18} height={18} color="#4338CA" />
              </View>
              <View style={styles.stepNumber}><Text style={styles.stepNumberText}>1</Text></View>
              <Text style={styles.stepLabel}>Verification</Text>
              <Text style={styles.stepTime}>0 - 15 mins</Text>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepIconBox}>
                <AccCheck width={18} height={18} color="#4338CA" />
              </View>
              <View style={styles.stepNumber}><Text style={styles.stepNumberText}>2</Text></View>
              <Text style={styles.stepLabel}>Approval</Text>
              <Text style={styles.stepTime}>Up to 4 hours</Text>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepIconBox}>
                <AccRupee width={18} height={18} color="#4338CA" />
              </View>
              <View style={styles.stepNumber}><Text style={styles.stepNumberText}>3</Text></View>
              <Text style={styles.stepLabel}>Payout Processing</Text>
              <Text style={styles.stepTime}>Up to 48 hours</Text>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepIconBox}>
                <AccCheck width={18} height={18} color="#4338CA" />
              </View>
              <View style={styles.stepNumber}><Text style={styles.stepNumberText}>4</Text></View>
              <Text style={styles.stepLabel}>Amount Credited</Text>
              <Text style={styles.stepTime}>Within 48 hours</Text>
            </View>
          </View>
        </View>

        <View style={styles.noteCard}>
          <Text style={{ fontSize: 16 }}>ⓘ</Text>
          <Text style={styles.noteText}>
            Payouts are completed within up to 48 hours in normal cases. In rare cases, it may take a little longer.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.viewBtn}
          onPress={() => navigation.navigate('WalletScreen')}
        >
          <AccHistory width={20} height={20} color="#FFFFFF" />
          <Text style={styles.viewBtnText}>View My Transactions</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          We never store your card details. Your data is always secure.
        </Text>
      </ScrollView>
    </View>
  );
};

export default SellConfirmationScreen;
