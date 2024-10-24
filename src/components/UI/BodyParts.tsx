/* eslint-disable @typescript-eslint/no-unused-vars */
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
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function BodyParts({navigation}: any) {
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
          <BodyPartCard index={index} item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({item, index, navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('Exercise', {item});
  };
  return (
    <View>
      <TouchableOpacity style={styles.imageContainer} onPress={handlePress}>
        <Image source={item.image} style={styles.image} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styles.linearGradient}
        />
        <Text
          style={styles.text}
          // className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
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
    // marginTop: -10,
  },
  image: {
    width: wp(44),
    height: wp(52),
    resizeMode: 'cover',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#228800',
    position: 'absolute',
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  text: {
    fontSize: hp(2.3),
    color: '#fff',
    fontWeight: 'semibold',
    textAlign: 'center',
  },
});
