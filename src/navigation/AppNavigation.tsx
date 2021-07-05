import {createStackNavigator} from '@react-navigation/stack';
import {Column} from '../view/components/columns/columns';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Authorization} from '../view/components/authorization/authorization';
import { useState } from 'react';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  if( isLoading ){
    return(
      
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Authorization"
        component={Authorization}
        options={{
          title: 'Please SignIn',
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
        }}
      />
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
                source={require('../view/assets/plus.jpg')}
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
