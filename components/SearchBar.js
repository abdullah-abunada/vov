import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function searchBar(props) {
  return (
    <View {...props} style={styles.container} >
      <Ionicons
      name={'md-search'}
      size={26}
      style={{ marginBottom: -3, padding:10 }}
      color={'#707070'}
    />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => props.handleSearchInput(text)}
        value={props.text}
        placeholder='search'
        placeholderTextColor='#DEDEDE'
      />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   alignSelf:'center',
   height:46,
   justifyContent:'center',
   flexDirection:'row',
   alignItems:'center',
   borderWidth:1,
   borderColor:'#DEDEDE',
   borderRadius:10
 },
 textInput: {
  height: 38,
  borderColor: 'gray',
  borderWidth: 1,
  width:'90%',
  fontSize:12,
  padding:5,
  borderWidth:0,
  fontFamily:'poppins-regular'
 }
});
