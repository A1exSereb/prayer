import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PrayerLine from '../../../assets/prayer_line.png';
import {useAppDispatch} from '../../../store/store';
interface prayerItemProp {
  checked: boolean;
  id: number;
  title: string;
  type?: string;
  description: string | null;
}
export const PrayerItem = ({
  checked,
  id,
  title,
  type,
  description,
}: prayerItemProp): JSX.Element => {
  const [showDeletBtn, setShowDeletBtn] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View
        style={{
          ...(showDeletBtn ? {marginRight: 0} : {marginRight: 'auto'}),
          ...(type === 'checked'
            ? {
                ...styles.sectionItemContainer,
                ...styles.sectionItemContainerChecked,
              }
            : styles.sectionItemContainer),
        }}
        key={id}>
        <CheckBox
          value={checked}
          tintColors={{true: '#000', false: '#000'}}
          onChange={() => {
            dispatch({
              type: 'CHANGE_PRAYER_REQUEST',
              payload: {id, title, checked: !checked, description},
            });
          }}
        />
        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
          onLongPress={() => setShowDeletBtn(!showDeletBtn)}>
          <Text
            style={
              checked
                ? {
                    ...styles.sectionItemText,
                    textDecorationLine: 'line-through',
                  }
                : styles.sectionItemText
            }>
            {title}
          </Text>
          <View style={styles.imageContainer}>
            <View style={styles.flexContainer}>
              <Image
                style={styles.marginRight}
                source={require('../../../assets/user.png')}
              />
              <Text style={styles.marginRight}>3</Text>
            </View>
            <View style={styles.flexContainer}>
              <Image
                style={styles.marginRight}
                source={require('../../../assets/prayer_line.png')}
              />
              <Text style={styles.marginRight}>3233</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {showDeletBtn && (
        <TouchableOpacity
          onPress={() =>
            dispatch({
              type: 'DELETE_PRAYER_REQUEST',
              id,
            })
          }
          style={styles.deleteBtn}>
          <Text style={styles.deleteBtnText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionItemContainer: {
    display: 'flex',
    width: '90%',
    marginLeft: 'auto',
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  sectionItemContainerChecked: {
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  sectionItemText: {
    padding: 15,
    fontSize: 17,
    color: '#514D47',
    maxHeight: 55,
    flex: 1,
  },
  deleteBtn: {
    height: 60,
    width: 80,
    backgroundColor: '#AC5253',
  },
  deleteBtnText: {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#FFFFFF',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 5,
  },
});
