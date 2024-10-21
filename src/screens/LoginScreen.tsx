import {Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../store/context/auth-context';
import {login} from '../util/auth';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Please check your email and password',
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
