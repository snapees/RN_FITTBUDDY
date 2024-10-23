import {ColorSchemeName, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';

export default function WelcomeScreen() {
  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WelcomeScreen</Text>
    </View>
  );
}

const getStyles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: colorScheme === 'light' ? '#eee' : '#777',
    },
    text: {
      fontSize: 24,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
  });
