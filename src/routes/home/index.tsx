import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Types
import type {IHomeStack} from './types';

// Screens
import { Home } from '../../screens/Home';

const Stack = createStackNavigator<IHomeStack>();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
