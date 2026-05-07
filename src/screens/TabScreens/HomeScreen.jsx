import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AllStoreBag from '../../icons/AllStoreBag.svg';
import BrandAjio from '../../icons/BrandAjio.svg';
import BrandAmazon from '../../icons/BrandAmazon.svg';
import BrandFlipkart from '../../icons/BrandFlipkart.svg';
import BrandGooglePlay from '../../icons/BrandGooglePlay.svg';
import BrandMyntra from '../../icons/BrandMyntra.svg';
import BrandTataCliq from '../../icons/BrandTataCliq.svg';
import BrandZomato from '../../icons/BrandZomato.svg';
import GiftCard from '../../icons/TabGift.svg';
import PercentTag from '../../icons/PercentTag.svg';
import HeroWalletCoins from '../../icons/HeroWalletCoins.svg';
import { homeStyles as styles } from '../../Styles/styles';

const offers = [
  { brand: 'Myntra', pct: '7.5%', tag: 'FASHION', Logo: BrandMyntra },
  { brand: 'Flipkart', pct: '6%', tag: 'ELECTRONICS', Logo: BrandFlipkart },
  { brand: 'AJIO', pct: '5%', tag: 'FASHION', Logo: BrandAjio },
  { brand: 'TATA CLiQ', pct: '8%', tag: 'LIFESTYLE', Logo: BrandTataCliq },
  { brand: 'amazon', pct: '4.5%', tag: 'EVERYTHING', Logo: BrandAmazon },
];

const giftCards = [
  { name: 'Amazon Pay', pct: 'UP TO 2.5% OFF', Logo: BrandAmazon },
  { name: 'Flipkart', pct: 'UP TO 2% OFF', Logo: BrandFlipkart },
  { name: 'Myntra', pct: 'UP TO 3% OFF', Logo: BrandMyntra },
  { name: 'Google Play', pct: 'UP TO 2% OFF', Logo: BrandGooglePlay },
  { name: 'Zomato', pct: 'UP TO 5% OFF', Logo: BrandZomato },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroRow}>
            <View style={styles.heroLeft}>
              <View style={styles.heroIconWrap}>
                <PercentTag width={26} height={26} />
              </View>
              <View>
                <Text style={styles.heroTitle}>Cashback Offers</Text>
                <Text style={styles.heroSub}>Shop from top stores and</Text>
                <Text style={styles.heroSub}>earn amazing cashback</Text>
              </View>
            </View>
            <View style={styles.heroWalletWrap}>
              <HeroWalletCoins width={84} height={56} />
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.offerList}
          >
            {offers.map(item => {
              const Logo = item.Logo;
              return (
                <View key={item.brand} style={styles.offerCard}>
                  <View style={styles.offerLogoWrap}>
                    <Logo width={64} height={24} />
                  </View>
                  <Text style={styles.offerUpto}>Up to</Text>
                  <Text style={styles.offerPercent}>{item.pct}</Text>
                  <Text style={styles.offerCashback}>cashback</Text>
                  <Text style={styles.offerTag}>{item.tag}</Text>
                </View>
              );
            })}
          </ScrollView>

          <LinearGradient
            colors={['#60B531', '#2E8F22']}
            style={styles.ctaButton}
          >
            <Text style={styles.ctaText}>Shop Now</Text>
            <Text style={styles.ctaText}>→</Text>
          </LinearGradient>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.featureRow}>
            <View style={styles.featureItem}>
              <Text style={styles.featureHead}>No Hidden Charges</Text>
              <Text style={styles.featureSub}>100% transparent rewards</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureHead}>Guaranteed Cashback</Text>
              <Text style={styles.featureSub}>Get cashback in your wallet</Text>
            </View>
            <View style={[styles.featureItem, styles.featureItemLast]}>
              <Text style={styles.featureHead}>Easy Withdrawals</Text>
              <Text style={styles.featureSub}>Transfer to bank instantly</Text>
            </View>
          </View>
        </View>

        <View style={styles.allStoreCard}>
          <View>
            <Text style={styles.allStoreTitle}>All in One Store</Text>
            <Text style={styles.allStoreSub}>
              Shop from 1000+ stores, compare deals
            </Text>
            <Text style={styles.allStoreSub}>
              and earn cashback - all in one place!
            </Text>
            <View style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Explore All Stores</Text>
              <Text style={styles.secondaryBtnText}>→</Text>
            </View>
          </View>
          <AllStoreBag width={82} height={82} />
        </View>

        <View style={styles.giftCardWrap}>
          <View style={styles.giftTitleRow}>
            <GiftCard width={24} height={24} />
            <Text style={styles.giftTitle}>Gift Cards</Text>
          </View>
          <Text style={styles.giftSub}>
            Buy gift cards from top brands and save more
          </Text>

          <View style={styles.giftList}>
            {giftCards.map(card => {
              const Logo = card.Logo;
              return (
                <View key={card.name} style={styles.giftItem}>
                  <View style={styles.giftLogoWrap}>
                    <Logo width={56} height={22} />
                  </View>
                  <Text style={styles.giftItemName}>{card.name}</Text>
                  <Text style={styles.giftItemPct}>{card.pct}</Text>
                </View>
              );
            })}
          </View>

          <View style={styles.purpleBtn}>
            <Text style={styles.purpleBtnText}>Buy Gift Cards</Text>
            <Text style={styles.purpleBtnText}>→</Text>
          </View>
          <View style={styles.outlineBtn}>
            <Text style={styles.outlineBtnText}>Sell Gift Cards</Text>
            <Text style={styles.outlineBtnText}>→</Text>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.featureRow}>
            <View style={styles.featureItem}>
              <Text style={styles.featureHead}>Best Discounts</Text>
              <Text style={styles.featureSub}>
                Save more on every gift card
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureHead}>100% Safe & Secure</Text>
              <Text style={styles.featureSub}>
                Trusted by thousands of users
              </Text>
            </View>
            <View style={[styles.featureItem, styles.featureItemLast]}>
              <Text style={styles.featureHead}>Instant Delivery</Text>
              <Text style={styles.featureSub}>
                Get your gift cards instantly
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
