import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import NavBar from '../Common/NavBar';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <NavBar {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
