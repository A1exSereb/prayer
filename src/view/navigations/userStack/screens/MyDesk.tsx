import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {getColumn} from '../../../../store/ducks/columns/selectors';
import {useAppDispatch} from '../../../../store/store';
import {Error} from '../../../components/error/Error';
export const MyDesk: JSX.Element = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {columns, loading, error} = useSelector(getColumn);
  useEffect(() => {
    dispatch({type: 'GET_COLUMN_REQUEST'});
    dispatch({type: 'GET_PRAYER_REQUEST'});
  }, [dispatch]);
  console.log('columns', columns);
  if (error) {
    <Error />;
  }
  if (loading) {
    <View>
      <ScrollView style={styles.section}>
        <Text>Loading...</Text>
      </ScrollView>
    </View>;
  }
  return (
    <View>
      <ScrollView style={styles.section}>
        {columns.map(item => (
          <TouchableOpacity
            style={styles.sectionItemContainer}
            key={item.id}
            onPress={() =>
              navigation.navigate('PrayerTabs', {
                title: item.title,
                columnId: item.id,
              })
            }>
            <Text style={styles.sectionItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 15,
    backgroundColor: '#fff',
    height: '100%',
  },
  sectionItemContainer: {
    width: '100%',
    minHeight: 59,
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    marginBottom: 10,
  },
  sectionItemText: {
    padding: 15,
    fontSize: 17,
    color: '#514D47',
  },
});
