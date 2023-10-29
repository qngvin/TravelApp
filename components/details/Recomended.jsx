import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../Reusable/AppBar';

import {COLORS} from '../../constants/theme';

const Recomended = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View style={{height: 0}}>
        <AppBar
          title={'Recommendations'}
          color={COLORS.black}
          color1={COLORS.black}
        />
      </View>
    </SafeAreaView>
  );
};

export default Recomended;

const styles = StyleSheet.create({});
