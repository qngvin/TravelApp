import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import HotelCard from '../Tiles/Hotels/HotelCard';

const BestHotels = () => {
  const navigation = useNavigation();
  const hotels = [
    {
      id: 1,
      id_country: '1',
      title: 'Vincom melia',
      location: 'Quảng Bình',

      imageUrl: 'https://via.placeholder.com/600/92c952',

      rating: 4.8,
      review: '23 Reviews',
    },
    {
      id: 2,
      id_country: '1',
      title: 'Vincom melia',
      location: 'Quảng Bình',

      imageUrl: 'https://via.placeholder.com/600/92c952',

      rating: 4.8,
      review: '23 Reviews',
    },
    {
      id: 3,
      id_country: '1',
      title: 'Vincom melia',
      location: 'Quảng Bình',

      imageUrl: 'https://via.placeholder.com/600/92c952',

      rating: 4.8,
      review: '23 Reviews',
    },
    {
      id: 4,
      id_country: '1',
      title: 'Vincom melia',
      location: 'Quảng Bình',

      imageUrl: 'https://via.placeholder.com/600/92c952',

      rating: 4.8,
      review: '23 Reviews',
    },
    {
      id: 5,
      id_country: '1',
      title: 'Vincom melia',
      location: 'Quảng Bình',

      imageUrl: 'https://via.placeholder.com/600/92c952',

      rating: 4.8,
      review: '23 Reviews',
    },
  ];
  return (
    <View>
      <View
        style={[reusable.rowWidthSpace('space-between'), {paddingBottom: 20}]}>
        <ReusableText
          text={'Nearby Hotels'}
          family={FONTS.medium}
          size={SIZES.xxLarge}
          color={COLORS.black}
        />
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('HotelList')}
        />
      </View>
      <FlatList
        data={hotels}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{columnGap: SIZES.medium}}
        renderItem={({item}) => (
          <HotelCard
            item={item}
            margin={10}
            onPress={() => navigation.navigate('HotelDetail')}
          />
        )}
      />
    </View>
  );
};

export default BestHotels;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  box: {
    backgroundColor: COLORS.red,
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
