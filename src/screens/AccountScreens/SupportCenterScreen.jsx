import React, { useState } from 'react';
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
  const [expandedIndex, setExpandedIndex] = useState(null);

  const topics = [
    {
      question: 'How does cashback work?',
      answer: 'When you shop through our partner stores, we receive a commission. We share a major portion of this commission with you as cashback in your wallet.'
    },
    {
      question: 'When will I receive my cashback?',
      answer: 'Cashback usually tracks within 48-72 hours. Once tracked, it remains in "Pending" status until the store confirms it (usually 60-90 days after purchase).'
    },
    {
      question: 'How to redeem gift cards?',
      answer: 'You can buy gift cards using your wallet balance or UPI. Once purchased, the code will be available in the "My Gift Cards" section of the Gift Cards tab.'
    },
    {
      question: 'How to withdraw money?',
      answer: 'You can withdraw your "Confirmed" cashback to your bank account once you reach the minimum threshold of ₹250. UPI withdrawals are also supported.'
    },
    {
      question: 'How to track my order?',
      answer: 'For gift card purchases, you can track them in your transaction history. For store orders, please check the specific store app/website after 48 hours.'
    },
  ];

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
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

        <View style={styles.topicsSection}>
          <Text style={styles.popularTitle}>Popular Topics</Text>

          {topics.map((item, index) => (
            <View key={index} style={{ borderBottomWidth: 1, borderBottomColor: '#F3F4F6' }}>
              <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}
                style={[styles.topicItem, { borderBottomWidth: 0 }]}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: expandedIndex === index ? '#16A34A' : '#9CA3AF',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: 10, color: expandedIndex === index ? '#16A34A' : '#9CA3AF', fontFamily: 'Inter_18pt-Bold' }}>?</Text>
                </View>
                <Text style={[styles.topicText, expandedIndex === index && { color: '#16A34A', fontFamily: 'Inter_18pt-Bold' }]}>{item.question}</Text>
                <View style={{ transform: [{ rotate: expandedIndex === index ? '90deg' : '0deg' }] }}>
                  <GcChevronRight width={18} height={18} color="#9CA3AF" />
                </View>
              </TouchableOpacity>
              
              {expandedIndex === index && (
                <View style={{ paddingHorizontal: 16, paddingBottom: 16, paddingLeft: 46 }}>
                  <Text style={{ fontSize: 14, color: '#4B5563', lineHeight: 20, fontFamily: 'Inter_18pt-Medium' }}>
                    {item.answer}
                  </Text>
                </View>
              )}
            </View>
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
