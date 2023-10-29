import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import reusable from './reusable.style';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import ReusableText from './ReusableText';

const AppBar = ({title, color, color1}) => {
  return (
    <View style={styles.overlay}>
      <View style={reusable.rowWidthSpace('space-between')}>
        <TouchableOpacity style={styles.box(color)}/>
         
        <ReusableText
          text={title}
          family={FONTS.small}
          size={SIZES.large}
          color={COLORS.black}
        />
        <TouchableOpacity style={styles.box1(color1)} />
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  box: color => ({
    width: 30,
    height: 30,
    backgroundColor: color,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  box1: color1 => ({
    width: 30,
    height: 30,
    backgroundColor: color1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
