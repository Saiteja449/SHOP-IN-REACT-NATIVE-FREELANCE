import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BrandAjio from '../../Icons/BrandAjio.svg';
import BrandAmazon from '../../Icons/BrandAmazon.svg';
import BrandFlipkart from '../../Icons/BrandFlipkart.svg';
import BrandMyntra from '../../Icons/BrandMyntra.svg';
import BrandTataCliq from '../../Icons/BrandTataCliq.svg';
import BrandZomato from '../../Icons/BrandZomato.svg';
import CategoryBeauty from '../../Icons/CategoryBeauty.svg';
import CategoryElectronics from '../../Icons/CategoryElectronics.svg';
import CategoryFashion from '../../Icons/CategoryFashion.svg';
import CategoryGrocery from '../../Icons/CategoryGrocery.svg';
import CategoryHome from '../../Icons/CategoryHome.svg';
import HeroWalletCoins from '../../Icons/HeroWalletCoins.svg';
import MoreStores from '../../Icons/MoreStores.svg';
import StoreCart from '../../Icons/StoreCart.svg';
import StoreMenu from '../../Icons/StoreMenu.svg';
import StorePattern from '../../Icons/StorePattern.svg';
import StorePromoBag from '../../Icons/StorePromoBag.svg';
import StorePromoCashback from '../../Icons/StorePromoCashback.svg';
import StorePromoGift from '../../Icons/StorePromoGift.svg';
import StoreSearch from '../../Icons/StoreSearch.svg';
import CustomHeader from '../../Components/CustomHeader';
import { storeStyles as styles } from '../../Styles/styles';


