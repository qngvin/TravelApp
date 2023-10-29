import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import ReusableTile from '../Reusable/ReusableTile';

const Recommendation = () => {
  const navigation = useNavigation();
  const recommendations = [
    {
      id: 1,
      id_country: '1',
      title: 'WWWWWWWWWW',
      location: 'Quảng Bình',
      description: 'accusamus beatae ad facilis cum similique qui sunt',
      imageUrl: 'https://via.placeholder.com/600/92c952',
      region: 'Việt Nam',
      rating: 4.8,
      review: '23 Reviews',
    },
    {
      id: 2,
      id_country: '2',
      title: 'WWWWWWWWWW',
      location: 'H.C.M',
      description: 'reprehenderit est deserunt velit ipsam',
      imageUrl: 'https://via.placeholder.com/600/771796',
      region: 'Việt Nam',
      rating: 4.8,
      review: '23 Reviews',
    },
    {
      id: 3,
      id_country: '3',
      title: 'WWWWWWWWWW',
      location: 'H.C.M',
      description: 'officia porro iure quia iusto qui ipsa ut modi',
      imageUrl: 'https://via.placeholder.com/600/24f355',
      region: 'Việt Nam',
      rating: 4.8,
      review: '23 Reviews',
    },
    {
      id: 4,
      id_country: '1',
      title: 'WWWWWWWWWW',
      location: 'H.C.M',
      description: 'officia porro iure quia iusto qui ipsa ut modi',
      imageUrl: 'https://via.placeholder.com/600/24f355',
      region: 'Việt Nam',
      rating: 4.8,
      review: '23 Reviews',
    },
    {
      id: 5,
      id_country: '2',
      title: 'WWWWWWWWWW',
      location: 'H.C.M',
      description: 'officia porro iure quia iusto qui ipsa ut modi',
      imageUrl: 'https://via.placeholder.com/600/24f355',
      region: 'Việt Nam',
      rating: 4.8,
      review: '23 Reviews',
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={[reusable.rowWidthSpace('space-between'), {paddingBottom: 20}]}>
        <ReusableText
          text={'Recommendations'}
          family={FONTS.medium}
          size={SIZES.xxLarge}
          color={COLORS.black}
        />
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Recommended')}
        />
      </View>
      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={item => item.id}
        contentContainerStyle={{columnGap: SIZES.medium}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ReusableTile
            item={item}
            onPress={() => navigation.navigate('PlaceDetails', item.id)}
          />
        )}
      />
    </View>
  );
};

export default Recommendation;

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
