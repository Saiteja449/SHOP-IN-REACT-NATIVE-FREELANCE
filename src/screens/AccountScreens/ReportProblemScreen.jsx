import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AccCardId from '../../Icons/AccCardId.svg';
import AccFlag from '../../Icons/AccFlag.svg';
import AccHeadset from '../../Icons/AccHeadset.svg';
import AccPayment from '../../Icons/AccPayment.svg';
import AccRupee from '../../Icons/AccRupee.svg';
import GcBack from '../../Icons/GcBack.svg';
import GcChevronRight from '../../Icons/GcChevronRight.svg';
import {
  accountStyles as commonStyles,
  problemStyles as styles,
} from '../../Styles/styles';

const ReportProblemScreen = ({ navigation }) => {
  const issues = [
    {
      title: 'Cashback Missing',
      sub: 'I did not receive cashback for my order',
      Icon: AccRupee,
    },
    {
      title: 'Gift Card Issue',
      sub: 'Problem with my gift card',
      Icon: AccCardId,
    },
    {
      title: 'Payment Failed',
      sub: 'My payment was failed or deducted',
      Icon: AccPayment,
    },
    {
      title: 'Withdrawal Issue',
      sub: 'Issue with withdrawal or bank transfer',
      Icon: AccFlag,
    },
    {
      title: 'Other Issue',
      sub: 'I am facing some other issue',
      Icon: AccFlag,
    },
  ];

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
        <Text style={commonStyles.headerTitle}>Report a Problem</Text>
        <View style={{ width: 34 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.introTitle}>Select the issue you are facing</Text>

        {/* Issue List */}
        {issues.map((issue, index) => (
          <TouchableOpacity key={index} style={styles.issueCard}>
            <View style={styles.issueIconBox}>
              <issue.Icon width={22} height={22} color="#16A34A" />
            </View>
            <View style={styles.issueContent}>
              <Text style={styles.issueTitle}>{issue.title}</Text>
              <Text style={styles.issueSub}>{issue.sub}</Text>
            </View>
            <GcChevronRight width={18} height={18} color="#9CA3AF" />
          </TouchableOpacity>
        ))}

        {/* Help Banner */}
        <View style={styles.helpBanner}>
          <View style={styles.helpHeader}>
            <AccHeadset width={24} height={24} color="#16A34A" />
            <Text style={styles.helpTitle}>Need more help?</Text>
          </View>
          <Text style={styles.helpDesc}>
            Contact our support team and we'll resolve your issue quickly.
          </Text>
          <TouchableOpacity style={styles.contactBtn}>
            <Text style={styles.contactBtnText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportProblemScreen;
