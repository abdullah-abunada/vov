import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ButtonIcon extends React.Component {
  render() {
    const { color, icon, text } = this.props;
    return (
      <TouchableOpacity onPress={this._onPressButton} style={styles.contaner}>
        <View style={[styles.button, { borderColor: `${color}22` }]} >
          <Ionicons
            name={
              Platform.OS === 'ios'
                ? `ios-${icon}`
                : `md-${icon}`
            }
            size={27}
            color={color}
            style={styles.icon}
          />
        </View>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  contaner: {
    width: 68,
    height: 96,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  icon: {
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
  }
});


export default ButtonIcon;