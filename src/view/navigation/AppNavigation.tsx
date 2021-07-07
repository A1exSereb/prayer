import {createStackNavigator} from '@react-navigation/stack';
import {Column} from '../components/columns/Column';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {AuthorizationSignIn} from '../components/authorization/AuthorizationSignIn';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/rootReducer';
import {AuthorizationSignUp} from '../components/authorization/AuthorizationSignUp';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  const authorization = useSelector((state: RootState) => state.authorization);
  const {authenticated} = authorization;

  return !authenticated ? (
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
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Column"
        component={Column}
        options={{
          title: 'My Desk',
          headerStyle: {
            height: 64,
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
          },
          headerTintColor: '#514D47',
          headerTitleStyle: {
            marginLeft: 150,
            fontSize: 17,
          },
          headerRight: () => (
            <View>
              <Image
                source={require('../assets/plus.jpg')}
                style={styles.navigatorAddButton}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  navigatorAddButton: {
    width: 16,
    height: 16,
    marginRight: 15,
  },
});
