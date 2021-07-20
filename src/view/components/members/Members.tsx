import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
interface MembersProp {
  users: Array<string>;
}
export const Members = ({users}: MembersProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>members</Text>
      <View style={styles.imageContainer}>
        {users.map(item => (
          <Image style={styles.image} source={{uri: item}} />
        ))}
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../../../assets/add_user.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 15,
  },
  title: {
    color: '#72A8BC',
    fontSize: 13,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 10,
    marginRight:5,
  },
});
