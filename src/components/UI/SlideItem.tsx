import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';

export default function SlideItem({item}: any) {
  return (
    <View style={styles.container}>
      <Animated.Image source={item} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    flex: 0.6,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#228800',
  },
});
