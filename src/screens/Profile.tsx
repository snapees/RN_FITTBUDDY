import {ColorSchemeName, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';

export default function Profile() {
  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

const getStyles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: colorScheme === 'light' ? '#eee' : '#aaa',
    },
    text: {
      fontSize: 24,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
  });
