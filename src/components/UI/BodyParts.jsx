/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {bodyParts} from '../../constants/data';

export default function BodyParts() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Exercises</Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => (
          <BodyPartCard index={index} item={item} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({item, index}) => {
  return (
    <View>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  textContainer: {
    fontSize: hp(3.5),
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
  },
  imageContainer: {
    flex: 1,
    width: wp(44),
    height: wp(52),
    justifyContent: 'flex-end',
    // padding: 4,
    margin: 10,
  },
  image: {
    width: wp(44),
    height: wp(52),
    resizeMode: 'cover',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#228800',
    // position: 'absolute',
  },
});
