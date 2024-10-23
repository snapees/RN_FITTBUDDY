import {
  ColorSchemeName,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {StackNavigationProp} from '@react-navigation/stack';

type ToolsProps = {
  navigation: StackNavigationProp<any>;
};

const cardData = [
  {title: 'BMR', content: 'Basal Metabolic Rate'},
  {title: 'BMI', content: 'Body Mass Index'},
  {title: 'TDEE', content: 'Total Daily Energy Expenditure.'},
  {title: 'Macronutrients', content: 'Nutrients required.'},
  {
    title: 'Water Intake',
    content: 'Daily water intake varies.',
  },
  {title: 'Fiber', content: 'Dietary fiber.'},
  // You can add more cards here
];

export default function Tools({navigation}: ToolsProps) {
  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Tools</Text>
      <View style={styles.flexContainer}>
        <View style={styles.cardContainer}>
          {cardData.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                if (card.title === 'BMI') {
                  navigation.navigate('BMI');
                } else {
                  navigation.navigate('Detail', {card});
                }
              }}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardContent}>{card.content}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const getStyles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colorScheme === 'light' ? '#eee' : '#777',
    },
    mainTitle: {
      fontSize: 24,
      color: colorScheme === 'dark' ? '#fff' : '#000',
      margin: 10,
      fontWeight: 'bold',
    },
    flexContainer: {
      flex: 1,
      flexDirection: 'row',
      gap: 15,
      justifyContent: 'center',
      // alignItems: 'center',
      padding: 16,
      // backgroundColor: colorScheme === 'light' ? '#eee' : '#aaa',
    },
    cardContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    card: {
      flexDirection: 'column',
      // backgroundColor: '#fff',
      backgroundColor: colorScheme === 'light' ? '#fff' : '#aaa',
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      elevation: 6, // For Android shadow
      shadowColor: '#000', // For iOS shadow
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      width: '45%',
      height: 100,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
    cardContent: {
      fontSize: 16,
      marginTop: 8,
      color: colorScheme === 'dark' ? '#fff' : '#000',
    },
  });
