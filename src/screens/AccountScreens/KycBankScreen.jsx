import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AccBank from '../../Icons/AccBank.svg';
import AccCalendar from '../../Icons/AccCalendar.svg';
import AccCardId from '../../Icons/AccCardId.svg';
import AccCheck from '../../Icons/AccCheck.svg';
import AccHistory from '../../Icons/AccHistory.svg';
import AccMail from '../../Icons/AccMail.svg';
import AccPerson from '../../Icons/AccPerson.svg';
import AccPhone from '../../Icons/AccPhone.svg';
import AccUpi from '../../Icons/AccUpi.svg';
import GcBack from '../../Icons/GcBack.svg';
import GcChevronRight from '../../Icons/GcChevronRight.svg';
import {
  accountStyles as commonStyles,
  kycStyles as styles,
} from '../../Styles/styles';

const KycBankScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={commonStyles.header}>
        <TouchableOpacity
          style={commonStyles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <GcBack width={24} height={24} color="#059669" />
        </TouchableOpacity>
        <Text style={commonStyles.headerTitle}>KYC & Bank Details</Text>
        <View style={{ width: 34 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Verification Status */}
        <View style={styles.statusCard}>
          <AccCheck width={40} height={40} color="#16A34A" />
          <View style={styles.statusTextContent}>
            <Text style={styles.statusTitle}>Verification Completed</Text>
            <Text style={styles.statusDesc}>
              Your KYC and bank details are verified.
            </Text>
          </View>
        </View>

        {/* Personal Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccPerson width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>Full Name</Text>
              <Text style={styles.fieldValue}>Rahul Sharma</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccCalendar width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>Date of Birth</Text>
              <Text style={styles.fieldValue}>12 Aug 1995</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccPhone width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>Mobile Number</Text>
              <Text style={styles.fieldValue}>+91 98765 43210</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccMail width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>Email Address</Text>
              <Text style={styles.fieldValue}>rahul.sharma@email.com</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>
        </View>

        {/* KYC Documents */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>KYC Documents</Text>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccCardId width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>Aadhaar Card</Text>
              <Text style={styles.fieldValue}>XXXX XXXX 1234</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccCardId width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>PAN Card</Text>
              <Text style={styles.fieldValue}>XXXXX1234A</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>
        </View>

        {/* Bank Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bank Details</Text>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccBank width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>Bank Name</Text>
              <Text style={styles.fieldValue}>HDFC Bank Ltd.</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccCardId width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>Account Number</Text>
              <Text style={styles.fieldValue}>**** **** **** 4567</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccHistory width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>IFSC Code</Text>
              <Text style={styles.fieldValue}>HDFC0001234</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>

          <View style={styles.field}>
            <View style={styles.fieldIconBox}>
              <AccUpi width={20} height={20} color="#16A34A" />
            </View>
            <View style={styles.fieldContent}>
              <Text style={styles.fieldLabel}>UPI ID</Text>
              <Text style={styles.fieldValue}>rahulsharma@upi</Text>
            </View>
            <AccCheck width={18} height={18} color="#16A34A" />
          </View>
        </View>

        {/* Update Banner */}
        <View style={styles.updateBanner}>
          <View style={[styles.fieldIconBox, { backgroundColor: '#FFFFFF' }]}>
            <AccCalendar width={20} height={20} color="#16A34A" />
          </View>
          <View style={styles.updateTextContent}>
            <Text style={styles.updateTitle}>Need to update your details?</Text>
            <Text style={styles.updateDesc}>
              You can update your KYC & Bank details once in 6 months.
            </Text>
          </View>
          <TouchableOpacity style={styles.updateAction}>
            <Text style={styles.updateBtnText}>Update Now</Text>
            <GcChevronRight width={14} height={14} color="#16A34A" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default KycBankScreen;
