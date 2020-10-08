import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigation from './src/routes/Navigation';
import SetAuthToken from './src/utils/SetAuthToken';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';

SetAuthToken(AsyncStorage.jwtToken);

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
