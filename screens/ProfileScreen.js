import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  );
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
  headerTitleStyle: {
    fontFamily: 'poppins-regular',
    fontWeight: "100",
    fontSize: 14
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
