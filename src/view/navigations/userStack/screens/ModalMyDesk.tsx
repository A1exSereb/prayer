import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {CreateColumnDto} from '../../../../types';
import {postColumnRequest} from '../../../../store/ducks/columns/saga';
import {useAppDispatch} from '../../../../store/store';
import {ModalMyDeskScreenNavigationProp} from '../userNavigation';
import { Field, Form } from 'react-final-form';

export const ModalMyDesk: React.FC<ModalMyDeskScreenNavigationProp> = ({
  navigation,
}: ModalMyDeskScreenNavigationProp) => {
  const dispatch = useAppDispatch();

  const onSubmit = (value: CreateColumnDto) => {
    const {title, description} = value;
    dispatch(postColumnRequest({title, description}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <View>
              <Field name="title" placeholder="Enter title">
                {({input, placeholder}) => {
                  return (
                    <View style={styles.formRow}>
                      <TextInput
                        style={styles.textInput}
                        placeholder={placeholder}
                        {...input}
                      />
                    </View>
                  );
                }}
              </Field>
              <Field name="description" placeholder="Enter description">
                {({input, placeholder}) => {
                  return (
                    <View style={styles.formRow}>
                      <TextInput
                        style={styles.textInput}
                        placeholder={placeholder}
                        {...input}
                      />
                    </View>
                  );
                }}
              </Field>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.signInBtn}
                  onPress={() => {
                    handleSubmit();
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
          )}
        />
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
