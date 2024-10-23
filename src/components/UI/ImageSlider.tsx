/* eslint-disable @typescript-eslint/no-unused-vars */
import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {sliderImages} from '../../constants/data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Duplicate the images to create a loop effect
  const loopedImages = [...sliderImages, ...sliderImages];

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={loopedImages}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
      <Pagination data={sliderImages} scrollX={scrollX} index={index} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
});
