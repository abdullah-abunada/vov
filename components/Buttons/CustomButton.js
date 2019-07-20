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
      return <Text style={[styles.caption, textTheme]}>{caption}</Text>;
    }
  };

  render() {
    const { theme, caption, icon, onPress } = this.props;
    let buttonTheme =
      theme === 'light' ? [styles.light, styles.borderLight] : styles.dark;

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
    borderRadius: 5
  },
  caption: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginRight: 10
  },
  light: {
    backgroundColor: '#ededed',
    color: 'black'
  },
  dark: {
    backgroundColor: '#8a04b2',
    color: 'white'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline'
  },
  textLight: {
    color: '#b9b9b9'
  },
  textDark: {
    color: 'white'
  },
  borderLight: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c9c9c9'
  }
});
