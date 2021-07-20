import dayjs from 'dayjs';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  ScrollView,
} from 'react-native';
import {Comment} from 'src/store/ducks/comments/slice';
interface CommentListProps {
  comments: Array<Comment>;
}
export const CommentList = ({comments}: CommentListProps) => {
  dayjs.extend(relativeTime);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>comments</Text>
      </View>
      <ScrollView style={{height: '100%'}}>
        {comments.map(item => {
          return (
            <View key={item.id} style={styles.commentContainer}>
              <Image
                style={styles.commentImage}
                source={require('../../../assets/user1.png')}
              />
              <View style={styles.commentTextContainer}>
                <View style={styles.commentHeadersContainer}>
                  <Text style={styles.commentHeader}>{item.userId}</Text>
                  <Text style={styles.commentDate}>
                    {dayjs(item.created).fromNow()}
                  </Text>
                </View>
                <Text style={styles.commentText}>{item.body}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerContainer: {
    height: 40,
    paddingLeft: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  header: {
    textTransform: 'uppercase',
    color: '#72A8BC',
    fontSize: 13,
  },
  commentContainer: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 74,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    justifyContent: 'flex-start',
  },
  commentImage: {
    width: 46,
    height: 46,
    borderRadius: 25,
    marginRight: 9,
  },
  commentHeader: {
    fontSize: 17,
    color: '#514D47',
  },
  commentDate: {
    marginLeft: 6,
    fontSize: 13,
    color: '#9C9C9C',
    alignSelf: 'center',
  },
  commentText: {
    fontSize: 17,
    color: '#514D47',
  },
  commentTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  commentHeadersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
