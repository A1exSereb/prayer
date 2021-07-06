import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export const AuthorizationSignUp: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.formRow}>
          <TextInput style={styles.textInput} placeholder="Enter email" />
        </View>
        <View style={styles.formRow}>
          <TextInput style={styles.textInput} placeholder="Enter name" />
        </View>
        <View style={styles.formRow}>
          <TextInput style={styles.textInput} placeholder="Enter password" />
        </View>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.btnText}>Ok</Text>
        </TouchableOpacity>
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
    backgroundColor: '#1aa11a',
    paddingVertical: 10,
    marginTop: 10,
    width: '45%',
  },
  btnText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
  },
});