const promoCards = [
  {
    title: 'Cashback\nOffers',
    subtitle: 'Earn Extra',
    Icon: StorePromoCashback,
    tone: '#FF5A00',
  },
  {
    title: 'Gift Cards',
    subtitle: 'Save More',
    Icon: StorePromoGift,
    tone: '#7439F7',
  },
  {
    title: 'All in One\nStores',
    subtitle: '1000+ Stores',
    Icon: StorePromoBag,
    tone: '#FF5A00',
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
  { name: 'Electronics', Icon: CategoryElectronics, bg: '#FFE7C5' },
  { name: 'Beauty', Icon: CategoryBeauty, bg: '#FFDDE8' },
  { name: 'Fashion', Icon: CategoryFashion, bg: '#FFE7B9' },
  { name: 'Home & Living', Icon: CategoryHome, bg: '#E1F3D2' },
  { name: 'Food & Grocery', Icon: CategoryGrocery, bg: '#FFE2BE' },
];

const topStores = [
  { name: 'Amazon', offer: 'Upto 4.5%', Logo: BrandAmazon },
  { name: 'Flipkart', offer: 'Upto 6%', Logo: BrandFlipkart },
  { name: 'Myntra', offer: 'Upto 7.5%', Logo: BrandMyntra },
  { name: 'Ajio', offer: 'Upto 5%', Logo: BrandAjio },
  { name: 'Tata CLiQ', offer: 'Upto 8%', Logo: BrandTataCliq },
  { name: 'Nykaa', offer: 'Upto 6%', text: 'NYKAA', color: '#F00073' },
  { name: 'Croma', offer: 'Upto 3%', text: 'croma', color: '#17A89B' },
  {
    name: 'Mamaearth',
    offer: 'Upto 8%',
    text: 'mama\nearth',
    color: '#199FD7',
  },
  { name: 'Boat', offer: 'Upto 6%', text: 'boAt', color: '#111111' },
  { name: 'Zomato', offer: 'Upto 4%', Logo: BrandZomato },
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
  { name: '& More\n1000+ Stores', offer: 'Upto 5%', More: MoreStores },
];

const patternItems = [
  { top: 8, left: 190, rotate: '-16deg' },
  { top: 44, right: 320, rotate: '14deg' },
  { top: 22, right: 112, rotate: '18deg' },
  { top: 116, left: 24, rotate: '-20deg' },
  { top: 100, right: 186, rotate: '-5deg' },
  { top: 464, left: 342, rotate: '-12deg' },
  { top: 506, right: 154, rotate: '15deg' },
  { top: 650, left: 326, rotate: '-12deg' },
  { top: 724, right: 226, rotate: '16deg' },
];



const PatternLayer = () => (
  <>
    {patternItems.map((item, index) => (
      <View
        key={`store-pattern-${index}`}
        style={[
          styles.patternIcon,
          item,
          { transform: [{ rotate: item.rotate }] },
        ]}
      >
        <StorePattern width={54} height={54} color="#FF8D18" />
      </View>
    ))}
  </>
);

const PromoCard = ({ item }) => {
  const Icon = item.Icon;
  return (
    <View style={styles.promoCard}>
      <Icon width={60} height={60} />
      <View style={styles.promoCopy}>
        <Text style={[styles.promoTitle, { color: item.tone }]}>
          {item.title}
        </Text>
        <Text style={styles.promoSub}>{item.subtitle}</Text>
      </View>
      <View style={styles.promoArrow}>
        <Text style={styles.arrowText}>›</Text>
      </View>
    </View>
  );
};

const StoreTile = ({ item, compact }) => {
  const Logo = item.Logo;
  return (
    <View style={[styles.storeTile, compact && styles.compactStoreTile]}>
      <View style={compact ? styles.compactLogoWrap : styles.logoWrap}>
        {Logo && <Logo width={compact ? 62 : 58} height={compact ? 34 : 42} />}
        {item.text && (
          <View style={item.badge && styles.bewakoofBadge}>
            <Text
              style={[
                styles.textLogo,
                item.text.length <= 1 && styles.singleLetterLogo,
                item.name === 'Mamaearth' && styles.mamaLogo,
                { color: item.color },
              ]}
            >
              {item.text}
            </Text>
          </View>
        )}
        {item.More && <item.More width={70} height={44} />}
      </View>
      {compact && <Text style={styles.offerText}>{item.offer}</Text>}
      <Text style={compact ? styles.topStoreName : styles.frequentName}>
        {item.name}
      </Text>
    </View>
  );
};

const CategoryItem = ({ item }) => {
  const Icon = item.Icon;
  return (
    <View style={styles.categoryItem}>
      <View style={[styles.categoryIconCircle, { backgroundColor: item.bg }]}>
        <Icon width={54} height={54} />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );
};

const StoresScreen = () => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF4E7" />
      <PatternLayer />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <CustomHeader
          title="All Stores"
          showBack={false}
          RightComponent={() => (
            <View style={styles.headerActions}>
              <View style={styles.circleAction}>
                <StoreSearch width={24} height={24} color="#111827" />
              </View>
              <View style={styles.circleAction}>
                <StoreCart width={28} height={28} color="#111827" />
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>3</Text>
                </View>
              </View>
            </View>
          )}
        />


        <View style={styles.promoRow}>
          {promoCards.map(item => (
            <PromoCard key={item.title} item={item} />
          ))}
        </View>

        <View style={styles.searchBox}>
          <StoreSearch width={31} height={31} color="#6B7280" />
          <Text style={styles.searchPlaceholder}>
            Search for stores, brands or categories
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Frequently Opened Stores</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <View style={styles.frequentRow}>
          {frequentStores.map(item => (
            <StoreTile key={item.name} item={item} />
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories You Choose</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <View style={styles.categoryRow}>
          {categories.map(item => (
            <CategoryItem key={item.name} item={item} />
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Stores</Text>
          <View style={styles.sortRow}>
            <Text style={styles.sortText}>A-Z</Text>
            <Text style={styles.sortChevron}>⌄</Text>
          </View>
        </View>
        <View style={styles.topStoreGrid}>
          {topStores.map(item => (
            <StoreTile key={item.name} item={item} compact />
          ))}
        </View>

        <View style={styles.cashbackBanner}>
          <HeroWalletCoins width={86} height={58} />
          <View style={styles.bannerCopy}>
            <Text style={styles.bannerTitle}>Earn More Cashback</Text>
            <Text style={styles.bannerText}>
              Shop from your favourite stores and earn exciting cashback on
              every purchase.
            </Text>
          </View>
          <LinearGradient
            colors={['#FF7A14', '#FF5A00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.exploreButton}
          >
            <Text style={styles.exploreText}>Explore Now</Text>
            <Text style={styles.exploreArrow}>→</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoresScreen;
