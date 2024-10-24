/* eslint-disable react-native/no-inline-styles */
import {ColorSchemeName, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  // widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/UI/ImageSlider';
import BodyParts from '../components/UI/BodyParts';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* punchline and avatar */}
      <View style={styles.headline}>
        <View style={styles.textLine}>
          <Text style={styles.text}>Welcome</Text>
          <Text style={[styles.text, {marginTop: 10, color: '#228800'}]}>
            To FittBuddy
          </Text>
        </View>

        <View style={styles.avatar}>
          <Image
            source={require('../assests/images/icon.png')}
            style={styles.image}
          />

          <View style={styles.icon}>
            <Ionicons
              name="notifications"
              size={hp(3)}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
          </View>
        </View>
      </View>

      {/* image slider */}
      <View style={styles.slider}>
        <ImageSlider />
      </View>

      {/* body parts */}
      <View style={styles.bodyParts}>
        <BodyParts navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'light' ? '#eee' : '#777',
      // margin: 20,
    },
    headline: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      // marginHorizontal: 5,
    },
    textLine: {
      margin: 20,
    },
    text: {
      fontSize: hp(4.5),
      color: colorScheme === 'dark' ? '#fff' : '#000',
      fontWeight: 'bold',
    },
    avatar: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: hp(7),
      width: hp(7),
      borderRadius: 99,
      position: 'absolute',
      right: 20,
      top: 25,
    },
    icon: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      // borderColor: 'grey',
      borderColor: colorScheme === 'dark' ? '#fff' : '#000',
      borderRadius: 99,
      height: hp(5.5),
      width: hp(5.5),
      position: 'absolute',
      right: 28,
      bottom: 15,
    },
    slider: {
      height: 225,
    },
    bodyParts: {
      flex: 1,
      // marginTop: 0,
    },
  });
