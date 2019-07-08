import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class index extends Component {
  showButton = textTheme => {
    const { caption, icon } = this.props;
    const name = Platform.OS === 'ios' ? `ios-${icon}` : `md-${icon}`;
    if (icon) {
      return (
        <View style={styles.innerContainer}>
          <Text style={[styles.caption, textTheme]}>{caption}</Text>
          <Ionicons style={textTheme} name={name} size={26} />
        </View>
      );
    } else {
      return <Text style={[styles.caption, mytheme]}>{caption}</Text>;
    }
  };

  render() {
    const { theme, caption, icon, onPress } = this.props;
    let buttonTheme = theme === 'light' ? styles.light : styles.dark;

    let textTheme = theme === 'light' ? styles.textLight : styles.textDark;
    return (
      <TouchableOpacity
        style={[styles.container, buttonTheme]}
        onPress={onPress ? onPress : null}
      >
        {this.showButton(textTheme)}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 46,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d1d1'
  },
  caption: {
    textAlign: 'center',
    fontFamily: 'poppins-regular',
    fontSize: 13,
    marginRight: 10
  },
  light: {
    backgroundColor: '#d1d1d1',
    color: 'black'
  },
  dark: {
    backgroundColor: '#8a04b2',
    color: 'white'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textLight: {
    color: '#ededed'
  },
  textDark: {
    color: 'white'
  }
});
