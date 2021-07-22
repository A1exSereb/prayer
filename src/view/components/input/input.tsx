import React from 'react';
import {useState} from 'react';
import Plus from '../../../assets/message.jpg';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useAppDispatch} from '../../../store/store';
import {Field, Form} from 'react-final-form';
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
  const dispatch = useAppDispatch();
  console.log('image source', imageSource);

  const onSubmit = (value: {title: string}) => {
    const {title} = value;
    title !== '' &&
      dispatch({
        type: request,
        payload: {title, parentId},
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit}) => (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => handleSubmit()}>
            <Image source={{uri: imageSource}} style={styles.icon} />
          </TouchableOpacity>
          <Field name="title" placeholder={placeholder}>
            {({input, placeholder}) => {
              return (
                <View style={styles.input}>
                  <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    {...input}
                  />
                </View>
              );
            }}
          </Field>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  icon: {
    margin: 13,
    width: 24,
    height: 24,
  },
  input: {
    width: '100%',
    height: '100%',
    fontSize: 17,
  },
});
