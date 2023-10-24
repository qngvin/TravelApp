import {StyleSheet, Text, View, VirtualizedList} from 'react-native';
import React from 'react';
import HeightSpacer from '../Reusable/HeightSpacer';
import {SIZES} from '../../constants/theme';

const Places = () => {
  const countries = [
    {
      id: 1,
      country: 'Việt Nam',
      description: 'accusamus beatae ad facilis cum similique qui sunt',
      imageUrl: 'https://via.placeholder.com/600/92c952',
      region: 'Việt Nam',
    },
    {
      id: 2,
      country: 'Việt Nam',
      description: 'reprehenderit est deserunt velit ipsam',
      imageUrl: 'https://via.placeholder.com/600/771796',
      region: 'Việt Nam',
    },
    {
      id: 3,
      country: 'Việt Nam',
      description: 'officia porro iure quia iusto qui ipsa ut modi',
      imageUrl: 'https://via.placeholder.com/600/24f355',
      region: 'Việt Nam',
    },
  ];
  return (
    <View>
      <HeightSpacer height={20} />
      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        getItemCount={data => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({item, index}) => (
          <View style={{marginRight: SIZES.medium}}>
            <Text>{item.country}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
