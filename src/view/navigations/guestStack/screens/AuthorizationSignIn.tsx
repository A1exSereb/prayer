import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../../../store/store';
import {RootState} from '../../../../store/rootReducer';
import {SignInScreenNavigationProp} from '../guestNavigation';
import {AppRoutes, SignInDto} from '../../../../types';
import {signInRequest} from '../../../../store/ducks/authorization/saga';
import {Field, Form} from 'react-final-form';

export const AuthorizationSignIn: React.FC<SignInScreenNavigationProp> = ({
  navigation,
}: SignInScreenNavigationProp) => {
  const dispatch = useAppDispatch();
  const {loading} = useSelector((state: RootState) => state.authorization);

  const onSubmit = (value: SignInDto) => {
    const {email, password} = value;
    dispatch(signInRequest({email, password}));
  };
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
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
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.signInBtn}
                  onPress={handleSubmit}>
                  <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.signUpBtn}
                  onPress={() => navigation.navigate(AppRoutes.SignUp)}>
                  <Text style={styles.signUpText}>Sign Up</Text>
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
