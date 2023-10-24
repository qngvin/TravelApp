import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  stack: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
});

export default styles;
