import React from 'react';
import {View, Text} from 'react-native';
import Plus from '../../assets/plus.jpg';
import {Input} from '../../../components/input/input';
import {PrayerTabsScreenNavigationProp} from '../tabs/PrayerTabs';

export const MyPrayers = ({
  route,
}: PrayerTabsScreenNavigationProp): JSX.Element => {
  const inputProps = {
    placeholder: 'Add a prayer...',
    imageSource: '../../../assets/plus.jpg',
    request: 'POST_PRAYER_REQUEST',
    parentId: route.params.columnId,
  };

  return (
    <View>
      <View style={{backgroundColor: '#fff', height: '100%', padding: 15}}>
        <Input {...inputProps} />
      </View>
    </View>
  );
};
