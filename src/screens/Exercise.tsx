/* eslint-disable react-hooks/exhaustive-deps */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fetchExercisesByBodyPart} from '../api/exerciseDB';
import ExerciseList from '../components/UI/ExerciseList';
import {ScrollView} from 'react-native-virtualized-view';

export default function ExerciseDetail({route}: any) {
  const navigation = useNavigation();
  const {item} = route.params;
  // console.log(item);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (item) {
      getExercises(item.name);
    }
  }, []);

  const getExercises = async ({bodyPart}: any) => {
    let data = await fetchExercisesByBodyPart(bodyPart);
    // console.log('got data: ', data);
    setExercises(data);
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Text>Exercise Detail for {item.name}</Text> */}
      <StatusBar barStyle={'light-content'} />
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        {/* <Text>Go Back</Text> */}
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* excercises */}
      {/* <View className="mx-4 space-y-3 mt-4"> */}
      <View style={styles.exerciseContainer}>
        <Text
          // style={{fontSize: hp(3)}}
          // className="font-semibold text-neutral-700"
          style={styles.exerciseTitle}>
          {item.name} exercises
        </Text>
        <View style={styles.exerciseList}>
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
  },
  image: {
    width: wp(100),
    height: hp(45),
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: hp(5.5),
    height: hp(5.5),
    marginTop: hp(1),
    backgroundColor: '#228800',
    marginHorizontal: 4,
    paddingRight: 5,
    borderRadius: 50,
    position: 'absolute',
  },
  exerciseContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  exerciseTitle: {
    fontSize: hp(3),
    fontWeight: 'semibold',
    color: '#fff',
    marginLeft: 10,
  },
  exerciseList: {
    marginBottom: 10,
  },
});
