import React from 'react';
import {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useAppDispatch} from '../../../store/store';
interface InputProps {
  placeholder: string;
  imageSource: string;
  request: string;
  parentId: number;
}
export const Input = ({
  placeholder,
  imageSource,
  request,
  parentId,
}: InputProps): React.Element => {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  console.log('image source', imageSource);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: request,
            payload: {title: input, parentId},
          });
          setInput('');
          console.log('button pressed');
        }}>
        <Image source={{uri: imageSource}} style={styles.icon} />
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
