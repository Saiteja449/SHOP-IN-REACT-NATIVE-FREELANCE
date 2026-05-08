import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AccChat from '../../Icons/AccChat.svg';
import AccFaq from '../../Icons/AccFaq.svg';
import AccTicket from '../../Icons/AccTicket.svg';
import AccWhatsapp from '../../Icons/AccWhatsapp.svg';
import GcBack from '../../Icons/GcBack.svg';
import GcChevronRight from '../../Icons/GcChevronRight.svg';
import CustomHeader from '../../Components/CustomHeader';
import {
  accountStyles as commonStyles,
  supportStyles as styles,
} from '../../Styles/styles';


const SupportCenterScreen = ({ navigation }) => {
  const topics = [
    'How does cashback work?',
    'When will I receive my cashback?',
    'How to redeem gift cards?',
    'How to withdraw money?',
    'How to track my order?',
  ];

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <CustomHeader
        title="Support Center"
        onBackPress={() => navigation.goBack()}
      />


      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.introTitle}>How can we help you?</Text>
        <Text style={styles.introSub}>
          Find answers or chat with our support team.
        </Text>

        {/* Support Grid */}
        <View style={styles.supportGrid}>
          <TouchableOpacity style={styles.supportCard}>
            <View style={styles.supportIconBox}>
              <AccFaq width={24} height={24} color="#16A34A" />
            </View>
            <Text style={styles.supportLabel}>FAQ</Text>
            <Text style={styles.supportDesc}>
              Find answers to common questions
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportCard}>
            <View
              style={[styles.supportIconBox, { backgroundColor: '#F0FDF4' }]}
            >
              <AccTicket width={24} height={24} color="#16A34A" />
            </View>
            <Text style={styles.supportLabel}>My Tickets</Text>
            <Text style={styles.supportDesc}>View your support tickets</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportCard}>
            <View
              style={[styles.supportIconBox, { backgroundColor: '#F0FDF4' }]}
            >
              <AccChat width={24} height={24} color="#16A34A" />
            </View>
            <Text style={styles.supportLabel}>Live Chat</Text>
            <Text style={styles.supportDesc}>Chat with our support team</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportCard}>
            <View
              style={[styles.supportIconBox, { backgroundColor: '#F0FDF4' }]}
            >
              <AccWhatsapp width={24} height={24} color="#16A34A" />
            </View>
            <Text style={styles.supportLabel}>WhatsApp Support</Text>
            <Text style={styles.supportDesc}>Chat with us on WhatsApp</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Topics */}
        <View style={styles.topicsSection}>
          <Text style={styles.popularTitle}>Popular Topics</Text>

          {topics.map((topic, index) => (
            <TouchableOpacity key={index} style={styles.topicItem}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#9CA3AF',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 10, color: '#9CA3AF' }}>?</Text>
              </View>
              <Text style={styles.topicText}>{topic}</Text>
              <GcChevronRight width={18} height={18} color="#9CA3AF" />
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.viewAllFaqs}>
            <Text style={styles.viewAllText}>View All FAQs</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SupportCenterScreen;
