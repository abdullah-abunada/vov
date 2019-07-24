import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Alert } from 'react-native';
import CustomButton from '../components/CustomButton.js';
import Layout from '../constants/Layout'

export default function NearByScreen() {
  return (<View style={styles.container}>
      <ScrollView >
        <Text style={styles.header}>find the nearest shop!</Text>
        <View style={styles.image}>
          <Image source={require('../assets/images/gps.png')} />
        </View>
        <Text style={styles.paragraph}>It is a long established fact that a reader will be distracted by the readablli</Text>
      </ScrollView>
      <CustomButton onPress={() => Alert.alert('Hi')} text="location" textStyle={styles.textStyle} backgroundColor="#8A04B2"  height={46}/>
      </View>
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
    fontFamily: 'Poppins-Bold',

  },
  paragraph: {
    textAlign: 'center',
    fontSize: 14,
    opacity: .44,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    marginBottom: 56.7,
    fontFamily: 'poppins-regular',

  },
  textStyle:{
    color: "#fff",
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'poppins-regular',
    textTransform: 'uppercase',
  },
  image: {
    flex: 1,
    alignItems: 'center',
  }
});
