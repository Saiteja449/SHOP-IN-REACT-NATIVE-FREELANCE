import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../Components/CustomHeader';
import AccRupee from '../../Icons/AccRupee.svg';
import AccBank from '../../Icons/AccBank.svg';
import AccUpi from '../../Icons/AccUpi.svg';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import Wallet from '../../Icons/Wallet.svg';
import { walletStyles as styles } from '../../Styles/styles';

const transactions = [
  {
    id: 1,
    title: 'Cashback Received',
    desc: 'Amazon Purchase',
    amount: '+ ₹100',
    date: 'Oct 12, 2023',
    type: 'credit',
  },
  {
    id: 2,
    title: 'Gift Card Purchase',
    desc: 'Flipkart Gift Card',
    amount: '- ₹500',
    date: 'Oct 10, 2023',
    type: 'debit',
  },
  {
    id: 3,
    title: 'Money Added',
    desc: 'via UPI',
    amount: '+ ₹1,000',
    date: 'Oct 08, 2023',
    type: 'credit',
  },
  {
    id: 4,
    title: 'Cashback Received',
    desc: 'Myntra Purchase',
    amount: '+ ₹75',
    date: 'Oct 05, 2023',
    type: 'credit',
  },
];

const quickAmounts = ['₹100', '₹500', '₹1,000', '₹2,000'];

