import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function NearByScreen() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  );
}

NearByScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
