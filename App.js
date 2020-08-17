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
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import HomeStack from './src/HomeStack';
import DetailInfoStack from './src/DetailInfoStack';
import configureStore from './redux';
import NavBar from './src/Common/NavBar';

const Stack = createStackNavigator();

const App = () => {
  const store = configureStore();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerTitle: (props) => <NavBar {...props} />,
            }}
          />
          <Stack.Screen
            name="DetailInfo"
            component={DetailInfoStack}
            options={{
              headerTitle: (props) => <NavBar {...props} />,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
