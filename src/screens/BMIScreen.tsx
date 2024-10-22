import {
  Alert,
  ColorSchemeName,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from '@react-navigation/stack';

type BMIScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function BMIScreen({navigation}: BMIScreenProps) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [result, setResult] = useState('');

  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);

  const calculateBmi = () => {
    if (weight !== '' && height !== '') {
      const bmiValue = parseFloat(weight) / (parseFloat(height) / 100) ** 2;
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setResult('Underweight');
      } else if (bmiValue < 25) {
        setResult('Normal weight');
      } else if (bmiValue < 30) {
        setResult('Overweight');
      } else {
        setResult('Obese');
      }
    } else {
      Alert.alert('Please enter both weight and height');
    }
  };

  return (
    <View style={[styles.detailContainer]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back"
            size={28}
            color={colorScheme === 'light' ? '#000' : '#fff'}
          />
        </TouchableOpacity>
        <Text style={[styles.detailTitle]}>BMI</Text>
      </View>
      <Text style={[styles.detailContent]}>
        Body Mass Index (BMI) is a measure of body fat based on height and
        weight that applies to adult men and women. A BMI of 18.5 to 24.9 is
        considered normal weight. It’s a useful tool for assessing whether a
        person has a healthy body weight for a given height.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.label]}>Weight (kg)</Text>
        <TextInput
          style={[styles.input]}
          value={weight}
          onChangeText={text => setWeight(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label]}>Height (cm)</Text>
        <TextInput
          style={[styles.input]}
          value={height}
          onChangeText={text => setHeight(text)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={[styles.button]} onPress={calculateBmi}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmi !== '' && (
        <View style={styles.resultContainer}>
          <Text style={[styles.resultTitle]}>Your BMI is: {bmi}</Text>
          <Text style={[styles.resultText]}>{result}</Text>
        </View>
      )}

      {/* <TouchableOpacity
        style={[styles.backButton]}
        onPress={() => navigation.goBack()}>
        <Text style={[styles.backButtonText]}>Go Back</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const getStyles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    detailContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: colorScheme === 'light' ? '#eee' : '#aaa',
      // justifyContent: 'center',
    },
    detailTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colorScheme === 'light' ? '#000' : '#fff',
      marginLeft: 10,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center', // Align items vertically centered
      marginBottom: 10,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      // color: '#000',
      color: colorScheme === 'light' ? '#333' : '#fff',
    },
    input: {
      height: 40,
      // borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 25,
      borderColor: colorScheme === 'light' ? '#ccc' : '#ddd',
    },
    button: {
      backgroundColor: '#228800',
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
      width: '50%',
      marginHorizontal: 100,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    resultContainer: {
      marginTop: 20,
    },
    // resultFullScreen: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: colorScheme === 'light' ? '#fff' : '#333',
    //   padding: 20,
    // },
    resultTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
    resultText: {
      fontSize: 16,
      color: '#666',
    },
    // resetButton: {
    //   backgroundColor: '#ff5722',
    //   padding: 10,
    //   borderRadius: 20,
    //   alignItems: 'center',
    //   width: '50%',
    // },
    // resetButtonText: {
    //   color: '#fff',
    //   fontSize: 16,
    // },
    detailContent: {
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'justify',
      color: colorScheme === 'light' ? '#666' : '#eee',
      marginBottom: 20,
    },
    // backButton: {
    //   backgroundColor: '#228800',
    //   padding: 10,
    //   borderRadius: 5,
    //   alignItems: 'center',
    // },
    // backButtonText: {
    //   color: '#fff',
    //   fontSize: 16,
    // },
  });
