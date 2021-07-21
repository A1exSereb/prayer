import React from 'react';
import dayjs from 'dayjs';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {CommentList} from '../../../components/commentList/commentList';
import {
  getCommentsById,
  getCurrentUserCommentsCount,
} from '../../../../store/ducks/comments/selectors';
import {Members} from '../../../components/members/Members';
import {PrayerDetailsProp} from '../userNavigation';
import {Input} from '../../../components/input/input';
import relativeTime from 'dayjs/plugin/relativeTime';

export const PrayerDetails = ({route}: PrayerDetailsProp): JSX.Element => {
  const comments = useSelector(getCommentsById(route.params.prayerId));
  const userCommentsCount = useSelector(
    getCurrentUserCommentsCount(route.params.prayerId),
  );
  const inputProps = {
    placeholder: 'Add a comment...',
    parentId: route.params.prayerId,
    imageSource: '../../../images/assets/message.jpg',
    request: 'POST_COMMENT_REQUEST',
  };
  dayjs.extend(relativeTime);
  const lastUpdate = comments[comments.length - 1].created;
  const openDate = dayjs().format('MMM D YYYY');
  return (
    <View style={{height: '100%'}}>
      <ScrollView>
        <View style={styles.timeContainer}>
          <View style={styles.timeSeparator} />
          <Text style={styles.timeText}>
            Last prayed {dayjs(lastUpdate).fromNow()}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItemContainer}>
            <Text style={styles.itemHeaderDate}>{openDate}</Text>
            <Text style={styles.itemDescription}>Date Added</Text>
            <Text style={(styles.itemDescription, {color: '#72A8BC'})}>
              Opened for {dayjs(openDate).fromNow()}
            </Text>
          </View>
          <View style={styles.infoItemContainer}>
            <Text style={styles.itemHeader}>{comments.length}</Text>
            <Text style={styles.itemDescription}>Times Prayed Total</Text>
          </View>
          <View style={styles.infoItemContainer}>
            <Text style={styles.itemHeader}>{userCommentsCount}</Text>
            <Text style={styles.itemDescription}>Times Prayed by Me</Text>
          </View>
          <View style={styles.infoItemContainer}>
            <Text style={styles.itemHeader}>
              {comments.length - userCommentsCount}
            </Text>
            <Text style={styles.itemDescription}>Times Prayed by Others</Text>
          </View>
        </View>
        <Members
          members={[
            '../../../assets/user.png',
            '../../../assets/user1.png',
            '../../../assets/user2.png',
            '../../../assets/user3.png',
          ]}
        />
        <View style={{marginBottom: 56}}>
          <CommentList comments={comments} />
        </View>
      </ScrollView>
      <View style={styles.input}>
        <Input {...inputProps} />
      </View>
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
  input: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
    height: 56,
    alignItems: 'flex-start',
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
