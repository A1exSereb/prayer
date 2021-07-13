import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AuthorizationSignIn} from './screens/AuthorizationSignIn';
import {AuthorizationSignUp} from './screens/AuthorizationSignUp';

const Stack = createStackNavigator();

export const GuestNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={AuthorizationSignIn}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={AuthorizationSignUp}
        options={{
          title: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  );
};
