/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import {useState} from 'react';
import {
  ColorSchemeName,
  Alert,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Colors} from '../../constants/colors';
import {useTheme} from '../../hooks/useTheme';
import AuthForm from './AuthForm';
import FlatButton from '../UI/FlatButton';

interface AuthContentProps {
  isLogin?: boolean;
  onAuthenticate: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
}

function AuthContent({isLogin, onAuthenticate}: AuthContentProps) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  }

  function submitHandler(credentials: {
    email: any;
    confirmEmail: any;
    password: any;
    confirmPassword: any;
  }) {
    let {email, confirmEmail, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    // console.log('emailIsValid:', emailIsValid);
    // console.log('passwordIsValid:', passwordIsValid);
    // console.log('emailsAreEqual:', emailsAreEqual);
    // console.log('passwordsAreEqual:', passwordsAreEqual);

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({email, password});
  }

  return (
    <View style={styles.authContent}>
      <ImageBackground
        source={require('../../assests/images/man.png')}
        style={styles.image}
        blurRadius={3}>
        <View style={styles.authAppLogo}>
          <Text style={styles.brandName}>FittBuddy</Text>
        </View>
        <View style={styles.authForm}>
          <AuthForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
          />
          <View style={styles.buttons}>
            <FlatButton onPress={switchAuthModeHandler}>
              {isLogin ? 'Create a new user' : 'Log in instead'}
            </FlatButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default AuthContent;

const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    authContent: {
      flex: 1,
    },
    image: {
      height: '100%',
      width: '100%',
    },
    authAppLogo: {
      flex: 3 / 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    brandName: {
      fontSize: 48,
      fontWeight: 'bold',
      color: colorScheme === 'light' ? '#eee' : '#fff',
      position: 'absolute',
      bottom: 0, // position where you want
      left: 120,
      marginTop: 80,
    },
    authForm: {
      flex: 2 / 5,
      marginHorizontal: 32,
      padding: 16,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttons: {
      marginTop: 8,
    },
  });
};
