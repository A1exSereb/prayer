import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useAppDispatch} from '../../../../store/store';

export const ModalMyDesk: React.FC = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter title"
            placeholderTextColor="#000"
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter description"
            placeholderTextColor="#000"
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => {
              dispatch({
                type: 'POST_COLUMN_REQUEST',
                payload: {title, description},
              });
              navigation.goBack();
            }}>
            <Text style={styles.signInText}>Ok</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => navigation.goBack()}>
            <Text style={styles.signInText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formWrapper: {
    width: '90%',
  },
  formRow: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#ddd',
    height: 40,
    paddingHorizontal: 10,
  },
  signInBtn: {
    backgroundColor: '#1aa11a',
    paddingVertical: 10,
    marginTop: 10,
    width: '45%',
  },
  signInText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
  },
  signUpBtn: {
    backgroundColor: '#1a49a1',
    paddingVertical: 10,
    marginTop: 10,
    width: '45%',
  },
  signUpText: {
    textAlign: 'center',
    color: '#f7f7f7',
    fontSize: 18,
    fontWeight: '800',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
