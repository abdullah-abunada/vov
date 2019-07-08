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
  showButton = mytheme => {
    const { caption, icon } = this.props;
    const name = Platform.OS === 'ios' ? `ios-${icon}` : `md-${icon}`;
    if (icon) {
      return (
        <View style={styles.innerContainer}>
          <Text style={[styles.caption, mytheme]}>{caption}</Text>
          <Ionicons style={mytheme} name={name} size={26} />
        </View>
      );
    } else {
      return <Text style={[styles.caption, mytheme]}>{caption}</Text>;
    }
  };

  render() {
    const { theme, caption, icon } = this.props;
    let mytheme = theme === 'light' ? styles.light : styles.dark;
    return (
      <TouchableOpacity style={[styles.container, mytheme]}>
        {this.showButton(mytheme)}
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
  }
});
