import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BrandAjio from '../../icons/BrandAjio.svg';
import BrandAmazon from '../../icons/BrandAmazon.svg';
import BrandFlipkart from '../../icons/BrandFlipkart.svg';
import BrandMyntra from '../../icons/BrandMyntra.svg';
import BrandTataCliq from '../../icons/BrandTataCliq.svg';
import OnboardingDecal from '../../icons/OnboardingDecal.svg';
import OnboardingGiftHero from '../../icons/OnboardingGiftHero.svg';
import OnboardingSecureBadge from '../../icons/OnboardingSecureBadge.svg';
import OnboardingStoreCard from '../../icons/OnboardingStoreCard.svg';
import OnboardingWalletHero from '../../icons/OnboardingWalletHero.svg';
import ShieldCheck from '../../icons/ShieldCheck.svg';
import ArrowCircleRight from '../../icons/ArrowCircleRight.svg';
import { onboardingStyles as styles } from '../../Styles/styles';

const { width } = Dimensions.get('window');

const storeLogos = [
  { name: 'amazon', Icon: BrandAmazon },
  { name: 'Flipkart', Icon: BrandFlipkart },
  { name: 'Myntra', Icon: BrandMyntra },
  { name: 'AJIO', Icon: BrandAjio },
  { name: 'TATA CLiQ', Icon: BrandTataCliq },
  { name: 'make my trip', text: 'make my trip', color: '#2563EB' },
  { name: 'SWIGGY', text: 'SWIGGY', color: '#F97316' },
  { name: 'NYKAA', text: 'NYKAA', color: '#F0007A' },
  { name: '100+ Stores', More: OnboardingStoreCard },
];

const giftCards = [
  { name: 'Amazon Pay', pct: '8%', kind: 'amazon' },
  { name: 'Flipkart', pct: '6%', kind: 'flipkart' },
  { name: 'Myntra', pct: '7%', kind: 'myntra' },
  { name: 'Zomato', pct: '10%', kind: 'zomato' },
];

const BackgroundDecals = ({ tone, variant = 'soft' }) => {
  const decals = [
    { top: 28, left: 88, rotate: '-18deg', scale: 0.55 },
    { top: 74, right: 26, rotate: '18deg', scale: 0.9 },
    { top: 164, left: 22, rotate: '-12deg', scale: 0.72 },
    { top: 308, right: 18, rotate: '20deg', scale: 0.62 },
    { bottom: 118, left: 18, rotate: '16deg', scale: 0.7 },
    { bottom: 36, right: 20, rotate: '-15deg', scale: 0.8 },
  ];

  return decals.map((item, index) => (
    <View
      key={`${variant}-decal-${index}`}
      style={[
        styles.decal,
        item,
        { transform: [{ rotate: item.rotate }, { scale: item.scale }] },
      ]}
    >
      <OnboardingDecal width={44} height={44} color={tone} />
    </View>
  ));
};

