import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from '../../../types';
import {AuthorizationSignIn} from './screens/AuthorizationSignIn';
import {AuthorizationSignUp} from './screens/AuthorizationSignUp';

const GuestStack = createStackNavigator<GuestNavigationParams>();

export const GuestNavigation = () => {
  return (
    <GuestStack.Navigator initialRouteName={AppRoutes.SignIn}>
      <GuestStack.Screen
        name={AppRoutes.SignIn}
        component={AuthorizationSignIn}
        options={{
          title: 'Sign In',
        }}
      />
      <GuestStack.Screen
        name={AppRoutes.SignUp}
        component={AuthorizationSignUp}
        options={{
          title: 'Sign Up',
        }}
      />
    </GuestStack.Navigator>
  );
};

export type GuestNavigationParams = {
  GuestNavigation: {
    screen: string;
  };
  [AppRoutes.SignIn]: undefined;
  [AppRoutes.SignUp]: undefined;
};
export interface SignInScreenNavigationProp {
  navigation: StackNavigationProp<GuestNavigationParams, AppRoutes.SignUp>;
}
