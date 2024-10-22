import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {currentTheme} from '../constants/theme';

export default function BMIScreen({navigation}) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [result, setResult] = useState('');

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
    <View
      style={[
        styles.detailContainer,
        {backgroundColor: currentTheme.backgroundColor},
      ]}>
      <Text style={[styles.detailTitle, {color: currentTheme.textColor}]}>
        Body Mass Index (BMI)
      </Text>
      <Text style={[styles.detailContent, {color: currentTheme.textColor}]}>
        Body Mass Index (BMI) is a measure of body fat based on height and
        weight that applies to adult men and women. A BMI of 18.5 to 24.9 is
        considered normal weight. It’s a useful tool for assessing whether a
        person has a healthy body weight for a given height.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, {color: currentTheme.textColor}]}>
          Weight (kg)
        </Text>
        <TextInput
          style={[styles.input, {borderColor: currentTheme.secondaryColor}]}
          value={weight}
          onChangeText={text => setWeight(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.label, {color: currentTheme.textColor}]}>
          Height (cm)
        </Text>
        <TextInput
          style={[styles.input, {borderColor: currentTheme.secondaryColor}]}
          value={height}
          onChangeText={text => setHeight(text)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: currentTheme.buttonColor}]}
        onPress={calculateBmi}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmi !== '' && (
        <View style={styles.resultContainer}>
          <Text style={[styles.resultTitle, {color: currentTheme.textColor}]}>
            Your BMI is: {bmi}
          </Text>
          <Text style={[styles.resultText, {color: currentTheme.textColor}]}>
            {result}
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={[styles.backButton, {backgroundColor: currentTheme.buttonColor}]}
        onPress={() => navigation.goBack()}>
        <Text
          style={[
            styles.backButtonText,
            {color: currentTheme.buttonTextColor},
          ]}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#f0f0f0',
    // justifyContent: 'center',
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    // color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    // color: '#666',
  },
  input: {
    height: 40,
    // borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    // backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    // color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    // color: '#333',
  },
  resultText: {
    fontSize: 16,
    // color: '#666',
  },
  detailContent: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    // color: '#666',
    marginBottom: 20,
  },
  backButton: {
    // backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    // color: '#fff',
    fontSize: 16,
  },
});
