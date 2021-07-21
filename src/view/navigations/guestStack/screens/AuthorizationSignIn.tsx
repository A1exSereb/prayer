import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../../../store/store';
import {RootState} from '../../../../store/rootReducer';
import {SignInScreenNavigationProp} from '../guestNavigation';
import {AppRoutes} from '../../../../types';
import {signInRequest} from '../../../../store/ducks/authorization/saga';

export const AuthorizationSignIn: React.FC<SignInScreenNavigationProp> = ({
  navigation,
}: SignInScreenNavigationProp) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const {loading} = useSelector((state: RootState) => state.authorization);
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
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter email"
            placeholderTextColor="#000"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter password"
            value={password}
            secureTextEntry
            placeholderTextColor="#000"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => dispatch(signInRequest({email, password}))}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => navigation.navigate(AppRoutes.SignUp)}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
