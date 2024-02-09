import React from 'react';
import { SafeAreaView } from 'react-native';
import SignUp from './src/screens/auth/Signup'
import Splash from './src/screens/auth/Splash';

const App = () => {
  return (
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
}

export default App;
