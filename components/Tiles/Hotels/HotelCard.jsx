import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import NetworkImage from '../../Reusable/NetworkImage';
import HeightSpacer from '../../Reusable/HeightSpacer';
import ReusableText from '../../Reusable/ReusableText';
import Rating from '../../Reusable/Rating';

const HotelCard = ({item, margin, onPress}) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={item.imageUrl}
            width={'90%'}
            height={'100%'}
            radius={16}
          />
        </View>

        <HeightSpacer height={5} />
        <View style={{padding: 10}}>
          <ReusableText
            text={item.title}
            family={FONTS.medium}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={5} />
          <ReusableText
            text={item.location}
            family={FONTS.medium}
            size={SIZES.medium}
            color={COLORS.gray}
          />
          <HeightSpacer height={5} />
          <Rating rating={item.rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: margin => ({
    width: SIZES.width / 2.2,
    height: 250,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    marginRight: margin,
  }),
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    height: 150,
  },
});