const SlideHeader = ({
  titleTop,
  titleAccent,
  accentColor,
  subtitle,
  skipColor,
  onSkip,
}) => (
  <View>
    <TouchableOpacity onPress={onSkip} style={styles.skipBtn}>
      <Text style={[styles.skipText, { color: skipColor }]}>Skip</Text>
    </TouchableOpacity>
    <View style={styles.copyBlock}>
      <Text style={styles.onboardingTitle}>{titleTop}</Text>
      <Text
        style={[
          styles.onboardingTitle,
          styles.titleAccent,
          { color: accentColor },
        ]}
      >
        {titleAccent}
      </Text>
      <Text style={styles.onboardingSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

const CashbackCard = () => (
  <View style={styles.cashbackFloat}>
    <Text style={styles.earnedText}>You Earned</Text>
    <Text style={styles.earnedAmount}>₹2,450</Text>
    <View style={styles.cashbackPill}>
      <Text style={styles.cashbackPillText}>+7% Cashback</Text>
    </View>
  </View>
);

const GiftCard = ({ item }) => {
  const isAmazon = item.kind === 'amazon';
  const isFlipkart = item.kind === 'flipkart';
  const isMyntra = item.kind === 'myntra';

  return (
    <View style={styles.giftCard}>
      <View
        style={[
          styles.giftCardTop,
          isAmazon && styles.giftAmazon,
          isFlipkart && styles.giftFlipkart,
          isMyntra && styles.giftMyntra,
        ]}
      >
        {isAmazon && <Text style={styles.amazonGiftLogo}>a</Text>}
        {isAmazon && <Text style={styles.amazonSmile}>⌣</Text>}
        {isFlipkart && <Text style={styles.flipkartGiftLogo}>Flipkart</Text>}
        {isMyntra && <Text style={styles.myntraGiftLogo}>M</Text>}
        {item.kind === 'zomato' && (
          <Text style={styles.zomatoGiftLogo}>zomato</Text>
        )}
      </View>
      <View style={styles.giftCardBottom}>
        <Text style={styles.giftName}>{item.name}</Text>
        <View style={styles.giftOffer}>
          <Text style={styles.upToText}>UP TO</Text>
          <Text style={styles.percentText}>{item.pct} OFF</Text>
        </View>
      </View>
    </View>
  );
};

const StoreLogoCell = ({ item }) => {
  if (item.More) {
    const MoreIcon = item.More;
    return <MoreIcon width={58} height={58} />;
  }

  if (item.Icon) {
    const Icon = item.Icon;
    return (
      <View style={styles.storeCell}>
        <Icon width={58} height={28} />
      </View>
    );
  }

  return (
    <View style={styles.storeCell}>
      <Text style={[styles.storeTextLogo, { color: item.color }]}>
        {item.text}
      </Text>
    </View>
  );
};

const Pagination = ({ activeIndex }) => (
  <View style={styles.pagination}>
    {[0, 1, 2].map(index => (
      <View
        key={`dot-${index}`}
        style={[
          styles.dot,
          activeIndex === index && styles.dotActive,
          activeIndex === 1 && activeIndex === index && styles.dotPurple,
          activeIndex === 2 && activeIndex === index && styles.dotOrange,
        ]}
      />
    ))}
  </View>
);

const SlideOne = ({ onSkip }) => (
  <View style={[styles.slide, styles.slideGreen, { width }]}>
    <BackgroundDecals tone="#7FB56A" />
    <SlideHeader
      titleTop="Save More."
      titleAccent="Shop Smarter."
      accentColor="#0E8B32"
      skipColor="#0C7A2D"
      onSkip={onSkip}
      subtitle="Earn cashback on every order from your favourite stores."
    />
    <View style={styles.walletHeroWrap}>
      <OnboardingWalletHero width={265} height={285} />
      <CashbackCard />
    </View>
  </View>
);

const SlideTwo = ({ onSkip }) => (
  <View style={[styles.slide, styles.slidePurple, { width }]}>
    <BackgroundDecals tone="#A68EF5" variant="purple" />
    <SlideHeader
      titleTop="Gift Cards,"
      titleAccent="Extra Savings."
      accentColor="#5A3DE0"
      skipColor="#4B35C8"
      onSkip={onSkip}
      subtitle="Buy gift cards at great discounts and save more on top brands."
    />
    <View style={styles.giftHeroWrap}>
      <OnboardingGiftHero width={250} height={150} />
    </View>
    <View style={styles.giftGrid}>
      {giftCards.map(item => (
        <GiftCard key={item.name} item={item} />
      ))}
    </View>
  </View>
);

const SlideThree = ({ onStart, onSkip }) => (
  <View style={[styles.slide, styles.slideOrange, { width }]}>
    <BackgroundDecals tone="#FF8E3C" variant="orange" />
    <Text style={styles.brandGhostAmazon}>a</Text>
    <Text style={styles.brandGhostFlipkart}>f</Text>
    <Text style={styles.brandGhostMyntra}>M</Text>
    <SlideHeader
      titleTop="All Stores."
      titleAccent="One App."
      accentColor="#FF6908"
      skipColor="#FF5F00"
      onSkip={onSkip}
      subtitle="Explore top stores, earn cashback, buy or sell gift cards - all in one place."
    />

    <View style={styles.topStoresPanel}>
      <View style={styles.panelHeader}>
        <Text style={styles.panelTitle}>Top Stores</Text>
        <Text style={styles.gridGlyph}>⌘</Text>
      </View>
      <View style={styles.storeGrid}>
        {storeLogos.map(item => (
          <StoreLogoCell key={item.name} item={item} />
        ))}
      </View>
    </View>

    <View style={styles.securePanel}>
      <View style={styles.shieldCircle}>
        <ShieldCheck width={34} height={34} />
      </View>
      <View style={styles.secureCopy}>
        <Text style={styles.secureTitle}>100% Safe & Secure</Text>
        <Text style={styles.secureText}>
          Trusted by thousands of smart shoppers.
        </Text>
      </View>
      <OnboardingSecureBadge width={54} height={54} />
    </View>

    <Pressable onPress={onStart}>
      <LinearGradient
        colors={['#FF7A14', '#FF5A00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.startedButton}
      >
        <Text style={styles.startedText}>Let's Get Started</Text>
        <Text style={styles.startedArrow}>→</Text>
      </LinearGradient>
    </Pressable>
  </View>
);

const OnboardingScreen = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = event => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  };

  const handleStart = () => {
    navigation.navigate('LoginScreen');
  };

  const handleNext = () => {
    if (activeIndex < 2) {
      scrollRef.current?.scrollTo({
        x: (activeIndex + 1) * width,
        animated: true,
      });
    } else {
      handleStart();
    }
  };

  const handleSkip = () => {
    scrollRef.current?.scrollTo({
      x: 2 * width,
      animated: true,
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FBF3" />
      <View style={styles?.screen}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          scrollEventThrottle={16}
        >
          <SlideOne onSkip={handleSkip} />
          <SlideTwo onSkip={handleSkip} />
          <SlideThree onStart={handleStart} onSkip={handleSkip} />
        </ScrollView>
        <Pagination activeIndex={activeIndex} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleNext}
          style={[
            styles.nextFab,
            activeIndex === 1 && styles.nextFabPurple,
            activeIndex === 2 && styles.nextFabOrange,
          ]}
        >
          <ArrowCircleRight width={34} height={34} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default OnboardingScreen;
