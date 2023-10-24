import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './slides.style';
import ResuableText from '../Reusable/ReusableText';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import ReusableBtn from '../Button/ReusableBtn';
import HeightSpacer from '../Reusable/HeightSpacer';
import {useNavigation} from '@react-navigation/native';
const Slides = ({item}) => {
  const navigation = useNavigation();

  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ResuableText
          text={item.title}
          family={FONTS.large}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />
        <HeightSpacer height={40} />
        <ReusableBtn
          onPress={() => navigation.navigate('Bottom')}
          btnText={"Let's go"}
          width={(SIZES.width - 50) / 2.2}
          backGroundColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;
