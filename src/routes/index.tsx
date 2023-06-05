import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import { HomeStack } from './home';

export function Routes() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export type {HomeRouteProps} from './home/types';
