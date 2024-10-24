import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

export default function SlideItem({item}: any) {
  return (
    <View style={styles.container}>
      <Image source={item} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    flex: 0.6,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#228800',
    borderStyle: 'solid',
  },
});
