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
import {useNavigation} from '@react-navigation/native';

export default function ExerciseList({data}: any) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => (
          <ExerciseCard index={index} item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({index, item, navigation}: any) => {
  // console.log(item);
  return (
    <View>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate('ExerciseDetail', {item})}>
        <Image
          source={{uri: item.gifUrl}}
          resizeMode="cover"
          style={{width: wp(44), height: wp(52), borderRadius: 25}}
        />

        <Text style={styles.textContainer}>
          {item?.name?.length > 20
            ? item.name.slice(0, 20) + '...'
            : item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  textContainer: {
    fontSize: hp(1.9),
    fontWeight: 'semibold',
    marginLeft: 10,
  },
  imageContainer: {
    flex: 1,
    width: wp(44),
    height: wp(52),
    justifyContent: 'flex-end',
    // padding: 4,
    margin: 10,
    // marginTop: 10,
    marginVertical: 20,
  },
});
