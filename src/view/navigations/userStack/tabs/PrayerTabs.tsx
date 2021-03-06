import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Subscribed} from '../screens/Subscribed';
import {MyPrayers} from '../screens/MyPrayers';
import {AppRoutes} from '../../../../types';
import {UserNavigationParams} from '../userNavigation';
import {RouteProp} from '@react-navigation/native';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator<PrayerTabsProp>();

export const PrayerTabs = ({route}: PrayerTabsScreenNavigationProp) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#72A8BC',
        inactiveTintColor: '#C8C8C8',
        indicatorStyle: {
          backgroundColor: '#72A8BC',
        },
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name={AppRoutes.MyPrayers}
        component={MyPrayers}
        initialParams={{
          columnId: route.params.columnId,
        }}
        options={{
          title: 'My prayers',
        }}
      />
      <Tab.Screen
        name={AppRoutes.Subscribed}
        component={Subscribed}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View>
                <Text
                  style={{
                    ...styles.customLabel,
                    ...(focused && {color: '#72A8BC'}),
                  }}>
                  {AppRoutes.Subscribed}
                </Text>
                <View style={styles.tabBarBadge}>
                  <Text style={styles.tabBarBadgeText}>5</Text>
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export type PrayerTabsProp = {
  PrayerTabs: {
    screen: string;
  };
  [AppRoutes.MyPrayers]: {
    columnId: number;
  };
  [AppRoutes.Subscribed]: undefined;
};

export interface PrayerTabsScreenNavigationProp {
  navigation: StackNavigationProp<
    UserNavigationParams,
    AppRoutes.PrayerDetails
  >;
  route: RouteProp<PrayerTabsProp, AppRoutes.MyPrayers>;
}

const styles = StyleSheet.create({
  customLabel: {
    fontSize: 13,
    color: '#C8C8C8',
    textTransform: 'uppercase',
  },
  tabBarBadge: {
    position: 'absolute',
    right: -20,
    bottom: 0,
    backgroundColor: '#AC5253',
    width: 16,
    height: 16,
    borderRadius: 20,
    textAlign: 'center',
  },
  tabBarBadgeText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 9,
  },
});
