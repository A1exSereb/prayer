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
      style={
        type === 'checked'
          ? styles.sectionItemContainerChecked
          : styles.sectionItemContainer
      }
      key={id}>
      <CheckBox
        value={checked}
        onChange={() => {
          dispatch({
            type: 'CHANGE_PRAYER_REQUEST',
            payload: {id, title, checked: !checked, description},
          });
        }}
      />
      <TouchableOpacity onLongPress={() => setShowDeletBtn(!showDeletBtn)}>
        <Text
          style={
            checked ? styles.checkedSectionItemText : styles.sectionItemText
          }>
          {title}
        </Text>
      </TouchableOpacity>
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
    height: 68,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  sectionItemContainerChecked: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
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
  deleteBtn: {
    height: '100%',
    width: 80,
    backgroundColor: '#AC5253',
    marginLeft: 'auto',
  },
  deleteBtnText: {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#FFFFFF',
  },
});
