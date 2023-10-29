import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const CoutryDetail = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  console.log(item);
  return (
    <View>
      <Text>CoutryDetail</Text>
    </View>
  );
};

export default CoutryDetail;
