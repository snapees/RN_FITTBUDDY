/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';

export default function ExerciseDeatail({route}: any) {
  const {item} = route.params;
  const navigation = useNavigation();
  // console.log(item);
  return (
    <View style={styles.container}>
      {/* className="flex flex-1 mt-10"> */}
      <StatusBar barStyle={'light-content'} />
      <View
        style={styles.imageContainer}
        className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{uri: item.gifUrl}}
          contentFit="cover"
          // style={{width: wp(100), height: wp(100)}}
          // className="rounded-[40px]"
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        // className="mx-2 absolute rounded-full mt-2 right-0"
        style={styles.icon}>
        <Anticons name="closecircle" size={hp(4.5)} color="#228800" />
      </TouchableOpacity>

      {/* details */}
      <ScrollView
        style={styles.detailsContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}>
        <Text style={styles.detailsTitle}>{item.name}</Text>
        <Text style={styles.detailContent}>
          Equipment <Text style={{fontWeight: 'bold'}}>{item?.equipment}</Text>
        </Text>
        <Text style={styles.detailContent}>
          Secondary Muscles{' '}
          <Text style={{fontWeight: 'bold'}}>{item?.secondaryMuscles}</Text>
        </Text>
        <Text style={styles.detailContent}>
          Target <Text style={{fontWeight: 'bold'}}>{item?.target}</Text>
        </Text>

        {/* instructions */}
        <Text style={styles.instructionContainer}>Instructions</Text>

        {item.instructions.map(
          (instruction: string, index: React.Key | null | undefined) => {
            const splitInstructions = instruction.split(',');
            return (
              <View key={index}>
                {splitInstructions.map(
                  (
                    splitInstruction: string,
                    splitIndex: React.Key | null | undefined,
                  ) => (
                    <Text key={splitIndex} style={styles.instruction}>
                      {splitInstruction.trim()}
                    </Text>
                  ),
                )}
              </View>
            );
          },
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // marginTop: 10,
  },
  imageContainer: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#fff',
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0, // Horizontal offset
      height: 2, // Vertical offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.5, // Shadow blur radius
    elevation: 5, // For Android
  },
  image: {
    width: wp(100),
    height: wp(100),
    borderRadius: 40,
  },
  icon: {
    marginHorizontal: 2,
    marginTop: 2,
    borderRadius: 99,
    position: 'absolute',
    right: 0,
  },
  detailsContainer: {
    marginHorizontal: 4,
    marginTop: 3,
    marginVertical: 2,
  },
  detailsTitle: {
    fontSize: hp(3.5),
    fontWeight: 'semibold',
    color: '#fff',
  },
  detailContent: {
    fontSize: hp(2),
    color: '#fff',
  },
  instructionContainer: {
    fontSize: hp(3.5),
    fontWeight: 'semibold',
    color: '#fff',
  },
  instruction: {
    fontSize: hp(2),
    color: '#eee',
  },
});
