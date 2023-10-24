import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';
import React from 'react';
import Slides from '../../components/Onboard/Slides';

const Onboarding = () => {
  const slides = [
    {
      id: 1,
      image: require('../../assets/images/harley-davidson-BwXsi8tcXlk-unsplash.jpg'),
      title: 'Find the perfect place to stay',
    },
    {
      id: 2,
      image: require('../../assets/images/login3D.png'),
      title: 'Discover the wordl',
    },
    {
      id: 3,
      image: require('../../assets/images/harley-davidson-BwXsi8tcXlk-unsplash.jpg'),
      title: 'Find the best Hotels in the world',
    },
  ];
  return (
    <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Slides item={item} />}
    />
  );
};

export default Onboarding;
