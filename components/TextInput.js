import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = props => {
  return (
    <View style={[styles.InputWrapper,props.width]}>
      <TextInput
        style={styles.TextInput}
        value={props.value}
        onChangeText={props.onChangeText}
        maxLength={props.maxLength}
        onKeyPress={props.onKeyPress}
        underlineColorAndroid={'transparent'}
        keyboardType={props.keyboardType}
        textAlign={props.textAlign}
	placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    fontSize: 18,
    fontWeight: 'bold',
  },
  InputWrapper: {
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 2,
  },
});

export default Input;
