import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
const Profile = () => {
  return (
    <View>
      <Text>
        Profile
        <Icon ios="ios-add" android="md-add" />
      </Text>
    </View>
  );
};

export default Profile;
