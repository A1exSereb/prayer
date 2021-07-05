import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export const Column: React.FC = () => {
  return (
    <ScrollView style={styles.section}>
      <View style={styles.sectionItemContainer}>
        <Text style={styles.sectionItemText}>To do</Text>
      </View>
      <View style={styles.sectionItemContainer}>
        <Text style={styles.sectionItemText}>In Progress</Text>
      </View>
      <View style={styles.sectionItemContainer}>
        <Text style={styles.sectionItemText}>Completed</Text>
      </View>
      <View style={styles.sectionItemContainer}>
        <Text style={styles.sectionItemText}>And another one</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 15,
    backgroundColor: '#fff',
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
