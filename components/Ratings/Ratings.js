import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Rating extends Component {
  render() {
    let { rate } = this.props;
    if (rate > 5) {
      rate = 5;
    } else if (rate < 0) {
      rate = 0;
    }
    const numFullStars = Math.round(rate);
    const numEmptyStars = 5 - numFullStars;
    const star = Platform.os === 'ios' ? `ios-star` : `md-star`;
    const emptyStar =
      Platform.os === 'ios' ? `ios-star-outline` : `md-star-outline`;

    const fullRatingIcons = [];
    const emptyRatingIcons = [];
    for (let i = 1; i <= numFullStars; i++) {
      fullRatingIcons.push(
        <Ionicons key={i} name={star} size={26} color="#febf00" />
      );
    }
    for (let i = 1; i <= numEmptyStars; i++) {
      emptyRatingIcons.push(<Ionicons key={i} name={emptyStar} size={26} />);
    }

    return (
      <View style={styles.container}>
        {emptyRatingIcons}
        {fullRatingIcons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#e3e3e3',
    alignItems: 'center',
    height: 40,
    padding: 5,
    justifyContent: 'center'
  }
});
