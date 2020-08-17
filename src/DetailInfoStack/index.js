import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailInfo from './DetailInfo';

const Stack = createStackNavigator();

const DetailInfoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DetailInfoScreen" component={DetailInfo} />
    </Stack.Navigator>
  );
};

export default DetailInfoStack;
