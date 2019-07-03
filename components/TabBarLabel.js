import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

export default class TabBarLabel extends React.Component {
    render() {
        return (
            <Text style={[styles.tabBarLabel,  this.props.focused? styles.tabBarLabelActive : {}]} >{this.props.title}</Text>
        );
    }
}
const styles = StyleSheet.create({
    tabBarLabel: {
        paddingBottom: 6,
        fontSize: 10,
        textAlign: 'center',
        color: Colors.tabIconDefault,
        fontFamily: 'poppins-regular'
    },
    tabBarLabelActive: {
        color: Colors.tintColor
    }
});