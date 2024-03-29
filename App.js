import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import SignUp from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import SignIn from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const UserContext = React.createContext();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused ? require('./src/assets/tabs/home_active.png') : require('./src/assets/tabs/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused ? require('./src/assets/tabs/bookmark_active.png') : require('./src/assets/tabs/bookmark.png');
          } else if (route.name === 'ProfileStack') {
            icon = focused ? require('./src/assets/tabs/profile_active.png') : require('./src/assets/tabs/profile.png');
          }

          return <Image style={{ width: 24, height: 24 }} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.lightGray },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [user, setUser] = useState();

  // Load user data from AsyncStorage when the app starts
  useEffect(() => {
    (async () => {
      const accessToken = await AsyncStorage.getItem('auth_token');
      setUser({ accessToken });
    })();
  }, []); // Make sure to pass an empty array as the second argument to useEffect to run only once

  // Configure Google Sign-In when the app starts
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: '539400163031-v2k55gvvk01tmgjuatitm08qq8sj2cpk.apps.googleusercontent.com',
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
    });
  }, []);

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            {user?.accessToken ? (
              <>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }}></Stack.Screen>
              </>
            ) : (
              <>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}></Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
