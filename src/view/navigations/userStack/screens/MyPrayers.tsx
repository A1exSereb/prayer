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
  navigation
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
      <ScrollView style={{width: '100%'}}>
        {uncheckedPrayers.map(item => (
          <PrayerItem
            id={item.id}
            title={item.title}
            checked={item.checked}
            description={item.description}
            navigation={navigation}
          />
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowCheckedPrayers(!showCheckedPrayers)}>
          <Text style={styles.buttonText}>
            {showCheckedPrayers ? 'HIDE' : 'SHOW'} ANSWERED PRAYERS
          </Text>
        </TouchableOpacity>
        {showCheckedPrayers &&
          checkedPrayers.map(item => (
            <PrayerItem
              id={item.id}
              title={item.title}
              checked={item.checked}
              type={'checked'}
              description={item.description}
              key={item.id}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 50,
    margin: 13,
  },
  section: {
    backgroundColor: '#fff',
    height: '100%',
  },
  button: {
    width: 209,
    height: 30,
    backgroundColor: '#BFB393',
    borderRadius: 15,
    marginTop: 21,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 21,
  },
  buttonText: {
    fontSize: 12,
    color: '#FFF',
    textTransform: 'uppercase',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
