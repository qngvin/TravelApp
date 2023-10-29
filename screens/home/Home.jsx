import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import reusable from '../../components/Reusable/reusable.style';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import ReusableText from '../../components/Reusable/ReusableText';
import styles from './home.style';
import HeightSpacer from '../../components/Reusable/HeightSpacer';
import Places from '../../components/Home/Places';
import Recommendation from '../../components/Home/Recommendation';
import BestHotels from '../../components/Home/BestHotels';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWidthSpace('space-between')}>
          <ReusableText
            text={'Hey User~'}
            family={FONTS.small}
            size={SIZES.xxLarge}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Search')}></TouchableOpacity>
        </View>
        <HeightSpacer height={SIZES.xLarge} />
        <ReusableText
          text={'Places'}
          family={FONTS.medium}
          size={SIZES.xxLarge}
          color={COLORS.black}
        />

        <Places />
        <HeightSpacer height={15} />
        <Recommendation />
        <HeightSpacer height={15} />
        <BestHotels />
      </View>
    </SafeAreaView>
  );
};

export default Home;
