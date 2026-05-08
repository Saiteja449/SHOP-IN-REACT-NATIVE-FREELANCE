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
import { checkoutStyles as styles } from '../../Styles/styles';

const SellGiftCardScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');

  const calculatePayout = (amt) => {
    const num = parseFloat(amt) || 0;
    return (num * 0.92).toFixed(2); // 8% fee
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader 
        title="Sell Gift Card" 
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Step Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#EEF2FF', alignItems: 'center', justifyContent: 'center' }}>
            <AccDoc width={20} height={20} color="#4338CA" />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontFamily: 'Inter_18pt-Bold', color: '#111827' }}>Sell Instantly</Text>
            <Text style={{ fontSize: 12, color: '#6B7280' }}>Get the best value for your unused cards</Text>
          </View>
        </View>

        {/* Brand Selection */}
        <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-Bold', color: '#374151', marginBottom: 12 }}>Select Brand</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 12, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, marginBottom: 24 }}>
          <BrandAmazon width={32} height={32} />
          <Text style={{ flex: 1, marginLeft: 12, fontSize: 16, fontFamily: 'Inter_18pt-SemiBold', color: '#111827' }}>Amazon Pay</Text>
          <GcChevronRight width={20} height={20} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Card Details */}
        <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-Bold', color: '#374151', marginBottom: 16 }}>Card Details</Text>
        <View style={{ gap: 20, marginBottom: 24 }}>
          <View>
            <Text style={{ fontSize: 12, fontFamily: 'Inter_18pt-SemiBold', color: '#6B7280', marginBottom: 8, marginLeft: 4 }}>Gift Card Code</Text>
            <TextInput 
              style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, padding: 12, fontSize: 14, color: '#111827', fontFamily: 'Inter_18pt-SemiBold' }}
              placeholder="e.g. ASDF-1234-QWER"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <View>
            <Text style={{ fontSize: 12, fontFamily: 'Inter_18pt-SemiBold', color: '#6B7280', marginBottom: 8, marginLeft: 4 }}>Card PIN (If applicable)</Text>
            <TextInput 
              style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, padding: 12, fontSize: 14, color: '#111827', fontFamily: 'Inter_18pt-SemiBold' }}
              placeholder="4 or 6 digit PIN"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
            />
          </View>
          <View>
            <Text style={{ fontSize: 12, fontFamily: 'Inter_18pt-SemiBold', color: '#6B7280', marginBottom: 8, marginLeft: 4 }}>Card Value (Balance)</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, paddingHorizontal: 12 }}>
              <Text style={{ fontSize: 16, color: '#6B7280', fontFamily: 'Inter_18pt-Bold' }}>₹</Text>
              <TextInput 
                style={{ flex: 1, height: 50, fontSize: 16, fontFamily: 'Inter_18pt-Bold', color: '#111827', paddingLeft: 8 }}
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
              />
            </View>
            <Text style={{ fontSize: 11, color: '#9CA3AF', marginTop: 6, marginLeft: 4, fontFamily: 'Inter_18pt-Medium' }}>Min: ₹100, Max: ₹50,000</Text>
          </View>
        </View>

        {/* Payout Preview */}
        {amount > 0 && (
          <View style={{ backgroundColor: '#F9FAFB', borderRadius: 16, padding: 16, marginBottom: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={{ color: '#6B7280', fontSize: 14 }}>Selling Value</Text>
              <Text style={{ color: '#111827', fontSize: 14, fontFamily: 'Inter_18pt-Bold' }}>₹{amount}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={{ color: '#6B7280', fontSize: 14 }}>Transaction Fee (8%)</Text>
              <Text style={{ color: '#EF4444', fontSize: 14, fontFamily: 'Inter_18pt-Bold' }}>- ₹{(amount * 0.08).toFixed(2)}</Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#E5E7EB', marginVertical: 8 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#111827', fontSize: 16, fontFamily: 'Inter_18pt-Bold' }}>You will receive</Text>
              <Text style={{ color: '#10B981', fontSize: 18, fontFamily: 'Inter_18pt-Bold' }}>₹{calculatePayout(amount)}</Text>
            </View>
          </View>
        )}

        {/* Payout Method */}
        <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-Bold', color: '#374151', marginBottom: 12 }}>Payout Method</Text>
        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', padding: 12, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, marginBottom: 24 }}
          onPress={() => navigation.navigate('BankDetailsScreen')}
        >
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#F5F3FF', alignItems: 'center', justifyContent: 'center' }}>
            <AccBank width={24} height={24} color="#4338CA" />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-SemiBold', color: '#111827' }}>Bank Transfer</Text>
            <Text style={{ fontSize: 12, color: '#6B7280', fontFamily: 'Inter_18pt-Medium' }}>HDFC Bank · **** 1234</Text>
          </View>
          <Text style={{ fontSize: 12, color: '#4338CA', fontFamily: 'Inter_18pt-Bold', marginRight: 8 }}>Change</Text>
          <GcChevronRight width={20} height={20} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity 
          style={{ backgroundColor: '#4338CA', borderRadius: 12, paddingVertical: 16, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 10 }}
          onPress={() => navigation.navigate('SellConfirmationScreen')}
        >
          <ShieldCheck width={20} height={20} color="#FFFFFF" />
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Inter_18pt-Bold' }}>Verify & Sell Now</Text>
        </TouchableOpacity>

        {/* Safety Note */}
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <ShieldCheck width={16} height={16} color="#9CA3AF" />
          <Text style={{ color: '#9CA3AF', fontSize: 12 }}>Secured by SSL Encryption</Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default SellGiftCardScreen;
