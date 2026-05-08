import React, { useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BrandAmazon from '../../Icons/BrandAmazon.svg';
import BrandFlipkart from '../../Icons/BrandFlipkart.svg';
import BrandMyntra from '../../Icons/BrandMyntra.svg';
import BrandZomato from '../../Icons/BrandZomato.svg';
import BrandTataCliq from '../../Icons/BrandTataCliq.svg';
import GcAllStores from '../../Icons/GcAllStores.svg';
import GcBack from '../../Icons/GcBack.svg';
import GcBgPattern from '../../Icons/GcBgPattern.svg';
import GcCashback from '../../Icons/GcCashback.svg';
import GcChevronRight from '../../Icons/GcChevronRight.svg';
import GcDotsMenu from '../../Icons/GcDotsMenu.svg';
import GcECommerce from '../../Icons/GcECommerce.svg';
import GcEntertainment from '../../Icons/GcEntertainment.svg';
import GcFoodDining from '../../Icons/GcFoodDining.svg';
import GcGift from '../../Icons/GcGift.svg';
import GcInStore from '../../Icons/GcInStore.svg';
import GcMore from '../../Icons/GcMore.svg';
import GcMyCards from '../../Icons/GcMyCards.svg';
import GcOnline from '../../Icons/GcOnline.svg';
import GcQrScan from '../../Icons/GcQrScan.svg';
import GcRecharge from '../../Icons/GcRecharge.svg';
import GcSearch from '../../Icons/GcSearch.svg';
import GcSell from '../../Icons/GcSell.svg';
import GcTravel from '../../Icons/GcTravel.svg';
import { giftCardStyles as styles } from '../../Styles/styles';

/* ─── data ─────────────────────────────────────────────────────────── */
const topNavItems = [
  {
    id: 'stores',
    label: 'All Stores',
    sub: 'Explore 250+ brands',
    Icon: GcAllStores,
  },
  {
    id: 'cashback',
    label: 'Cashback',
    sub: 'Earn on every purchase',
    Icon: GcCashback,
  },
  {
    id: 'gift',
    label: 'Gift Cards',
    sub: 'Buy or Sell Instantly',
    Icon: GcGift,
    active: true,
  },
];

const tabs = [
  { id: 'buy', label: 'Buy Gift Cards', Icon: GcGift },
  { id: 'sell', label: 'Sell Gift Cards', Icon: GcSell },
  { id: 'my', label: 'My Gift Cards', Icon: GcMyCards },
];

const categories = [
  {
    name: 'Amazon Pay',
    Logo: BrandAmazon,
    offer: 'Up to 5% OFF',
    bg: '#F3F3F3',
  },
  {
    name: 'Flipkart',
    Logo: BrandFlipkart,
    offer: 'Up to 2% OFF',
    bg: '#E8F3FF',
  },
  { name: 'Myntra', Logo: BrandMyntra, offer: 'Up to 3% OFF', bg: '#FFF0F5' },
  { name: 'Zomato', Logo: BrandZomato, offer: 'Up to 5% OFF', bg: '#FFF0F0' },
  {
    name: 'Tata CLiQ',
    Logo: BrandTataCliq,
    offer: 'Up to 4% OFF',
    bg: '#F5F0FF',
  },
];

const filters = [
  { id: 'ecom', label: 'E-Commerce', Icon: GcECommerce },
  { id: 'food', label: 'Food & Dining', Icon: GcFoodDining },
  { id: 'travel', label: 'Travel', Icon: GcTravel },
  { id: 'recharge', label: 'Recharge', Icon: GcRecharge },
  { id: 'ent', label: 'Entertainment', Icon: GcEntertainment },
  { id: 'more', label: 'More', Icon: GcMore },
];

const giftCards = [
  {
    id: 'reliance',
    name: 'Reliance Smart',
    type: 'Online',
    TypeIcon: GcOnline,
    tags: 'Electronics · E-commerce · Hot deals',
    save: 'SAVE 2%',
    thumbStyle: 'thumbReliance',
    thumbLabel: 'Reliance\nSMART',
  },
  {
    id: 'pvr',
    name: 'PVR',
    type: 'In-store brands',
    TypeIcon: GcInStore,
    tags: 'Entertainment',
    save: 'SAVE 20%',
    thumbStyle: 'thumbPvr',
    thumbLabel: 'PVR\n·INOX',
  },
  {
    id: 'cleartrip',
    name: 'Cleartrip',
    type: 'Online',
    TypeIcon: GcOnline,
    tags: 'Travel · Hotels · Flights',
    save: 'SAVE 7.5%',
    thumbStyle: 'thumbCleartrip',
    thumbLabel: '✓cleartrip',
  },
];

const bgPatterns = [
  { top: 10, right: 20, rotate: '12deg', size: 40 },
  { top: 4, right: 100, rotate: '-8deg', size: 32 },
  { top: 50, right: 10, rotate: '22deg', size: 28 },
  { top: 0, left: 60, rotate: '-18deg', size: 36 },
  { top: 80, left: 20, rotate: '8deg', size: 30 },
  { top: 160, right: 30, rotate: '-14deg', size: 34 },
  { top: 200, left: 10, rotate: '20deg', size: 28 },
  { top: 300, right: 60, rotate: '-10deg', size: 36 },
  { top: 400, left: 30, rotate: '15deg', size: 30 },
];

/* ─── sub-components ────────────────────────────────────────────────── */
const PhoneStatus = () => (
  <View style={styles.statusRow}>
    <Text style={styles.timeText}>9:41</Text>
    <View style={styles.statusRight}>
      <View style={styles.signalDots}>
        <View style={[styles.signalDot, styles.signalOne]} />
        <View style={[styles.signalDot, styles.signalTwo]} />
        <View style={[styles.signalDot, styles.signalThree]} />
        <View style={[styles.signalDot, styles.signalFour]} />
      </View>
      <Text style={styles.wifiText}>⌁</Text>
      <View style={styles.batteryOuter}>
        <View style={styles.batteryInner} />
      </View>
    </View>
  </View>
);

const TopNavCard = ({ item }) => {
  const Icon = item.Icon;
  const isActive = item.active;
  return (
    <View style={[styles.topNavCard, isActive && styles.topNavCardActive]}>
      <View
        style={[styles.topNavIconWrap, isActive && styles.topNavIconWrapActive]}
      >
        <Icon width={20} height={20} color={isActive ? '#FFFFFF' : '#4A2FD8'} />
      </View>
      <Text style={[styles.topNavLabel, isActive && styles.topNavLabelActive]}>
        {item.label}
      </Text>
      <Text style={[styles.topNavSub, isActive && styles.topNavSubActive]}>
        {item.sub}
      </Text>
    </View>
  );
};

const CategoryCard = ({ item }) => {
  const Logo = item.Logo;
  return (
    <View style={styles.categoryCard}>
      <View style={[styles.categoryLogoWrap, { backgroundColor: item.bg }]}>
        <Logo width={52} height={32} />
      </View>
      <Text style={styles.categoryBrandName}>{item.name}</Text>
      <Text style={styles.categoryOffer}>{item.offer}</Text>
    </View>
  );
};

const FilterItem = ({ item }) => {
  const Icon = item.Icon;
  return (
    <View style={styles.filterItem}>
      <View style={styles.filterIconWrap}>
        <Icon width={24} height={24} color="#4A2FD8" />
      </View>
      <Text style={styles.filterLabel}>{item.label}</Text>
    </View>
  );
};

const GiftCardItem = ({ item }) => {
  const TypeIcon = item.TypeIcon;
  return (
    <View style={styles.giftCardItem}>
      {/* Thumbnail */}
      <View style={[styles.giftCardThumb, styles[item.thumbStyle]]}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
          }}
        >
          <Text
            style={[
              styles.thumbLogoText,
              { fontSize: item.id === 'cleartrip' ? 8 : 10 },
            ]}
          >
            {item.thumbLabel}
          </Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.giftCardInfo}>
        <Text style={styles.giftCardName}>{item.name}</Text>
        <View style={styles.giftCardTypeRow}>
          <TypeIcon width={13} height={13} color="#7C6FAA" />
          <Text style={styles.giftCardType}>{item.type}</Text>
        </View>
        <Text style={styles.giftCardTags}>{item.tags}</Text>
        <View style={styles.giftCardSave}>
          <Text style={styles.giftCardSaveText}>{item.save}</Text>
          <GcChevronRight
            width={12}
            height={12}
            color="#2BC06A"
            style={styles.giftCardSaveChevron}
          />
        </View>
      </View>

      {/* Menu */}
      <View style={styles.giftCardMenu}>
        <GcDotsMenu width={16} height={16} color="#C0BCCF" />
      </View>
    </View>
  );
};

