import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = props => {
  return (
    <View style={styles.InputWrapper}>
      <TextInput
        style={styles.TextInput}
        value={props.value}
        onChangeText={props.value}
        maxLength={props.maxLength}
        onKeyPress={props.onKeyPress}
        underlineColorAndroid={'transparent'}
        keyboardType="phone-pad"
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
