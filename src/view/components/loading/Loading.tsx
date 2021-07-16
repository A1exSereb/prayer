import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export const Loading = () => {
  return (
    <View>
      <ScrollView style={styles.section}>
        <Text>Loading...</Text>
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
});
