import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import Input from '../components/TextInput';
import CustomButton from '../components/CustomButton';
import Layout from '../constants/Layout';

export default function VerficationMsg() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>For Local Street Shopping With Deals</Text>
      <Image source={require('../assets/images/girl.png')} />
      <Text style={styles.paragraph}>
        Its a long establsihed fact that a reader will be distracted by the
        readablli
      </Text>
      <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 29,
    }}>
    <View style={{ flex: 1, padding: 7 }}>
      <Input
        textAlign="center"
        style={{ width: 174 }}
        value="+91"
        keyboardType="phone-pad"
      />
    </View>
    <View style={{ flex: 3, padding: 7 }}>
      <Input
        textAlign="center"
        style={{ width: 58 }}
        value="9876543210"
        keyboardType="phone-pad"
      />
    </View>
  </View>

  <CustomButton
    text="NEXT"
    textStyle={styles.buttonStyle}
    backgroundColor="#8A04B2"
    height={46}
  />
    </ScrollView>
  
  );
}

VerficationMsg.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: Layout.screenMargin,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 94,
    marginLeft: 18,
    marginRight: 13,
    marginBottom: 40,
  },
  paragraph: {
    opacity: 0.44,
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 23.7,
    marginTop: 30,
  },
  buttonStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'uppercase',
  },
});
