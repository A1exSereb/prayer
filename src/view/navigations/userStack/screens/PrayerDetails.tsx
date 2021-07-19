import React from 'react';
import {View, Text} from 'react-native';
import {PrayerDetailsProp} from '../userNavigation';

export const PrayerDetails = ({route}: PrayerDetailsProp): JSX.Element => {
  return (
    <View>
      <Text>{`PrayerId: ${route.params.prayerId}, title:${route.params.title}`}</Text>
    </View>
  );
};
