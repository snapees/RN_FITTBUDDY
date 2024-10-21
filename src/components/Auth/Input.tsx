/* eslint-disable react/react-in-jsx-scope */
import {
  ColorSchemeName,
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

import {Colors} from '../../constants/colors';
import {useTheme} from '../../hooks/useTheme';
// import {useState} from 'react';

interface InputProps {
  label: string;
  type: string;
  keyboardType?: KeyboardTypeOptions;
  secure?: boolean;
  onUpdateValue: (value: string, type: string) => void;
  value: string;
  isInvalid: boolean;
}

function Input({
  label,
  type,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: InputProps) {
  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);
  // const [inputValue, setInputValue] = useState(value);

  const handleTextChange = (text: string) => {
    // console.log('Input text:', text);
    // setInputValue(text);
    onUpdateValue(type, text);
  };

  return (
    <View style={styles.inputContainer}>
      {/* <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text> */}
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        //autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={handleTextChange}
        value={value}
        placeholder={label}
        placeholderTextColor={Colors[colorScheme ?? 'light'].textColor}
        // editable={true}
      />
    </View>
  );
}

export default Input;

const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    inputContainer: {
      marginVertical: 8,
    },
    label: {
      color: 'black',
      marginBottom: 4,
    },
    labelInvalid: {
      color: Colors[colorScheme ?? 'light'].error500,
    },
    input: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      backgroundColor: Colors[colorScheme ?? 'light'].container,
      borderColor: Colors.common.grey,
      borderRadius: 50,
      borderWidth: 3,
      fontSize: 16,
      minWidth: '100%',
    },
    inputInvalid: {
      backgroundColor: Colors[colorScheme ?? 'light'].error100,
    },
  });
};

// import React, {useState} from 'react';
// import {TextInput, View, Text, StyleSheet} from 'react-native';

// function InputField({label, value, onChangeText, isValid}) {
//   const [isInvalid, setIsInvalid] = useState(false);

//   const handleTextChange = text => {
//     onChangeText(text);
//     setIsInvalid(!isValid(text));
//   };

//   return (
//     <View>
//       <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
//         {label}
//       </Text>
//       <TextInput
//         style={styles.input}
//         value={value}
//         onChangeText={handleTextChange}
//         placeholder={label}
//       />
//     </View>
//   );
// }

// export default InputField;

// const styles = StyleSheet.create({
//   label: {
//     color: 'black',
//     marginBottom: 4,
//   },
//   labelInvalid: {
//     color: 'red',
//   },
//   input: {
//     paddingVertical: 8,
//     paddingHorizontal: 6,
//     backgroundColor: 'red',
//     borderRadius: 4,
//     fontSize: 16,
//   },
// });
