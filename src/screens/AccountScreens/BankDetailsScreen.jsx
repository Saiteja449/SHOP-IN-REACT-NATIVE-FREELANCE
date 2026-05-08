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
import GcChevronRight from '../../Icons/GcChevronRight.svg';
import { bankStyles as styles } from '../../Styles/styles';

const bankAccounts = [
  {
    id: 1,
    bankName: 'HDFC Bank Ltd.',
    accNumber: '**** **** 4567',
    holderName: 'Rahul Sharma',
    isPrimary: true,
  },
];

const BankDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader title="Bank Accounts" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Bank Accounts</Text>
          
          <View style={styles.card}>
            {bankAccounts.map((acc, index) => (
              <View key={acc.id}>
                <TouchableOpacity style={styles.bankItem}>
                  <View style={styles.bankIconBox}>
                    <AccBank width={24} height={24} color="#16A34A" />
                  </View>
                  <View style={styles.bankInfo}>
                    <Text style={styles.bankName}>{acc.bankName}</Text>
                    <Text style={styles.accNumber}>{acc.accNumber}</Text>
                  </View>
                  <GcChevronRight width={18} height={18} color="#9CA3AF" />
                </TouchableOpacity>
                {index < bankAccounts.length - 1 && (
                  <View style={{ height: 1, backgroundColor: '#F3F4F6', marginVertical: 12 }} />
                )}
              </View>
            ))}
          </View>

          <TouchableOpacity 
            style={styles.addBankBtn}
            onPress={() => navigation.navigate('AddBankAccountScreen')}
          >
            <Text style={{ fontSize: 20, color: '#16A34A' }}>+</Text>
            <Text style={styles.addBankText}>Add New Bank Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BankDetailsScreen;
