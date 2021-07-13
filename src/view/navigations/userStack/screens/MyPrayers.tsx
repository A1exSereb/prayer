import React from 'react';
import {View, Text} from 'react-native';
import Plus from '../../assets/plus.jpg';
import {Input} from '../../../components/input/input';

export const MyPrayers = ({route}): React.Element => {
  const inputProps = {
    placeholder: 'Add a prayer...',
    imageSource: '../../assets/plus.jpg',
    request: console.log('add prayer request'),
  };
  console.log('getting columnId', route.params.columnId);
  return (
    <View>
      <View style={{backgroundColor: '#fff', height: '100%', padding: 15}}>
        <Input {...inputProps} />
      </View>
    </View>
  );
};
