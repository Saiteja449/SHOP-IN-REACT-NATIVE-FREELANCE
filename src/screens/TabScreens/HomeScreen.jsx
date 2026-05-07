import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ArrowCircleRight from '../../icons/ArrowCircleRight.svg';
import OnboardingWalletHero from '../../icons/OnboardingWalletHero.svg';
import PercentTag from '../../icons/PercentTag.svg';
import ShieldCheck from '../../icons/ShieldCheck.svg';
import ShoppingBag from '../../icons/ShoppingBag.svg';
import TabGift from '../../icons/TabGift.svg';
import Truck from '../../icons/Truck.svg';
import Wallet from '../../icons/Wallet.svg';
import { homeStyles as styles } from '../../Styles/styles';

const offers = [
  {
    brand: 'Myntra',
    pct: '7.5%',
    tag: 'FASHION',
    image: require('../../../assets/images/myntra.png'),
  },
  {
    brand: 'Flipkart',
    pct: '6%',
    tag: 'ELECTRONICS',
    image: require('../../../assets/images/flipkart.png'),
  },
  {
    brand: 'AJIO',
    pct: '5%',
    tag: 'FASHION',
    image: require('../../../assets/images/ajio.png'),
  },
  {
    brand: 'TATA CLiQ',
    pct: '8%',
    tag: 'LIFESTYLE',
    image: require('../../../assets/images/tata_cliq.png'),
  },
  {
    brand: 'amazon',
    pct: '4.5%',
    tag: 'EVERYTHING',
    image: require('../../../assets/images/amazon_white.png'),
  },
];

const giftCards = [
  {
    name: 'Amazon Pay',
    pct: '2.5% OFF',
    kind: 'amazon',
    image: require('../../../assets/images/amazon_pay.png'),
  },
  {
    name: 'Flipkart',
    pct: '2% OFF',
    kind: 'flipkart',
    image: require('../../../assets/images/flipkart.png'),
  },
  {
    name: 'Myntra',
    pct: '3% OFF',
    kind: 'myntra',
    image: require('../../../assets/images/myntra.png'),
  },
  {
    name: 'Google Play',
    pct: '2% OFF',
    kind: 'google',
    image: require('../../../assets/images/google_play.png'),
  },
  {
    name: 'Zomato',
    pct: '5% OFF',
    kind: 'zomato',
    image: require('../../../assets/images/zomato.png'),
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FBF3" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroRow}>
            <View style={styles.heroLeft}>
              <View style={styles.heroIconWrap}>
                <PercentTag width={18} height={18} />
              </View>
              <View>
                <Text style={styles.heroTitle}>Cashback Offers</Text>
                <Text style={styles.heroSub}>Shop from top stores</Text>
              </View>
            </View>
            <View style={styles.heroWalletWrap}>
              <OnboardingWalletHero width={62} height={62} />
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.offerList}
          >
            {offers.map(item => (
              <View key={item.brand} style={styles.offerCard}>
                <View style={styles.offerLogoWrap}>
                  <Image
                    source={item.image}
                    style={{ width: '80%', height: '80%' }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.offerUpto}>Up to</Text>
                <Text style={styles.offerPercent}>{item.pct}</Text>
                <Text style={styles.offerCashback}>cashback</Text>
                <View style={styles.tagBadge}>
                  <Text style={styles.offerTag}>{item.tag}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity activeOpacity={0.9}>
            <LinearGradient
              colors={['#60B531', '#2E8F22']}
              style={styles.ctaButton}
            >
              <Text style={styles.ctaText}>Shop Now</Text>
              <Text style={styles.ctaArrow}>→</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.featureRowCard}>
          <View style={styles.featureRow}>
            <View style={styles.featureItem}>
              <View style={styles.featureIconCircle}>
                <ShieldCheck width={20} height={20} color="#4B9139" />
              </View>
              <View>
                <Text style={styles.featureHead}>No Hidden</Text>
                <Text style={styles.featureHead}>Charges</Text>
                <Text style={styles.featureSub}>100% transparent</Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <View style={styles.featureIconCircle}>
                <ShieldCheck width={20} height={20} color="#4B9139" />
              </View>
              <View>
                <Text style={styles.featureHead}>Guaranteed</Text>
                <Text style={styles.featureHead}>Cashback</Text>
                <Text style={styles.featureSub}>Get cashback in</Text>
              </View>
            </View>
            <View style={styles.featureItem}>
              <View style={styles.featureIconCircle}>
                <Wallet width={20} height={20} color="#4B9139" />
              </View>
              <View>
                <Text style={styles.featureHead}>Easy</Text>
                <Text style={styles.featureHead}>Withdrawals</Text>
                <Text style={styles.featureSub}>Transfer to bank</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.allStoreCard}>
          <View style={styles.allStoreRight}>
            <Text style={styles.allStoreTitle}>All in One Store</Text>
            <Text style={styles.allStoreSub}>Shop from 1000+ stores...</Text>
            <TouchableOpacity style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Explore All Stores</Text>
              <Text style={styles.secondaryBtnText}>→</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../../assets/images/orange_cart.png')}
            style={styles.cartImg}
          />
        </View>

        <View style={styles.giftCardSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.headerIconBg}>
              <TabGift width={22} height={22} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.sectionTitle}>Gift Cards</Text>
              <Text style={styles.sectionSub}>Buy gift cards from brands</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.giftGrid}>
            {giftCards.map(card => (
              <View key={card.name} style={styles.homeGiftCard}>
                <View
                  style={[
                    styles.homeGiftTop,
                    card.kind === 'amazon' && { backgroundColor: '#000000' },
                    card.kind === 'flipkart' && { backgroundColor: '#C5E4FF' },
                    card.kind === 'myntra' && { backgroundColor: '#FF4E6A' },
                    card.kind === 'zomato' && { backgroundColor: '#FFFFFF' },
                    card.kind === 'google' && { backgroundColor: '#F1F1F1' },
                  ]}
                >
                  <Image
                    source={card.image}
                    style={{ width: '60%', height: '60%' }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.homeGiftBottom}>
                  <Text style={styles.homeGiftName}>{card.name}</Text>
                  <Text style={styles.homeGiftPct}>{card.pct}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy Gift Cards</Text>
            <Text style={styles.buyBtnText}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sellBtn}>
            <Text style={styles.sellBtnText}>Sell Gift Cards</Text>
            <Text style={styles.sellBtnText}>→</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomFeatures}>
          <View style={styles.featureCol}>
            <PercentTag width={24} height={24} color="#60B531" />
            <Text style={styles.bottomFeatureTitle}>Best Discounts</Text>
          </View>
          <View style={styles.featureCol}>
            <ShieldCheck width={24} height={24} color="#60B531" />
            <Text style={styles.bottomFeatureTitle}>100% Safe</Text>
          </View>
          <View style={styles.featureCol}>
            <Truck width={24} height={24} color="#60B531" />
            <Text style={styles.bottomFeatureTitle}>Instant Delivery</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
