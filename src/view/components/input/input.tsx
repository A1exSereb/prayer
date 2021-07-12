import React from 'react';
import {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useAppDispatch} from '../../../redux/store';

export const Input = ({
  placeholder,
  imageSource,
  request,
}: {
  placeholder: string;
  imageSource: string;
  request: string;
}): React.Element => {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          /* dispatch({type: request, payload: input}); */
          setInput('');
        }}>
        <Image source={require('../../assets/plus.jpg')} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={input}
        onChangeText={text => setInput(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  icon: {
    margin: 13,
    width: 24,
    height: 24,
  },
  input: {
    width: '80%',
    height: '100%',
    fontSize: 17,
  },
});
