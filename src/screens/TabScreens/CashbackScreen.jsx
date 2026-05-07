import React from 'react';
import { ScrollView, StatusBar, Text, View, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BrandAjio from '../../icons/BrandAjio.svg';
import BrandAmazon from '../../icons/BrandAmazon.svg';
import BrandFlipkart from '../../icons/BrandFlipkart.svg';
import BrandMyntra from '../../icons/BrandMyntra.svg';
import BrandTataCliq from '../../icons/BrandTataCliq.svg';
import BrandZomato from '../../icons/BrandZomato.svg';
import CategoryBeauty from '../../icons/CategoryBeauty.svg';
import CategoryElectronics from '../../icons/CategoryElectronics.svg';
import CategoryFashion from '../../icons/CategoryFashion.svg';
import CategoryGrocery from '../../icons/CategoryGrocery.svg';
import CategoryHome from '../../icons/CategoryHome.svg';
import HeroWalletCoins from '../../icons/HeroWalletCoins.svg';
import StoreCart from '../../icons/StoreCart.svg';
import StoreSearch from '../../icons/StoreSearch.svg';
import StorePattern from '../../icons/StorePattern.svg';
import StoreMenu from '../../icons/StoreMenu.svg';
import AllStoreBag from '../../icons/AllStoreBag.svg';
import TabGift from '../../icons/TabGift.svg';
import CoinCircle from '../../icons/CoinCircle.svg';
import AccRupee from '../../icons/AccRupee.svg';
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
    title: 'All in One Stores',
    subtitle: '1000+ STORES',
    Icon: AllStoreBag,
    tone: '#16A34A',
  },
];

const frequentStores = [
  { name: 'Flipkart', Logo: BrandFlipkart },
  { name: 'Amazon', Logo: BrandAmazon },
  { name: 'Myntra', Logo: BrandMyntra },
  { name: 'Ajio', Logo: BrandAjio },
  { name: 'Tata CLiQ', Logo: BrandTataCliq },
];

const categories = [
  { name: 'Electronics', Icon: CategoryElectronics, bg: '#F0FDF4' },
  { name: 'Beauty', Icon: CategoryBeauty, bg: '#F0FDF4' },
  { name: 'Fashion', Icon: CategoryFashion, bg: '#F0FDF4' },
  { name: 'Home & Living', Icon: CategoryHome, bg: '#F0FDF4' },
  { name: 'Food & Grocery', Icon: CategoryGrocery, bg: '#F0FDF4' },
];

const topStores = [
  { name: 'Amazon', offer: 'Upto 4.5%', Logo: BrandAmazon },
  { name: 'Flipkart', offer: 'Upto 6%', Logo: BrandFlipkart },
  { name: 'Myntra', offer: 'Upto 7.5%', Logo: BrandMyntra },
  { name: 'Ajio', offer: 'Upto 5%', Logo: BrandAjio },
  { name: 'Tata CLiQ', offer: 'Upto 8%', Logo: BrandTataCliq },
  { name: 'Nykaa', offer: 'Upto 6%', text: 'NYKAA', color: '#F00073' },
  { name: 'Croma', offer: 'Upto 3%', text: 'croma', color: '#17A89B' },
  { name: 'Mamaearth', offer: 'Upto 8%', text: 'mamaearth', color: '#199FD7' },
  { name: 'Boat', offer: 'Upto 6%', text: 'boAt', color: '#111111' },
  { name: 'Zomato', offer: 'Upto 4%', Logo: BrandZomato },
  { name: 'Swiggy', offer: 'Upto 5%', text: 'S', color: '#FF6800' },
  { name: '1mg', offer: 'Upto 7%', text: '1mg', color: '#111111' },
  { name: 'The Body Shop', offer: 'Upto 5%', text: '◜◝', color: '#0B6B48' },
  { name: 'Bewakoof', offer: 'Upto 5%', text: 'Bewakoof', color: '#111111', badge: true },
  { name: '& More\n1000+ Stores', offer: 'Upto 5%', isMore: true },
];

const LinkIcon = ({ width, height, color }) => (
  <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color, fontSize: 18, transform: [{ rotate: '45deg' }] }}>🔗</Text>
  </View>
);

const CashbackScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Background Decor */}
      <View style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05 }}>
        <StorePattern width={200} height={200} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <StoreMenu width={28} height={28} color="#111827" />
          <View style={styles.headerCopy}>
            <Text style={styles.title}>Cashback</Text>
            <Text style={styles.subtitle}>Shop from 1000+ stores and earn cashback</Text>
          </View>
          <View style={styles.headerActions}>
            <View style={styles.actionBtn}>
              <StoreSearch width={22} height={22} color="#111827" />
            </View>
            <View style={styles.actionBtn}>
              <StoreCart width={22} height={22} color="#111827" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Promo Row */}
        <View style={styles.promoRow}>
          {promoCards.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.promoCard}>
              <View style={styles.promoIcon}>
                <item.Icon width={32} height={32} color={item.tone} />
              </View>
              <Text style={styles.promoLabel}>{item.title}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                <Text style={styles.promoValue}>{item.subtitle}</Text>
                <Text style={{ color: '#16A34A', marginLeft: 4 }}>→</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <StoreSearch width={20} height={20} color="#9CA3AF" />
          <Text style={styles.searchPlaceholder}>Search for stores, brands or categories</Text>
        </View>

        {/* Generator Card */}
        <View style={styles.generatorCard}>
          <Text style={styles.generatorTitle}>Generate Your Cashback Link</Text>
          <View style={styles.inputRow}>
            <View style={styles.linkInputWrap}>
              <LinkIcon width={20} height={20} color="#16A34A" />
              <TextInput placeholder="Enter store link here..." style={styles.linkInput} placeholderTextColor="#9CA3AF" />
            </View>
            <TouchableOpacity style={styles.generateBtn}>
              <LinkIcon width={18} height={18} color="#FFFFFF" />
              <Text style={styles.generateBtnText}>Generate Link</Text>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
          {frequentStores.map((item, index) => (
            <View key={index} style={[styles.storeTile, { marginRight: 16 }]}>
              <View style={styles.storeLogoBox}>
                <item.Logo width={50} height={30} />
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

        {/* All Stores */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Stores (1000+)</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.viewAll, { color: '#16A34A' }]}>A-Z </Text>
            <Text style={{ color: '#16A34A' }}>⌄</Text>
          </View>
        </View>
        <View style={styles.grid}>
          {topStores.map((item, index) => (
            <View key={index} style={styles.compactTile}>
              <View style={styles.compactLogoBox}>
                {item.Logo ? (
                  <item.Logo width={50} height={25} />
                ) : item.isMore ? (
                  <Text style={{ fontSize: 24 }}>🔲</Text>
                ) : (
                  <Text style={{ color: item.color, fontSize: 12, fontWeight: 'bold' }}>{item.text}</Text>
                )}
              </View>
              <Text style={styles.offerText}>{item.offer}</Text>
              <Text style={styles.compactName} numberOfLines={2}>{item.name}</Text>
            </View>
          ))}
        </View>

        {/* Bottom Banner */}
        <View style={styles.bottomBanner}>
          <HeroWalletCoins width={60} height={40} />
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

export default CashbackScreen;
