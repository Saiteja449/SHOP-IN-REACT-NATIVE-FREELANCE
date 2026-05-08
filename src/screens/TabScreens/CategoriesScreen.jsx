import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AllStoreBag from '../../Icons/AllStoreBag.svg';
import CategoryBeauty from '../../Icons/CategoryBeauty.svg';
import CategoryElectronics from '../../Icons/CategoryElectronics.svg';
import CategoryFashion from '../../Icons/CategoryFashion.svg';
import CategoryGrocery from '../../Icons/CategoryGrocery.svg';
import CategoryHome from '../../Icons/CategoryHome.svg';
import HeroWalletCoins from '../../Icons/HeroWalletCoins.svg';
import StoreSearch from '../../Icons/StoreSearch.svg';
import TabGift from '../../Icons/TabGift.svg';
import AccRupee from '../../Icons/AccRupee.svg';
import { cashbackStyles as styles } from '../../Styles/styles';

const promoCards = [
  {
    title: 'Cashback',
    subtitle: 'UP TO 8%',
    Icon: AccRupee,
    tone: '#16A34A',
  },
  {
    title: 'Gift Cards',
    subtitle: 'SAVE MORE',
    Icon: TabGift,
    tone: '#16A34A',
  },
  {
    title: 'All in One',
    subtitle: '1000+ STORES',
    Icon: AllStoreBag,
    tone: '#16A34A',
  },
];

const frequentStores = [
  {
    name: 'Flipkart',
    image: require('../../../assets/images/flipkart.png'),
  },
  {
    name: 'Amazon',
    image: require('../../../assets/images/amazon_white.png'),
  },
  {
    name: 'Myntra',
    image: require('../../../assets/images/myntra.png'),
  },
  {
    name: 'Ajio',
    image: require('../../../assets/images/ajio.png'),
  },
  {
    name: 'Tata CLiQ',
    image: require('../../../assets/images/tata_cliq.png'),
  },
];

const categories = [
  { name: 'Electronics', Icon: CategoryElectronics, bg: '#F0FDF4' },
  { name: 'Beauty', Icon: CategoryBeauty, bg: '#F0FDF4' },
  { name: 'Fashion', Icon: CategoryFashion, bg: '#F0FDF4' },
  { name: 'Home & Living', Icon: CategoryHome, bg: '#F0FDF4' },
  { name: 'Food & Grocery', Icon: CategoryGrocery, bg: '#F0FDF4' },
];

