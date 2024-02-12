import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SignUp from './src/screens/auth/Signup'
import Splash from './src/screens/auth/Splash';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';


const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: '539400163031-v2k55gvvk01tmgjuatitm08qq8sj2cpk.apps.googleusercontent.com',
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID
    })
    
  }, [])
  return (
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
}

export default App;
