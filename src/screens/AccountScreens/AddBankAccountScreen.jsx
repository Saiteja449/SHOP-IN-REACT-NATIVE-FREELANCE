import React from 'react';
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
import { bankStyles as styles } from '../../Styles/styles';

const AddBankAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader title="Add Bank Account" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Information</Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Account Holder Name</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  placeholder="Enter account holder name"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Bank Name</Text>
              <View style={styles.inputWrap}>
                <TouchableOpacity style={styles.selectWrap}>
                  <Text style={styles.placeholder}>Select bank</Text>
                  <Text style={styles.dropdownIcon}>⌄</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Account Number</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  placeholder="Enter account number"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>IFSC Code</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  placeholder="Enter IFSC code"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  autoCapitalize="characters"
                />
                <TouchableOpacity>
                  <Text style={styles.findIfsc}>Find IFSC</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm Account Number</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  placeholder="Re-enter account number"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  keyboardType="number-pad"
                />
              </View>
            </View>
          </View>

          <View style={styles.securityBanner}>
            <ShieldCheck width={32} height={32} color="#16A34A" />
            <View style={styles.securityContent}>
              <Text style={styles.securityTitle}>Your bank details are 100% secure</Text>
              <Text style={styles.securityDesc}>
                We use bank-grade security to protect your information.
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.saveBtnText}>Save Bank Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddBankAccountScreen;
