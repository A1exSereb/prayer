import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Subscribed} from '../screens/Subscribed';
import {MyPrayers} from '../screens/MyPrayers';
import {AppRoutes} from '../../../../types/AppRoutes';

const Tab = createMaterialTopTabNavigator();

export const PrayerTabs = ({route}) => {
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
          columnId: route.params.columnId}
        }
        options={{
          title: 'My prayers',
        }}
      />
      <Tab.Screen name={AppRoutes.Subscribed} component={Subscribed} />
    </Tab.Navigator>
  );
};
