import React, { Component } from 'react';
import { View, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default class Ratings extends Component {
  showStars() {
    const star = Platform.OS === 'ios' ? 'ios-star' : 'md-star';
    const { numStars, status } = this.props;
    const icons = [];
    const containerStyle =
      status === 'selected'
        ? [styles.container, styles.selectedContainerColor]
        : [styles.container, styles.defaultContainerColor];

     const starStyle =
      status === 'selected'
        ? [styles.star, styles.selectedStarColor]
        : [styles.star, styles.defaultStarColor];
    for (let i = 1; i <= numStars; i++) {
      icons.push(<Ionicons key={i} name={star} style={starStyle} />);
    }
    return <View style={containerStyle}>{icons}</View>;
  }
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>{this.showStars()}</TouchableOpacity>
    );
  }
}

 const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    padding: 6,
    borderRadius: 5,
  },
  selectedContainerColor: {
    backgroundColor: Colors.tintColor,
    borderWidth: 0
  },
  defaultContainerColor: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#e9e9e9'
  },
  defaultStarColor: {
    color: '#979797'
  },
  selectedStarColor: {
    color: 'white'
  },
  star: {
    padding: 2
  }
});
