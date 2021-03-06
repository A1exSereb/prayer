import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useAppDispatch} from '../../../store/store';
import {AppRoutes} from '../../../types';
import {getCommentsById} from '../../../store/ducks/comments/selectors';
import {useSelector} from 'react-redux';
import {
  changePrayerRequest,
  deletePrayerRequest,
} from '../../../store/ducks/prayers/saga';
interface prayerItemProp {
  checked: boolean;
  id: number;
  title: string;
  type?: string;
  description: string | null;
  navigation: any;
}
export const PrayerItem = ({
  checked,
  id,
  title,
  type,
  description,
  navigation,
}: prayerItemProp): JSX.Element => {
  const [showDeletBtn, setShowDeletBtn] = useState(false);
  const comments = useSelector(getCommentsById(id));
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
          isChecked={checked}
          checkBoxColor='#000'
          checkedImage={<Image source={require('../../../assets/images/On.png')}/>}
          unCheckedImage={<Image source={require('../../../assets/images/Off.png')}/>}
          onClick={() => {
            dispatch(
              changePrayerRequest({id, title, checked: !checked, description}),
            );
          }}
        />
        <TouchableOpacity
          style={styles.touchableConatiner}
          onPress={() =>
            navigation.navigate(AppRoutes.PrayerDetails, {prayerId: id, title})
          }
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
                source={require('../../../assets/images/user.png')}
              />
              <Text style={styles.marginRight}>3</Text>
            </View>
            {comments.length > 0 && (
              <View style={styles.flexContainer}>
                <Image
                  style={styles.marginRight}
                  source={require('../../../assets/images/prayer_line.png')}
                />
                <Text style={styles.marginRight}>{comments.length}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
      {showDeletBtn && (
        <TouchableOpacity
          onPress={() => dispatch(deletePrayerRequest(id))}
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
  touchableConatiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
