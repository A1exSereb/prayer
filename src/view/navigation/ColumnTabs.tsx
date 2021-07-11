import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Subscribed} from '../components/prayers/Subscribed';
import {MyPrayers} from '../components/prayers/MyPrayers';

const Tab = createMaterialTopTabNavigator();

export const ColumnTabs = () => {
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
      <Tab.Screen name="MyPrayers" component={MyPrayers} />
      <Tab.Screen
        name="Subscribed"
        component={Subscribed}
        options={{tabBarBadge: 3}}
      />
    </Tab.Navigator>
  );
};