/* ─── main screen ───────────────────────────────────────────────────── */
const GiftCardsScreen = () => {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#EEEAF8" />

      {/* Background pattern */}
      {bgPatterns.map((p, i) => (
        <View
          key={`gc-pattern-${i}`}
          style={[
            styles.patternItem,
            {
              top: p.top,
              left: p.left,
              right: p.right,
              transform: [{ rotate: p.rotate }],
            },
          ]}
        >
          <GcBgPattern width={p.size} height={p.size} color="#5B3FD4" />
        </View>
      ))}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Status */}
        <PhoneStatus />

        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.backBtn}>
            <GcBack width={24} height={24} color="#1A1240" />
          </View>
          <Text style={styles.headerTitle}>Gift Cards</Text>
        </View>

        {/* Top 3 Nav Cards */}
        <View style={styles.topNavRow}>
          {topNavItems.map(item => (
            <TopNavCard key={item.id} item={item} />
          ))}
        </View>

        {/* Cashback Banner */}
        <LinearGradient
          colors={['#4A2FD8', '#6B47F5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.cashbackBanner}
        >
          <View style={styles.cashbackLeft}>
            <Text style={styles.cashbackLabel}>Total Cashback Earned</Text>
            <Text style={styles.cashbackAmount}>₹1,250</Text>
            <Text style={styles.cashbackSub}>Lifetime</Text>
          </View>

          <View style={styles.cashbackDivider} />

          <View style={styles.cashbackRight}>
            <View>
              <Text style={styles.cashbackLabel}>Available Balance</Text>
              <Text style={styles.cashbackAmount}>₹3,450</Text>
            </View>
            <View style={styles.cashbackArrow}>
              <GcChevronRight width={14} height={14} color="#FFFFFF" />
            </View>
          </View>
        </LinearGradient>

        {/* Tabs */}
        <View style={styles.tabRow}>
          {tabs.map(tab => {
            const Icon = tab.Icon;
            const isActive = activeTab === tab.id;
            return (
              <View
                key={tab.id}
                style={[styles.tabItem, isActive && styles.tabItemActive]}
                onStartShouldSetResponder={() => {
                  setActiveTab(tab.id);
                  return true;
                }}
              >
                <Icon
                  width={14}
                  height={14}
                  color={isActive ? '#4A2FD8' : '#9591B0'}
                />
                <Text
                  style={[styles.tabLabel, isActive && styles.tabLabelActive]}
                >
                  {tab.label}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <GcSearch width={18} height={18} color="#A09CBB" />
          <Text style={styles.searchPlaceholder}>
            Search for brands or categories
          </Text>
          <View style={styles.qrBtn}>
            <GcQrScan width={20} height={20} color="#9591B0" />
          </View>
        </View>

        {/* Browse by Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Browse by Categories</Text>
          <View style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View All</Text>
            <GcChevronRight width={13} height={13} color="#4A2FD8" />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map(item => (
            <CategoryCard key={item.name} item={item} />
          ))}
        </ScrollView>

        {/* Top Gift Cards Filters */}
        <View style={[styles.sectionHeader, { marginTop: 18 }]}>
          <Text style={styles.sectionTitle}>Top Gift Cards</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {filters.map(item => (
            <FilterItem key={item.id} item={item} />
          ))}
        </ScrollView>

        {/* All Gift Cards */}
        <View style={styles.allGiftCardsSection}>
          <Text style={styles.allGiftCardsTitle}>All Gift Cards</Text>
          {giftCards.map(item => (
            <GiftCardItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GiftCardsScreen;
