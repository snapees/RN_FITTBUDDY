/* eslint-disable react/no-unstable-nested-components */
import {StatusBar, useColorScheme} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from './src/constants/colors';
import AuthContextProvider, {
  AuthContext,
} from './src/store/context/auth-context';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeProvider from './src/hooks/useTheme';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './src/screens/Profile';
import Tools from './src/screens/Tools';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DetailScreen from './src/screens/DetailScreen';
import BMIScreen from './src/screens/BMIScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].primary500,
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].primary100,
        },
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  // const username = userProfile.userName;
  // const email = userProfile.email;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'people' : 'people';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={WelcomeScreen} />
      <Tab.Screen
        name="Tools"
        component={Tools}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome5 name="tools" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        // options={{
        //   tabBarIcon: ({focused, color, size}) => (
        //     <Ionicons name="people" size={size} color={color} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].primary500,
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].primary100,
        },
      }}>
      {/* <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({tintColor}) => (
            <Ionicons
              name="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      /> */}
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="BMI" component={BMIScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  useEffect(() => {
    if (!isTryingLogin) {
      const init = async () => {
        // …do multiple sync or async tasks
      };

      init().finally(async () => {
        await BootSplash.hide({fade: true});
        console.log('Bootsplash has been hidden successfully');
      });
    }
  }, [isTryingLogin]);

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </AuthContextProvider>
      <StatusBar barStyle="default" />
    </>
  );
}

// export default function App() {
//   // const [visible, setVisible] = useState(true);
//   useEffect(() => {
//     const init = async () => {
//       // …do multiple sync or async tasks
//     };
//     init().finally(async () => {
//       await BootSplash.hide({fade: true});
//       console.log('Bootsplash has been hidden successfully');
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <Text style={styles.text}>Hello, Dave.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
// });
