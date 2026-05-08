import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
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
import CustomHeader from '../../Components/CustomHeader';
import { giftCardStyles as styles } from '../../Styles/styles';


const tabs = [
  { id: 'buy', label: 'Buy Gift Cards', Icon: GcGift },
  { id: 'my', label: 'My Gift Cards', Icon: GcMyCards },
];

const myGiftCards = [
  {
    id: 'my-1',
    name: 'Amazon Pay',
    amount: '₹5,000',
    code: 'XXXX-XXXX-XXXX-1234',
    expiry: 'Dec 2026',
    image: require('../../../assets/images/amazon_pay.png'),
    bg: '#F3F3F3',
  },
  {
    id: 'my-2',
    name: 'Zomato',
    amount: '₹500',
    code: 'XXXX-XXXX-XXXX-5678',
    expiry: 'Oct 2026',
    image: require('../../../assets/images/zomato.png'),
    bg: '#FFF0F0',
  },
];

const categories = [
  {
    name: 'Amazon Pay',
    image: require('../../../assets/images/amazon_white.png'),
    offer: 'Up to 5% OFF',
    bg: '#F3F3F3',
  },
  {
    name: 'Flipkart',
    image: require('../../../assets/images/flipkart.png'),
    offer: 'Up to 2% OFF',
    bg: '#E8F3FF',
  },
  {
    name: 'Myntra',
    image: require('../../../assets/images/myntra.png'),
    offer: 'Up to 3% OFF',
    bg: '#FFF0F5',
  },
  {
    name: 'Zomato',
    image: require('../../../assets/images/zomato.png'),
    offer: 'Up to 5% OFF',
    bg: '#FFF0F0',
  },
  {
    name: 'Tata CLiQ',
    image: require('../../../assets/images/tata_cliq.png'),
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

const CategoryCard = ({ item, onPress }) => {
  const Logo = item.Logo;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.categoryCard}
      onPress={onPress}
    >
      <View style={[styles.categoryLogoWrap, { backgroundColor: item.bg }]}>
        {item.image ? (
          <Image
            source={item.image}
            style={{ width: 52, height: 36 }}
            resizeMode="contain"
          />
        ) : (
          Logo && <Logo width={36} height={36} />
        )}
      </View>
      <Text style={styles.categoryBrandName}>{item.name}</Text>
      <Text style={styles.categoryOffer}>{item.offer}</Text>
    </TouchableOpacity>
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

const GiftCardItem = ({ item, onPress }) => {
  const TypeIcon = item.TypeIcon;
  return (
    <TouchableOpacity style={styles.giftCardItem} onPress={onPress}>
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
    </TouchableOpacity>
  );
};


/* ─── main screen ───────────────────────────────────────────────────── */
const GiftCardsScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('buy');

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#EEEAF8" />


      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CustomHeader title="Gift Cards" showBack={false} showNotificationBell={true} showLogo={true} />

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

        {activeTab === 'buy' ? (
          <>
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
                <CategoryCard
                  key={item.name}
                  item={item}
                  onPress={() => navigation.navigate('GiftCardCheckoutScreen')}
                />
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
                <GiftCardItem
                  key={item.id}
                  item={item}
                  onPress={() => navigation.navigate('GiftCardCheckoutScreen')}
                />
              ))}
            </View>
          </>
        ) : (
          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            {myGiftCards.map(card => (
              <TouchableOpacity 
                key={card.id} 
                activeOpacity={0.9}
                onPress={() => navigation.navigate('SellGiftCardScreen')}
                style={{ backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 16, elevation: 2, borderWidth: 1, borderColor: '#F3F4F6' }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <View style={{ flexDirection: 'row', gap: 12 }}>
                    <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: card.bg, alignItems: 'center', justifyContent: 'center' }}>
                      {card.image ? (
                        <Image source={card.image} style={{ width: 34, height: 34 }} resizeMode="contain" />
                      ) : (
                        card.Logo && <card.Logo width={32} height={32} />
                      )}
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, fontFamily: 'Inter_18pt-Bold', color: '#111827' }}>{card.name}</Text>
                      <Text style={{ fontSize: 14, color: '#6B7280', fontFamily: 'Inter_18pt-Medium' }}>{card.amount}</Text>
                    </View>
                  </View>
                  <View style={{ gap: 8, alignItems: 'flex-end' }}>
                    <View style={{ backgroundColor: '#F0FDF4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 }}>
                      <Text style={{ fontSize: 10, color: '#16A34A', fontFamily: 'Inter_18pt-Bold' }}>Active</Text>
                    </View>
                    <Text style={{ fontSize: 10, color: '#4A2FD8', fontFamily: 'Inter_18pt-Bold' }}>Click to Sell →</Text>
                  </View>
                </View>
                <View style={{ height: 1, backgroundColor: '#F3F4F6', marginVertical: 12 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View>
                    <Text style={{ fontSize: 10, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 0.5 }}>Card Code</Text>
                    <Text style={{ fontSize: 13, color: '#374151', fontFamily: 'Inter_18pt-SemiBold', marginTop: 2 }}>{card.code}</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 10, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 0.5 }}>Expiry</Text>
                    <Text style={{ fontSize: 13, color: '#374151', fontFamily: 'Inter_18pt-SemiBold', marginTop: 2 }}>{card.expiry}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

      </ScrollView>
    </View>
  );
};

export default GiftCardsScreen;
