import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Plus from '../../../../assets/prayer_line.png';
import {Input} from '../../../components/input/input';
import {PrayerTabsScreenNavigationProp} from '../tabs/PrayerTabs';
import {PrayerItem} from '../../../components/prayerItem/PrayerItem';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  getCheckedPrayerById,
  getUncheckedPrayerById,
} from '../../../../store/ducks/prayers/selectors';

export const MyPrayers = ({
  route,
}: PrayerTabsScreenNavigationProp): JSX.Element => {
  const [showCheckedPrayers, setShowCheckedPrayers] = useState(false);
  const checkedPrayers = useSelector(
    getCheckedPrayerById(route.params.columnId),
  );
  const uncheckedPrayers = useSelector(
    getUncheckedPrayerById(route.params.columnId),
  );
  const inputProps = {
    placeholder: 'Add a prayer...',
    imageSource: '../../../assets/plus.jpg',
    request: 'POST_PRAYER_REQUEST',
    parentId: route.params.columnId,
  };

  return (
    <View style={styles.section}>
      <View style={styles.input}>
        <Input {...inputProps} />
      </View>
      <ScrollView style={{height: '100%', width: '100%'}}>
        {uncheckedPrayers.map(item => (
          <PrayerItem id={item.id} title={item.title} checked={item.checked} />
        ))}
      </ScrollView>
      <TouchableOpacity>
        <Text />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 50,
  },
  imageText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: -12,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    padding: 15,
    backgroundColor: '#fff',
    height: '100%',
  },
  sectionItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    borderBottomColor: '#E5E5E5',
  },
  sectionItemText: {
    padding: 15,
    fontSize: 17,
    color: '#514D47',
  },
});
