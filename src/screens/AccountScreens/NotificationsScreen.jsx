import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import AccBell from '../../Icons/AccBell.svg';
import AccRupee from '../../Icons/AccRupee.svg';
import GcGift from '../../Icons/GcGift.svg';
import StoreCart from '../../Icons/StoreCart.svg';
import Wallet from '../../Icons/Wallet.svg';
import TabGift from '../../Icons/TabGift.svg';
import TabHome from '../../Icons/TabHome.svg';
import TabStore from '../../Icons/TabStore.svg';
import { notificationStyles as styles } from '../../Styles/styles';

const filters = [
  { id: 'all', label: 'All', Icon: TabHome, active: true },
  { id: 'offers', label: 'Offers', Icon: TabGift },
  { id: 'cashback', label: 'Cashback', Icon: AccRupee },
  { id: 'orders', label: 'Orders', Icon: StoreCart },
  { id: 'updates', label: 'Updates', Icon: AccBell },
];

const notifications = [
  {
    id: 1,
    title: 'Flat 10% Cashback Activated!!',
    desc: 'Enjoy flat 10% cashback on your next purchase from Myntra.',
    time: '2m ago',
    Icon: Wallet,
    iconBg: '#F0FDF4',
    iconColor: '#16A34A',
    isNew: true,
    unread: true,
    group: 'Today',
  },
  {
    id: 2,
    title: 'Order Delivered',
    desc: 'Your order #123456 has been delivered successfully.',
    time: '30m ago',
    Icon: StoreCart,
    iconBg: '#FFF7ED',
    iconColor: '#EA580C',
    unread: true,
    group: 'Today',
  },
  {
    id: 3,
    title: 'Gift Card Purchase Successful',
    desc: "You've purchased an Amazon Pay Gift Card worth ₹1,000.",
    time: '1h ago',
    Icon: GcGift,
    iconBg: '#F5F3FF',
    iconColor: '#7C3AED',
    unread: true,
    group: 'Today',
  },
  {
    id: 4,
    title: 'Cashback Credited',
    desc: '₹125 cashback has been added to your ShopToSave wallet.',
    time: '3h ago',
    Icon: AccRupee,
    iconBg: '#F0FDF4',
    iconColor: '#16A34A',
    unread: true,
    group: 'Today',
  },
  {
    id: 5,
    title: 'Special Offer Just for You!',
    desc: 'Get up to 8% cashback on Flipkart. Shop now and save more!',
    time: 'Yesterday',
    Icon: TabGift,
    iconBg: '#FFF7ED',
    iconColor: '#EA580C',
    unread: false,
    group: 'Yesterday',
  },
  {
    id: 6,
    title: 'Maintenance Update',
    desc: "We'll be back on 26 May, 2:00 AM to improve your experience.",
    time: '2d ago',
    Icon: AccBell,
    iconBg: '#F0F9FF',
    iconColor: '#0284C7',
    unread: false,
    group: 'Earlier',
  },
];

const NotificationItem = ({ item }) => {
  const Icon = item.Icon;
  return (
    <TouchableOpacity style={styles.notificationCard}>
      <View style={styles.iconContainer}>
        <View style={[styles.iconBox, { backgroundColor: item.iconBg }]}>
          <Icon width={24} height={24} color={item.iconColor} />
        </View>
        {item.isNew && (
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>NEW</Text>
          </View>
        )}
      </View>
      <View style={styles.contentBox}>
        <View style={styles.titleRow}>
          <Text style={styles.notifTitle}>{item.title}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <Text style={styles.notifDesc}>{item.desc}</Text>
        <View style={styles.statusRow}>
          <View style={[styles.statusDot, !item.unread && styles.statusDotRead]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const NotificationsScreen = ({ navigation }) => {
  const groupedNotifications = notifications.reduce((acc, curr) => {
    if (!acc[curr.group]) acc[curr.group] = [];
    acc[curr.group].push(curr);
    return acc;
  }, {});

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader title="Notifications" onBackPress={() => navigation.goBack()} />

      <View style={{ backgroundColor: '#FFFFFF' }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {filters.map(filter => (
            <TouchableOpacity
              key={filter.id}
              style={[styles.filterCapsule, filter.active && styles.filterCapsuleActive]}
            >
              <filter.Icon
                width={16}
                height={16}
                color={filter.active ? '#16A34A' : '#4B5563'}
              />
              <Text style={[styles.filterText, filter.active && styles.filterTextActive]}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(groupedNotifications).map(([group, items]) => (
          <View key={group}>
            <View style={styles.groupHeader}>
              <Text style={styles.groupTitle}>{group}</Text>
            </View>
            <View style={styles.notificationList}>
              {items.map(item => (
                <NotificationItem key={item.id} item={item} />
              ))}
            </View>
          </View>
        ))}

        <View style={styles.banner}>
          <View style={styles.bannerIconBox}>
            <AccBell width={24} height={24} color="#16A34A" />
          </View>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Never miss an update!</Text>
            <Text style={styles.bannerDesc}>
              Enable push notifications to get the latest offers and updates.
            </Text>
          </View>
          <TouchableOpacity style={styles.enableBtn}>
            <Text style={styles.enableBtnText}>Enable Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