const topStores = [
  {
    name: 'Amazon',
    offer: 'Upto 4.5%',
    image: require('../../../assets/images/amazon_white.png'),
  },
  {
    name: 'Flipkart',
    offer: 'Upto 6%',
    image: require('../../../assets/images/flipkart.png'),
  },
  {
    name: 'Myntra',
    offer: 'Upto 7.5%',
    image: require('../../../assets/images/myntra.png'),
  },
  {
    name: 'Ajio',
    offer: 'Upto 5%',
    image: require('../../../assets/images/ajio.png'),
  },
  {
    name: 'Tata CLiQ',
    offer: 'Upto 8%',
    image: require('../../../assets/images/tata_cliq.png'),
  },
  { name: 'Nykaa', offer: 'Upto 6%', text: 'NYKAA', color: '#F00073' },
  { name: 'Croma', offer: 'Upto 3%', text: 'croma', color: '#17A89B' },
  { name: 'Mamaearth', offer: 'Upto 8%', text: 'mamaearth', color: '#199FD7' },
  { name: 'Boat', offer: 'Upto 6%', text: 'boAt', color: '#111111' },
  {
    name: 'Zomato',
    offer: 'Upto 4%',
    image: require('../../../assets/images/zomato.png'),
  },
  { name: 'Swiggy', offer: 'Upto 5%', text: 'S', color: '#FF6800' },
  { name: '1mg', offer: 'Upto 7%', text: '1mg', color: '#111111' },
  { name: 'The Body Shop', offer: 'Upto 5%', text: '◜◝', color: '#0B6B48' },
  {
    name: 'Bewakoof',
    offer: 'Upto 5%',
    text: 'Bewakoof',
    color: '#111111',
    badge: true,
  },
  { name: '& More\n1000+ Stores', offer: 'Upto 5%', isMore: true },
];

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.promoRow}>
          {promoCards.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.promoCard}>
              <View style={styles.promoIcon}>
                <item.Icon width={30} height={30} color={item.tone} />
              </View>
              <Text style={styles.promoLabel}>{item.title}</Text>
              <Text style={styles.promoValue}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.searchBox}>
          <StoreSearch width={20} height={20} color="#9CA3AF" />
          <Text style={styles.searchPlaceholder}>Search for stores, brands or categories</Text>
        </View>
        <View style={styles.generatorCard}>
          <Text style={styles.generatorTitle}>Generate Your Cashback Link</Text>
          <View style={styles.inputRow}>
            <View style={styles.linkInputWrap}>
              <TextInput placeholder="Enter store link here..." style={styles.linkInput} placeholderTextColor="#9CA3AF" />
            </View>
            <TouchableOpacity style={styles.generateBtn}>
              <Text style={styles.generateBtnText}>G</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.howItWorks}>
            <Text style={styles.howTitle}>How it Works?</Text>
            <View style={styles.stepsRow}>
              {[
                { step: '1. Enter Store Link', sub: 'Paste the link of the store you want to shop from', icon: '🔗' },
                { step: '2. Generate Link', sub: "Click on 'Generate Link' to create your cashback link", icon: '⚙️' },
                { step: '3. Share Link', sub: 'Share the link with your friends and family', icon: '🔗' },
                { step: '4. Earn Cashback', sub: 'When they shop, you both earn exciting cashback', icon: '💰' }
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <View style={styles.stepItem}>
                    <View style={styles.stepCircle}>
                      <Text style={{ fontSize: 16 }}>{item.icon}</Text>
                    </View>
                    <Text style={styles.stepText}>{item.step}</Text>
                    <Text style={styles.stepSub}>{item.sub}</Text>
                  </View>
                  {index < 3 && <Text style={styles.stepArrow}>→</Text>}
                </React.Fragment>
              ))}
            </View>
          </View>
        </View>

        {/* Frequent Stores */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Frequently Opened Stores</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 24 }}
        >
          {frequentStores.map((item, index) => (
            <View key={index} style={[styles.storeTile, { marginRight: 16 }]}>
              <View style={styles.storeLogoBox}>
                <Image
                  source={item.image}
                  style={{ width: '80%', height: '80%' }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.storeName}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories You Choose</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <View style={styles.categoryRow}>
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <View style={[styles.catIconCircle, { backgroundColor: item.bg }]}>
                <item.Icon width={34} height={34} />
              </View>
              <Text style={styles.catName}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Stores (1000+)</Text>
        </View>
        <View style={styles.grid}>
          {topStores.map((item, index) => (
            <View key={index} style={styles.compactTile}>
              <View style={styles.compactLogoBox}>
                {item.image ? (
                  <Image
                    source={item.image}
                    style={{ width: '70%', height: '70%' }}
                    resizeMode="contain"
                  />
                ) : item.isMore ? (
                  <Text style={{ fontSize: 24 }}>🔲</Text>
                ) : (
                  <Text
                    style={{ color: item.color, fontSize: 12, fontWeight: 'bold' }}
                  >
                    {item.text}
                  </Text>
                )}
              </View>
              <Text style={styles.offerText}>{item.offer}</Text>
              <Text style={styles.compactName} numberOfLines={2}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>

        {/* Bottom Banner */}
        <View style={styles.bottomBanner}>
          <HeroWalletCoins width={60} height={60} />
          <View style={styles.bannerCopy}>
            <Text style={styles.bannerTitle}>Earn More Cashback</Text>
            <Text style={styles.bannerDesc}>Shop from your favourite stores and earn exciting cashback on every purchase.</Text>
          </View>
          <TouchableOpacity style={styles.exploreBtn}>
            <Text style={styles.exploreText}>Explore Now</Text>
            <Text style={styles.exploreText}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;
