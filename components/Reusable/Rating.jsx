import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import reusable from './reusable.style';

import WidthSpacer from './WidthSpacer';
import {COLORS, FONTS} from '../../constants/theme';
import ReusableText from './ReusableText';

const Rating = ({rating}) => {
  return (
    <View style={reusable.rowWidthSpace('flex-start')}>
      {/* //icon day */}
      <ReusableText
        text={rating}
        family={FONTS.medium}
        size={14}
        color={COLORS.yellow}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
