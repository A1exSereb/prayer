import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from '../../../types/AppRoutes';
import {AuthorizationSignIn} from './screens/AuthorizationSignIn';
import {AuthorizationSignUp} from './screens/AuthorizationSignUp';

const Stack = createStackNavigator();

export const GuestNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.SignIn}
        component={AuthorizationSignIn}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name={AppRoutes.SignUp}
        component={AuthorizationSignUp}
        options={{
          title: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  );
};

/* export type GuestNavigationParams = {
  'SignIn':
} */
