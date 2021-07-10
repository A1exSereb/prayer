import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/rootReducer';
import {useAppDispatch} from '../../../redux/store';
export const Column: JSX.Element = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {columns, loading} = useSelector((state: RootState) => state.column);
  useEffect(() => {
    dispatch({type: 'LOAD_COLUMN_REQUEST'});
  }, [dispatch]);
  console.log('columns', columns);
  if (loading) {
    <View>
      <ScrollView style={styles.section}>
        <Text>Loading...</Text>
      </ScrollView>
    </View>
  }
  return (
    <View>
      <ScrollView style={styles.section}>
        {columns.map(item => (
          <TouchableOpacity style={styles.sectionItemContainer} key={item.id}>
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
