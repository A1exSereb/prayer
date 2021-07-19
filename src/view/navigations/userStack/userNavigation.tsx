import {createStackNavigator} from '@react-navigation/stack';
import {MyDesk} from './screens/MyDesk';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {ModalMyDesk} from './screens/ModalMyDesk';
import {PrayerTabs} from './tabs/PrayerTabs';
import {AppRoutes} from '../../../types/AppRoutes';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {PrayerDetails} from './screens/PrayerDetails';

const UserStack = createStackNavigator<UserNavigationParams>();

export const UserNavigation = () => {
  return (
    <UserStack.Navigator initialRouteName={AppRoutes.MyDesk}>
      <UserStack.Screen
        name={AppRoutes.MyDesk}
        component={MyDesk}
        options={({navigation}: MyDeskScreenNavigationProp) => ({
          title: 'My Desk',
          headerStyle: {
            height: 64,
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
          },
          headerBackTitleStyle: {
            width: 24,
            height: 24,
            marginRight: 18,
            marginTop: 17,
          },
          headerTintColor: '#514D47',
          headerTitleStyle: {
            marginLeft: '50%',
            fontSize: 17,
          },
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate(AppRoutes.ModalMyDesk)}>
                <Image
                  source={require('../../../assets/plus.jpg')}
                  style={styles.navigatorAddButton}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <UserStack.Screen
        name={AppRoutes.ModalMyDesk}
        component={ModalMyDesk}
        options={{headerShown: false}}
      />
      <UserStack.Screen
        name={AppRoutes.PrayerTabs}
        component={PrayerTabs}
        options={({route}) => ({
          title: route.params.title,
          headerTitleStyle: {
            textAlign: 'center',
            marginRight: '20%',
            fontSize: 17,
          },
          headerTintColor: '#514D47',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />
      <UserStack.Screen
        name={AppRoutes.PrayerDetails}
        component={PrayerDetails}
        options={({route}) => ({
          headerTitle: () => (
            <Text style={styles.customTitle}>{route.params.title}</Text>
          ),
          headerStyle: {
            backgroundColor: '#BFB393',
            height: 130,
          },
          headerTintColor: '#FFFF',
          headerLeftContainerStyle: {
            width: 24,
            height: 24,
            marginTop: 17,
          },
          headerRight: () => (
            <View>
              <Image
                source={require('../../../assets/prayer_line_white.png')}
                style={styles.navigatorPrayerHand}
              />
            </View>
          ),
        })}
      />
    </UserStack.Navigator>
  );
};

export type UserNavigationParams = {
  UserNavigation: {
    screen: string;
  };
  [AppRoutes.MyDesk]: undefined;
  [AppRoutes.ModalMyDesk]: undefined;
  [AppRoutes.PrayerTabs]: {
    title: string;
    columnId: number;
  };
  [AppRoutes.PrayerDetails]: {
    prayerId: number;
    title: string;
  };
};
export interface PrayerTabsProp {
  navigation: StackNavigationProp<UserNavigationParams, AppRoutes.MyDesk>;
}
export interface PrayerDetailsProp {
  route: RouteProp<UserNavigationParams, AppRoutes.PrayerDetails>;
}
export interface MyDeskScreenNavigationProp {
  navigation: CompositeNavigationProp<
    StackNavigationProp<UserNavigationParams, AppRoutes.ModalMyDesk>,
    StackNavigationProp<UserNavigationParams, AppRoutes.PrayerTabs>
  >;
  route: RouteProp<UserNavigationParams, AppRoutes.MyDesk>;
}
export interface ModalMyDeskScreenNavigationProp {
  navigation: StackNavigationProp<UserNavigationParams, AppRoutes.MyDesk>;
}

const styles = StyleSheet.create({
  navigatorAddButton: {
    width: 16,
    height: 16,
    marginRight: 15,
  },
  navigatorPrayerHand: {
    position: 'absolute',
    top: 17,
    right: 15,
    width: 29,
    height: 29,
  },
  customTitle: {
    position: 'absolute',
    top: -5,
    left: -45,
    fontSize: 17,
    height: 46,
    width: 340,
    color: '#FFF',
  },
});
