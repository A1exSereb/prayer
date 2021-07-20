import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Members} from '../../../components/members/Members';
import {PrayerDetailsProp} from '../userNavigation';

export const PrayerDetails = ({route}: PrayerDetailsProp): JSX.Element => {
  return (
    <View>
      <View style={styles.timeContainer}>
        <View style={styles.timeSeparator} />
        <Text style={styles.timeText}>Last prayed 8 min ago</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItemContainer}>
          <Text style={styles.itemHeaderDate}>July 1995</Text>
          <Text style={styles.itemDescription}>Date Added</Text>
          <Text style={(styles.itemDescription, {color: '#72A8BC'})}>
            Opened for 4 days
          </Text>
        </View>
        <View style={styles.infoItemContainer}>
          <Text style={styles.itemHeader}>134</Text>
          <Text style={styles.itemDescription}>Times Prayed Total</Text>
        </View>
        <View style={styles.infoItemContainer}>
          <Text style={styles.itemHeader}>70</Text>
          <Text style={styles.itemDescription}>Times Prayed by Me</Text>
        </View>
        <View style={styles.infoItemContainer}>
          <Text style={styles.itemHeader}>99</Text>
          <Text style={styles.itemDescription}>Times Prayed by Others</Text>
        </View>
      </View>
      <Members
        users={[
          '../../../assets/user.png',
          '../../../assets/user1.png',
          '../../../assets/user2.png',
          '../../../assets/user3.png',
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    paddingTop: 13,
    paddingLeft: 13,
    paddingBottom: 13,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  timeSeparator: {
    height: 24,
    width: 4,
    borderRadius: 10,
    backgroundColor: '#AC5253',
    marginRight: 10,
  },
  timeText: {
    fontSize: 17,
    color: '#514D47',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 15,
    paddingTop: 26,
    height: 108,
    width: '50%',
    borderColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  itemHeader: {
    fontSize: 32,
    color: '#BFB393',
  },
  itemHeaderDate: {
    fontSize: 22,
    color: '#BFB393',
  },
  itemDescription: {
    fontSize: 13,
    color: '#514D47',
  },
});
