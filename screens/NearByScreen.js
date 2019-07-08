import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Alert } from 'react-native';
import CustomButton from '../components/CustomButton.js';
import Layout from '../constants/Layout'

export default function NearByScreen() {
  return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>find the nearest shop!</Text>
        <Image source={require('../assets/images/gps.png')} />
        <Text style={styles.paragraph}>It is a long established fact that a reader will be distracted by the readablli</Text>
        <CustomButton onPress={() => Alert.alert('Hi')} text="location" textStyle={styles.textStyle} backgroundColor="#8A04B2"  height={46}/>
      </ScrollView>
  );
}

NearByScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:  Layout.screenMargin,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Poppins',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginTop: 94,
    marginLeft: 33,
    marginRight: 34,
    marginBottom: 40,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 14,
    opacity: .44,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    marginBottom: 56.7,
  },
  textStyle:{
    color: "#fff",
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
  }
});
