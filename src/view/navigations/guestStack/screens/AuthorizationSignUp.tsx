import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SignUpDto} from '../../../../types';
import {signUpRequest} from '../../../../store/ducks/authorization/saga';
import {useAppDispatch} from '../../../../store/store';
import { Field, Form } from 'react-final-form';

export const AuthorizationSignUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (value: SignUpDto) => {
    const {email, password, name} = value;
    dispatch(signUpRequest({email, password, name}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <View>
              <Field name="email" placeholder="Enter your email">
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
              <Field name="password" placeholder="Enter your password">
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
              <Field name="name" placeholder="Enter your name">
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
              <View>
                <TouchableOpacity style={styles.Btn} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Ok</Text>
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
    height: '100%',
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
  Btn: {
    backgroundColor: '#BFB393',
    paddingVertical: 10,
    marginTop: 10,
    width: '45%',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
});
