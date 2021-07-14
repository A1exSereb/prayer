import {createStackNavigator} from '@react-navigation/stack';
import {MyDesk} from './screens/MyDesk';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {ModalMyDesk} from './screens/ModalMyDesk';
import {PrayerTabs} from './tabs/PrayerTabs';
import {AppRoutes} from '../../../types/AppRoutes';

const Stack = createStackNavigator();

export const UserNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.MyDesk}
        component={MyDesk}
        options={({navigation}) => ({
          title: 'My Desk',
          headerStyle: {
            height: 64,
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
          },
          headerTintColor: '#514D47',
          headerTitleStyle: {
            marginLeft: '50%',
            fontSize: 17,
          },
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModalMyDesk')}>
                <Image
                  source={require('../../../assets/plus.jpg')}
                  style={styles.navigatorAddButton}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name={AppRoutes.ModalMyDesk}
        component={ModalMyDesk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppRoutes.PrayerTabs}
        component={PrayerTabs}
        options={({route}) => ({
          title: route.params.title,
          headerTitleStyle: {
            marginRight: '50%',
            marginLeft: 'auto',
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
