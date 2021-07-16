import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text, StyleSheet, Image} from 'react-native';
import PrayerLine from '../../../assets/prayer_line.png';
interface prayerItemProp {
  checked: boolean;
  id: number;
  title: string;
}
export const PrayerItem = ({
  checked,
  id,
  title,
}: prayerItemProp): JSX.Element => {
  return (
    <View style={styles.sectionItemContainer} key={id}>
      <CheckBox value={checked} />
      <Text
        style={
          checked ? styles.checkedSectionItemText : styles.sectionItemText
        }>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: -12,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 65,
    borderBottomColor: '#E5E5E5',
  },
  sectionItemText: {
    padding: 15,
    fontSize: 17,
    color: '#514D47',
  },
  checkedSectionItemText: {
    padding: 15,
    fontSize: 17,
    color: '#514D47',
    textDecorationLine: 'line-through',
  },
});
