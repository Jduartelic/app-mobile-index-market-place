/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import HomeStack from './src/HomeStack';
import configureStore from './redux';

const App = () => {
  const store = configureStore();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
