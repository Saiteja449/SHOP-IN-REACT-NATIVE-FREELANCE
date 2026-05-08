import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import AccCalendar from '../../Icons/AccCalendar.svg';
import GcBack from '../../Icons/GcBack.svg';
import GcChevronRight from '../../Icons/GcChevronRight.svg';
import StoreSearch from '../../Icons/StoreSearch.svg';
import TabStore from '../../Icons/TabStore.svg';
import CustomHeader from '../../Components/CustomHeader';
import { cashbackHistoryStyles as styles } from '../../Styles/styles';


const summaryData = [
  { label: 'Pending', value: '₹420.00', sub: '5 Transactions', type: 'pending' },
  { label: 'Confirmed', value: '₹1,850.75', sub: '18 Transactions', type: 'confirmed' },
  { label: 'Rejected', value: '₹35.00', sub: '2 Transactions', type: 'rejected' },
];

const storeTabs = ['All Stores', 'Amazon', 'Flipkart', 'Myntra', 'Zomato', 'More'];

const transactions = [
  {
    id: '1',
    date: '20 May 2024',
    time: '10:30 AM',
    store: 'Amazon',
    logo: require('../../../assets/images/amazon_white.png'),
    orderId: 'AMZ12345678',
    amount: '₹125.50',
    status: 'Confirmed',
  },
  {
    id: '2',
    date: '20 May 2024',
    time: '09:15 AM',
    store: 'Flipkart',
    logo: require('../../../assets/images/flipkart.png'),
    orderId: 'FKT87654321',
    amount: '₹80.00',
    status: 'Pending',
  },
  {
    id: '3',
    date: '18 May 2024',
    time: '11:45 AM',
    store: 'Myntra',
    logo: require('../../../assets/images/myntra.png'),
    orderId: 'MYN11223344',
    amount: '₹150.00',
    status: 'Confirmed',
  },
  {
    id: '4',
    date: '17 May 2024',
    time: '06:20 PM',
    store: 'Zomato',
    logo: require('../../../assets/images/zomato.png'),
    orderId: 'ZOM55443322',
    amount: '₹120.00',
    status: 'Pending',
  },
  {
    id: '5',
    date: '16 May 2024',
    time: '04:10 PM',
    store: 'BigBasket',
    logo: null, // Placeholder
    orderId: 'BBK99887766',
    amount: '₹75.25',
    status: 'Confirmed',
  },
  {
    id: '6',
    date: '15 May 2024',
    time: '02:30 AM',
    store: 'Amazon',
    logo: require('../../../assets/images/amazon_white.png'),
    orderId: 'AMZ87654321',
    amount: '₹110.00',
    status: 'Rejected',
    reason: 'Order cancelled',
  },
  {
    id: '7',
    date: '14 May 2024',
    time: '01:05 PM',
    store: 'Flipkart',
    logo: require('../../../assets/images/flipkart.png'),
    orderId: 'FKT33445566',
    amount: '₹60.00',
    status: 'Rejected',
    reason: 'Ineligible for cashback',
  },
];

const CashbackHistoryScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All Stores');

  const renderSummaryCard = (item) => {
    let cardStyle = styles.pendingCard;
    let labelColor = '#D97706';
    if (item.type === 'confirmed') {
      cardStyle = styles.confirmedCard;
      labelColor = '#059669';
    } else if (item.type === 'rejected') {
      cardStyle = styles.rejectedCard;
      labelColor = '#DC2626';
    }

    return (
      <View key={item.label} style={[styles.summaryCard, cardStyle]}>
        <Text style={[styles.summaryLabel, { color: labelColor }]}>{item.label}</Text>
        <Text style={styles.summaryValue}>{item.value}</Text>
        <Text style={styles.summarySub}>{item.sub}</Text>
      </View>
    );
  };

  const renderTransaction = ({ item }) => {
    let statusBg = '#F0FDF4';
    let statusColor = '#059669';
    let amountColor = '#059669';

    if (item.status === 'Pending') {
      statusBg = '#FFFBEB';
      statusColor = '#D97706';
      amountColor = '#D97706';
    } else if (item.status === 'Rejected') {
      statusBg = '#FEF2F2';
      statusColor = '#DC2626';
      amountColor = '#DC2626';
    }

    return (
      <TouchableOpacity style={styles.transactionItem}>
        <View style={styles.mainRow}>
          <View style={styles.dateCol}>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
          <View style={styles.storeCol}>
            <View style={styles.storeLogo}>
              {item.logo ? (
                <Image source={item.logo} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
              ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F4F6' }}>
                  <Text style={{ fontSize: 10, color: '#9CA3AF' }}>BB</Text>
                </View>
              )}
            </View>
            <View>
              <Text style={styles.storeName}>{item.store}</Text>
              <Text style={styles.orderId}>{item.orderId}</Text>
            </View>
          </View>
          <View style={styles.amountCol}>
            <Text style={[styles.amountText, { color: amountColor }]}>+ {item.amount}</Text>
          </View>
          <View style={styles.statusCol}>
            <View style={[styles.statusBadge, { backgroundColor: statusBg }]}>
              <Text style={[styles.statusText, { color: statusColor }]}>{item.status}</Text>
            </View>
          </View>
          <View style={styles.chevronCol}>
            <GcChevronRight width={16} height={16} color="#9CA3AF" />
          </View>
        </View>
        {item.reason && (
          <View style={styles.reasonRow}>
            <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 8, color: '#6B7280' }}>!</Text>
            </View>
            <Text style={styles.reasonText}>Reason: {item.reason}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <CustomHeader
        title="Cashback History"
        onBackPress={() => navigation.goBack()}
        RightComponent={() => (
          <TouchableOpacity>
            <AccCalendar width={24} height={24} color="#059669" />
          </TouchableOpacity>
        )}
      />


      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        ListHeaderComponent={
          <>
            {/* Summary Cards */}
            <View style={styles.summaryRow}>
              {summaryData.map(renderSummaryCard)}
            </View>

            {/* Search & Filter */}
            <View style={styles.searchFilterRow}>
              <View style={styles.searchBox}>
                <StoreSearch width={18} height={18} color="#9CA3AF" />
                <TextInput
                  placeholder="Search by store or order ID..."
                  style={styles.searchInput}
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              <TouchableOpacity style={styles.filterBtn}>
                <TabStore width={18} height={18} color="#059669" />
                <Text style={styles.filterText}>Filter</Text>
              </TouchableOpacity>
            </View>

            {/* Store Tabs */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsScroll}
            >
              {storeTabs.map((tab) => (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tab, activeTab === tab && styles.tabActive]}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* List Table Header */}
            <View style={styles.listHeader}>
              <Text style={[styles.headerCol, { width: 80 }]}>Date</Text>
              <Text style={[styles.headerCol, { flex: 1 }]}>Store</Text>
              <Text style={[styles.headerCol, { width: 80, textAlign: 'right', paddingRight: 10 }]}>Amount</Text>
              <Text style={[styles.headerCol, { width: 80, textAlign: 'center' }]}>Status</Text>
              <View style={{ width: 20 }} />
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CashbackHistoryScreen;
