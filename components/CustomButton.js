import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CustomButton extends Component {

  render() {

    return <TouchableOpacity onPress={this.props.onPress} style={{  backgroundColor: this.props.backgroundColor,
                                                                    width: this.props.width,
                                                                    borderRadius: 5,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    height: this.props.height,
                                                                  }}>
      <View style={{justifyContent: 'center'}}>
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </View>
    </TouchableOpacity>
  }
}

export default CustomButton;
