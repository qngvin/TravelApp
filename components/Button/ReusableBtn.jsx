import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../../constants/theme';

const ReusableBtn = ({
  onPress,
  btnText,
  textColor,
  width,
  backGroundColor,
  borderWidth,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backGroundColor, borderWidth, borderColor)}>
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnText: textColor => ({
    fontFamily: FONTS.large.fontFamily,
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnStyle: (width, backGroundColor, borderWidth, borderColor) => ({
    width: width,
    backgroundColor: backGroundColor,
    justifyContent: 'center',
    alignItems: 'center',

    height: 45,
    borderRadius: SIZES.small,
    borderColor: borderColor,
    borderWidth: borderWidth,
  }),
});
