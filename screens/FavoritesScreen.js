import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  );
}

FavoritesScreen.navigationOptions = {
  title: 'My Favorites',
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
