import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const PlaceDetails = () => {
  const route = useRoute();

  const id = route.params;
  return (
    <SafeAreaView>
      <Text>PlaceDetails {id}</Text>
    </SafeAreaView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({});