const WalletScreen = ({ navigation }) => {
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [addAmount, setAddAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [addMethod, setAddMethod] = useState('upi');
  const [withdrawMethod, setWithdrawMethod] = useState('bank');

  const RadioDot = ({ active }) => (
    <View style={[styles.radioDot, active && styles.radioDotActive]} />
  );

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader title="My Wallet" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#059669', '#10B981']}
          style={styles.balanceCard}
        >
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>₹2,450.75</Text>

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => setShowAddMoney(true)}
            >
              <Text style={styles.actionBtnText}>Add Money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryActionBtn}
              onPress={() => setShowWithdraw(true)}
            >
              <Text style={styles.secondaryActionBtnText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <Text style={styles.sectionTitle}>Transaction History</Text>

        {transactions.map(item => (
          <View key={item.id} style={styles.transactionItem}>
            <View
              style={[
                styles.transactionIconBox,
                { backgroundColor: item.type === 'credit' ? '#ECFDF5' : '#FEF2F2' },
              ]}
            >
              {item.type === 'credit' ? (
                <AccRupee width={20} height={20} color="#10B981" />
              ) : (
                <Wallet width={20} height={20} color="#EF4444" />
              )}
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionSub}>{item.desc}</Text>
            </View>
            <View style={styles.transactionRight}>
              <Text
                style={[
                  styles.transactionAmount,
                  { color: item.type === 'credit' ? '#10B981' : '#EF4444' },
                ]}
              >
                {item.amount}
              </Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footerSafe}>
        <ShieldCheck width={16} height={16} color="#9CA3AF" />
        <Text style={styles.footerSafeText}>
          Secure wallet with end-to-end encryption
        </Text>
      </View>

      <Modal
        visible={showAddMoney}
        transparent
        animationType="slide"
        onRequestClose={() => setShowAddMoney(false)}
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}
          activeOpacity={1}
          onPress={() => setShowAddMoney(false)}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHandle} />

            <Text style={styles.modalTitle}>Add Money</Text>
            <Text style={styles.modalSub}>
              Money will reflect instantly in your wallet
            </Text>

            <Text style={styles.inputLabel}>Enter Amount</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.currencySymbol}>₹</Text>
              <TextInput
                style={styles.amountInput}
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={addAmount}
                onChangeText={setAddAmount}
              />
            </View>

            <View style={styles.quickAmountsRow}>
              {quickAmounts.map(q => (
                <TouchableOpacity
                  key={q}
                  onPress={() =>
                    setAddAmount(q.replace('₹', '').replace(',', ''))
                  }
                  style={styles.quickAmountBtn}
                >
                  <Text style={styles.quickAmountText}>{q}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.methodTitle}>Payment Method</Text>

            <TouchableOpacity
              onPress={() => setAddMethod('upi')}
              style={[
                styles.methodCard,
                addMethod === 'upi' && styles.methodCardActive,
              ]}
            >
              <AccUpi
                width={22}
                height={22}
                color={addMethod === 'upi' ? '#059669' : '#6B7280'}
              />
              <View style={styles.methodTextContent}>
                <Text style={styles.methodName}>UPI</Text>
                <Text style={styles.methodDesc}>
                  Google Pay, PhonePe, Paytm & more
                </Text>
              </View>
              <RadioDot active={addMethod === 'upi'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setAddMethod('bank')}
              style={[
                styles.methodCard,
                addMethod === 'bank' && styles.methodCardActive,
              ]}
            >
              <AccBank
                width={22}
                height={22}
                color={addMethod === 'bank' ? '#059669' : '#6B7280'}
              />
              <View style={styles.methodTextContent}>
                <Text style={styles.methodName}>Net Banking / Debit Card</Text>
                <Text style={styles.methodDesc}>
                  All major banks supported
                </Text>
              </View>
              <RadioDot active={addMethod === 'bank'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                setShowAddMoney(false);
                setAddAmount('');
              }}
            >
              <Text style={styles.submitBtnText}>
                {addAmount ? `Add ₹${addAmount}` : 'Add Money'}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <Modal
        visible={showWithdraw}
        transparent
        animationType="slide"
        onRequestClose={() => setShowWithdraw(false)}
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}
          activeOpacity={1}
          onPress={() => setShowWithdraw(false)}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHandle} />

            <Text style={styles.modalTitle}>Withdraw Money</Text>
            <Text style={styles.modalSub}>
              Minimum withdrawal: ₹250 · Processed within 24 hrs
            </Text>

            <View style={styles.statusBanner}>
              <Text style={styles.statusLabel}>Available Balance</Text>
              <Text style={styles.statusValue}>₹2,450.75</Text>
            </View>

            <Text style={styles.inputLabel}>Withdrawal Amount</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.currencySymbol}>₹</Text>
              <TextInput
                style={styles.amountInput}
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={withdrawAmount}
                onChangeText={setWithdrawAmount}
              />
              <TouchableOpacity onPress={() => setWithdrawAmount('2450')}>
                <Text style={styles.maxBtnText}>MAX</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.methodTitle}>Withdraw To</Text>

            <TouchableOpacity
              onPress={() => setWithdrawMethod('bank')}
              style={[
                styles.methodCard,
                withdrawMethod === 'bank' && styles.methodCardActive,
              ]}
            >
              <AccBank
                width={22}
                height={22}
                color={withdrawMethod === 'bank' ? '#059669' : '#6B7280'}
              />
              <View style={styles.methodTextContent}>
                <Text style={styles.methodName}>HDFC Bank</Text>
                <Text style={styles.methodDesc}>Savings · **** 1234</Text>
              </View>
              <RadioDot active={withdrawMethod === 'bank'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setWithdrawMethod('upi')}
              style={[
                styles.methodCard,
                withdrawMethod === 'upi' && styles.methodCardActive,
              ]}
            >
              <AccUpi
                width={22}
                height={22}
                color={withdrawMethod === 'upi' ? '#059669' : '#6B7280'}
              />
              <View style={styles.methodTextContent}>
                <Text style={styles.methodName}>UPI</Text>
                <Text style={styles.methodDesc}>user@upi</Text>
              </View>
              <RadioDot active={withdrawMethod === 'upi'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                setShowWithdraw(false);
                setWithdrawAmount('');
              }}
            >
              <Text style={styles.submitBtnText}>
                {withdrawAmount ? `Withdraw ₹${withdrawAmount}` : 'Withdraw'}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default WalletScreen;
