import {createStackNavigator} from '@react-navigation/stack';
import {Column} from '../components/columns/Column';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {ModalColumn} from '../components/modal/ModalColumn';
import {AuthorizationSignIn} from '../components/authorization/AuthorizationSignIn';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/rootReducer';
import {AuthorizationSignUp} from '../components/authorization/AuthorizationSignUp';
import {Prayer} from '../components/prayers/Prayer';

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
        options={({navigation}) => ({
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
              <TouchableOpacity
                onPress={() => navigation.navigate('ModalColumn')}>
                <Image
                  source={require('../assets/plus.jpg')}
                  style={styles.navigatorAddButton}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ModalColumn"
        component={ModalColumn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Prayer"
        component={Prayer}
        options={({route}) => ({
          title: route.params.title,
          headerTitleStyle: {
            marginRight: '20%',
            textAlign: 'center',
            flex: 1,
            fontSize: 17,
          },
          headerTintColor: '#514D47',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
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
