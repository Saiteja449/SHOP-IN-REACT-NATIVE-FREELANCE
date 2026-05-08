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

const transactions = [
  { id: 1, title: 'Cashback Received', desc: 'Amazon Purchase', amount: '+ ₹100', date: 'Oct 12, 2023', type: 'credit' },
  { id: 2, title: 'Gift Card Purchase', desc: 'Flipkart Gift Card', amount: '- ₹500', date: 'Oct 10, 2023', type: 'debit' },
  { id: 3, title: 'Money Added', desc: 'via UPI', amount: '+ ₹1,000', date: 'Oct 08, 2023', type: 'credit' },
  { id: 4, title: 'Cashback Received', desc: 'Myntra Purchase', amount: '+ ₹75', date: 'Oct 05, 2023', type: 'credit' },
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
    <View style={{
      width: 20, height: 20, borderRadius: 10,
      borderWidth: active ? 6 : 1.5,
      borderColor: active ? '#059669' : '#D1D5DB',
      backgroundColor: '#FFFFFF',
    }} />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader
        title="My Wallet"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Balance Card */}
        <LinearGradient
          colors={['#059669', '#10B981']}
          style={{ borderRadius: 16, padding: 20, marginBottom: 24 }}
        >
          <Text style={{ color: '#D1FAE5', fontSize: 14, fontFamily: 'Inter_18pt-Medium' }}>Total Balance</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 32, fontFamily: 'Inter_18pt-Bold', marginTop: 4 }}>₹2,450.75</Text>

          <View style={{ flexDirection: 'row', gap: 12, marginTop: 20 }}>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, alignItems: 'center' }}
              onPress={() => setShowAddMoney(true)}
            >
              <Text style={{ color: '#059669', fontFamily: 'Inter_18pt-Bold', fontSize: 14 }}>Add Money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.2)', paddingVertical: 12, borderRadius: 10, alignItems: 'center' }}
              onPress={() => setShowWithdraw(true)}
            >
              <Text style={{ color: '#FFFFFF', fontFamily: 'Inter_18pt-Bold', fontSize: 14 }}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Transaction History */}
        <Text style={{ fontSize: 16, fontFamily: 'Inter_18pt-Bold', color: '#111827', marginBottom: 16 }}>Transaction History</Text>

        {transactions.map(item => (
          <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' }}>
            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: item.type === 'credit' ? '#ECFDF5' : '#FEF2F2', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              {item.type === 'credit' ? (
                <AccRupee width={20} height={20} color="#10B981" />
              ) : (
                <Wallet width={20} height={20} color="#EF4444" />
              )}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-SemiBold', color: '#111827' }}>{item.title}</Text>
              <Text style={{ fontSize: 12, color: '#6B7280', fontFamily: 'Inter_18pt-Medium' }}>{item.desc}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-Bold', color: item.type === 'credit' ? '#10B981' : '#EF4444' }}>{item.amount}</Text>
              <Text style={{ fontSize: 10, color: '#9CA3AF', fontFamily: 'Inter_18pt-Regular' }}>{item.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Security Footer */}
      <View style={{ padding: 16, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
        <ShieldCheck width={16} height={16} color="#9CA3AF" />
        <Text style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'Inter_18pt-Medium' }}>Secure wallet with end-to-end encryption</Text>
      </View>

      {/* ── ADD MONEY MODAL ── */}
      <Modal visible={showAddMoney} transparent animationType="slide" onRequestClose={() => setShowAddMoney(false)}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} activeOpacity={1} onPress={() => setShowAddMoney(false)} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={{ backgroundColor: '#FFFFFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24 }}>
            {/* Handle */}
            <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: '#E5E7EB', alignSelf: 'center', marginBottom: 20 }} />

            <Text style={{ fontSize: 18, fontFamily: 'Inter_18pt-Bold', color: '#111827', marginBottom: 4 }}>Add Money</Text>
            <Text style={{ fontSize: 13, color: '#6B7280', fontFamily: 'Inter_18pt-Medium', marginBottom: 20 }}>Money will reflect instantly in your wallet</Text>

            {/* Amount Input */}
            <Text style={{ fontSize: 12, fontFamily: 'Inter_18pt-SemiBold', color: '#6B7280', marginBottom: 8 }}>Enter Amount</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#D1D5DB', borderRadius: 12, paddingHorizontal: 14, marginBottom: 14 }}>
              <Text style={{ fontSize: 18, color: '#6B7280', fontFamily: 'Inter_18pt-Bold' }}>₹</Text>
              <TextInput
                style={{ flex: 1, height: 52, fontSize: 18, fontFamily: 'Inter_18pt-Bold', color: '#111827', paddingLeft: 8 }}
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={addAmount}
                onChangeText={setAddAmount}
              />
            </View>

            {/* Quick amounts */}
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 20 }}>
              {quickAmounts.map(q => (
                <TouchableOpacity
                  key={q}
                  onPress={() => setAddAmount(q.replace('₹', '').replace(',', ''))}
                  style={{ flex: 1, paddingVertical: 8, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, alignItems: 'center' }}
                >
                  <Text style={{ fontSize: 12, fontFamily: 'Inter_18pt-SemiBold', color: '#374151' }}>{q}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Payment Method */}
            <Text style={{ fontSize: 13, fontFamily: 'Inter_18pt-Bold', color: '#374151', marginBottom: 12 }}>Payment Method</Text>

            <TouchableOpacity
              onPress={() => setAddMethod('upi')}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderWidth: 1.5, borderColor: addMethod === 'upi' ? '#059669' : '#E5E7EB', borderRadius: 12, marginBottom: 10, backgroundColor: addMethod === 'upi' ? '#F0FDF4' : '#FFFFFF' }}
            >
              <AccUpi width={22} height={22} color={addMethod === 'upi' ? '#059669' : '#6B7280'} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-SemiBold', color: '#111827' }}>UPI</Text>
                <Text style={{ fontSize: 12, color: '#6B7280', fontFamily: 'Inter_18pt-Medium' }}>Google Pay, PhonePe, Paytm & more</Text>
              </View>
              <RadioDot active={addMethod === 'upi'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setAddMethod('bank')}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderWidth: 1.5, borderColor: addMethod === 'bank' ? '#059669' : '#E5E7EB', borderRadius: 12, marginBottom: 24, backgroundColor: addMethod === 'bank' ? '#F0FDF4' : '#FFFFFF' }}
            >
              <AccBank width={22} height={22} color={addMethod === 'bank' ? '#059669' : '#6B7280'} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-SemiBold', color: '#111827' }}>Net Banking / Debit Card</Text>
                <Text style={{ fontSize: 12, color: '#6B7280', fontFamily: 'Inter_18pt-Medium' }}>All major banks supported</Text>
              </View>
              <RadioDot active={addMethod === 'bank'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: '#059669', borderRadius: 12, paddingVertical: 16, alignItems: 'center' }}
              onPress={() => { setShowAddMoney(false); setAddAmount(''); }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Inter_18pt-Bold' }}>
                {addAmount ? `Add ₹${addAmount}` : 'Add Money'}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* ── WITHDRAW MODAL ── */}
      <Modal visible={showWithdraw} transparent animationType="slide" onRequestClose={() => setShowWithdraw(false)}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} activeOpacity={1} onPress={() => setShowWithdraw(false)} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={{ backgroundColor: '#FFFFFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24 }}>
            {/* Handle */}
            <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: '#E5E7EB', alignSelf: 'center', marginBottom: 20 }} />

            <Text style={{ fontSize: 18, fontFamily: 'Inter_18pt-Bold', color: '#111827', marginBottom: 4 }}>Withdraw Money</Text>
            <Text style={{ fontSize: 13, color: '#6B7280', fontFamily: 'Inter_18pt-Medium', marginBottom: 20 }}>Minimum withdrawal: ₹250 · Processed within 24 hrs</Text>

            {/* Balance chip */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F0FDF4', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 16 }}>
              <Text style={{ fontSize: 13, color: '#374151', fontFamily: 'Inter_18pt-Medium' }}>Available Balance</Text>
              <Text style={{ fontSize: 15, fontFamily: 'Inter_18pt-Bold', color: '#059669' }}>₹2,450.75</Text>
            </View>

            {/* Amount Input */}
            <Text style={{ fontSize: 12, fontFamily: 'Inter_18pt-SemiBold', color: '#6B7280', marginBottom: 8 }}>Withdrawal Amount</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#D1D5DB', borderRadius: 12, paddingHorizontal: 14, marginBottom: 20 }}>
              <Text style={{ fontSize: 18, color: '#6B7280', fontFamily: 'Inter_18pt-Bold' }}>₹</Text>
              <TextInput
                style={{ flex: 1, height: 52, fontSize: 18, fontFamily: 'Inter_18pt-Bold', color: '#111827', paddingLeft: 8 }}
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={withdrawAmount}
                onChangeText={setWithdrawAmount}
              />
              <TouchableOpacity onPress={() => setWithdrawAmount('2450')}>
                <Text style={{ fontSize: 13, fontFamily: 'Inter_18pt-Bold', color: '#059669' }}>MAX</Text>
              </TouchableOpacity>
            </View>

            {/* Withdraw Method */}
            <Text style={{ fontSize: 13, fontFamily: 'Inter_18pt-Bold', color: '#374151', marginBottom: 12 }}>Withdraw To</Text>

            <TouchableOpacity
              onPress={() => setWithdrawMethod('bank')}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderWidth: 1.5, borderColor: withdrawMethod === 'bank' ? '#059669' : '#E5E7EB', borderRadius: 12, marginBottom: 10, backgroundColor: withdrawMethod === 'bank' ? '#F0FDF4' : '#FFFFFF' }}
            >
              <AccBank width={22} height={22} color={withdrawMethod === 'bank' ? '#059669' : '#6B7280'} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-SemiBold', color: '#111827' }}>HDFC Bank</Text>
                <Text style={{ fontSize: 12, color: '#6B7280', fontFamily: 'Inter_18pt-Medium' }}>Savings · **** 1234</Text>
              </View>
              <RadioDot active={withdrawMethod === 'bank'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setWithdrawMethod('upi')}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderWidth: 1.5, borderColor: withdrawMethod === 'upi' ? '#059669' : '#E5E7EB', borderRadius: 12, marginBottom: 24, backgroundColor: withdrawMethod === 'upi' ? '#F0FDF4' : '#FFFFFF' }}
            >
              <AccUpi width={22} height={22} color={withdrawMethod === 'upi' ? '#059669' : '#6B7280'} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-SemiBold', color: '#111827' }}>UPI</Text>
                <Text style={{ fontSize: 12, color: '#6B7280', fontFamily: 'Inter_18pt-Medium' }}>user@upi</Text>
              </View>
              <RadioDot active={withdrawMethod === 'upi'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: '#059669', borderRadius: 12, paddingVertical: 16, alignItems: 'center' }}
              onPress={() => { setShowWithdraw(false); setWithdrawAmount(''); }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Inter_18pt-Bold' }}>
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
