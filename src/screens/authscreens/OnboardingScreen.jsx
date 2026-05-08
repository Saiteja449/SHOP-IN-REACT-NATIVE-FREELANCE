import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import OnboardingDecal from '../../Icons/OnboardingDecal.svg';
import OnboardingGiftHero from '../../Icons/OnboardingGiftHero.svg';
import OnboardingSecureBadge from '../../Icons/OnboardingSecureBadge.svg';
import OnboardingWalletHero from '../../Icons/OnboardingWalletHero.svg';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import ArrowCircleRight from '../../Icons/ArrowCircleRight.svg';
import TabGrid from '../../Icons/TabGrid.svg';
import { onboardingStyles as styles } from '../../Styles/styles';

const { width } = Dimensions.get('window');

const storeLogos = [
  { name: 'amazon', image: require('../../../assets/images/amazon_white.png') },
  { name: 'Flipkart', image: require('../../../assets/images/flipkart.png') },
  { name: 'Myntra', image: require('../../../assets/images/myntra.png') },
  { name: 'AJIO', image: require('../../../assets/images/ajio.png') },
  { name: 'TATA CLiQ', image: require('../../../assets/images/tata_cliq.png') },
  { name: 'make my trip', image: require('../../../assets/images/mmt.png') },
  { name: 'SWIGGY', image: require('../../../assets/images/swiggy.png') },
  { name: 'NYKAA', image: require('../../../assets/images/nykaa.png') },
  { name: '100+ Stores', More: true },
];

const giftCards = [
  {
    name: 'Amazon Pay',
    pct: '8%',
    kind: 'amazon',
    logo: require('../../../assets/images/amazon_pay.png'),
  },
  {
    name: 'Flipkart',
    pct: '6%',
    kind: 'flipkart',
    logo: require('../../../assets/images/flipkart.png'),
  },
  {
    name: 'Myntra',
    pct: '7%',
    kind: 'myntra',
    logo: require('../../../assets/images/myntra.png'),
  },
  {
    name: 'Zomato',
    pct: '10%',
    kind: 'zomato',
    logo: require('../../../assets/images/zomato.png'),
  },
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
      {isMyntra ? (
        <LinearGradient
          colors={['#FF8E3C', '#FF2D55']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.giftCardTop}
        >
          <Image
            source={item.logo}
            style={{ width: '70%', height: '70%' }}
            resizeMode="contain"
          />
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.giftCardTop,
            isAmazon && styles.giftAmazon,
            isFlipkart && styles.giftFlipkart,
          ]}
        >
          <Image
            source={item.logo}
            style={{
              width: isFlipkart ? '100%' : '70%',
              height: isFlipkart ? '100%' : '70%',
            }}
            resizeMode="contain"
          />
        </View>
      )}
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
    return (
      <View style={styles.storeCell}>
        <Text style={styles.morePlus}>+</Text>
        <Text style={styles.moreText}>100+ Stores</Text>
      </View>
    );
  }

  return (
    <View style={styles.storeCell}>
      <Image
        source={item.image}
        style={{ width: '95%', height: '95%' }}
        resizeMode="contain"
      />
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
        <TabGrid width={18} height={18} color="#8A95A3" />
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
        {activeIndex < 2 && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNext}
            style={styles.nextFab}
          >
            <ArrowCircleRight width={34} height={34} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default OnboardingScreen;
