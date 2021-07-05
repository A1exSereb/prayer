import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export const Authorization: React.FC = () => {
  return (
    <View style={styles.fixToText}>
      <Button title="SIGN IN" />
      <Button title="SIGN UP" />
    </View>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    padding: 50,
    justifyContent: 'space-between',
  },
});
